import { NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import path from "path";
import type { ApiResponse } from "@/lib/types";
import { MAX_FILE_SIZE, MAX_FILES, ACCEPTED_FILE_TYPES } from "@/lib/types";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const files = formData.getAll("files") as File[];

    if (files.length === 0) {
      return NextResponse.json<ApiResponse>({
        success: false,
        message: "No files provided.",
      }, { status: 400 });
    }

    if (files.length > MAX_FILES) {
      return NextResponse.json<ApiResponse>({
        success: false,
        message: `Maximum ${MAX_FILES} files allowed.`,
      }, { status: 400 });
    }

    const uploadDir = path.join(process.cwd(), "public", "uploads");
    await mkdir(uploadDir, { recursive: true });

    const uploadedFiles = [];

    for (const file of files) {
      const ext = path.extname(file.name).toLowerCase();
      const allowedExts = ACCEPTED_FILE_TYPES.split(",");
      if (!allowedExts.includes(ext)) {
        return NextResponse.json<ApiResponse>({
          success: false,
          message: `File type ${ext} is not accepted. Accepted: PDF, AI, EPS, CDR, PSD, JPG, PNG, TIFF`,
        }, { status: 400 });
      }

      if (file.size > MAX_FILE_SIZE) {
        return NextResponse.json<ApiResponse>({
          success: false,
          message: `File ${file.name} exceeds 25MB limit.`,
        }, { status: 400 });
      }

      const buffer = Buffer.from(await file.arrayBuffer());
      const uniqueName = `${Date.now()}-${file.name}`;
      const filePath = path.join(uploadDir, uniqueName);

      await writeFile(filePath, buffer);

      uploadedFiles.push({
        name: file.name,
        size: file.size,
        type: file.type,
        url: `/uploads/${uniqueName}`,
      });
    }

    return NextResponse.json<ApiResponse>({
      success: true,
      message: `${uploadedFiles.length} file(s) uploaded successfully.`,
      data: { files: uploadedFiles },
    });
  } catch (error) {
    console.error("Upload API error:", error);
    return NextResponse.json<ApiResponse>({
      success: false,
      message: "Upload failed. Please try again.",
    }, { status: 500 });
  }
}
