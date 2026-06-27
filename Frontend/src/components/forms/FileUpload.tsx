"use client";

import { useState, useRef, type DragEvent } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import type { UploadedFile, ApiResponse } from "@/lib/types";
import { MAX_FILE_SIZE, MAX_FILES, ACCEPTED_FILE_TYPES } from "@/lib/types";

interface FileUploadProps {
  value: UploadedFile[];
  onChange: (files: UploadedFile[]) => void;
  error?: string;
  disabled?: boolean;
}

export default function FileUpload({ value, onChange, error, disabled }: FileUploadProps) {
  const [dragOver, setDragOver] = useState(false);
  const [uploading, setUploading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  function formatSize(bytes: number): string {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  }

  async function uploadFiles(fileList: FileList | File[]) {
    const filesArray = Array.from(fileList);
    const currentCount = value.length;

    if (currentCount + filesArray.length > MAX_FILES) {
      toast.error(`Maximum ${MAX_FILES} files allowed.`);
      return;
    }

    for (const file of filesArray) {
      const ext = "." + file.name.split(".").pop()?.toLowerCase();
      const allowedExts = ACCEPTED_FILE_TYPES.split(",");
      if (!allowedExts.includes(ext)) {
        toast.error(`${file.name}: File type not accepted.`);
        return;
      }
      if (file.size > MAX_FILE_SIZE) {
        toast.error(`${file.name}: File exceeds 25MB limit.`);
        return;
      }
    }

    setUploading(true);
    try {
      const formData = new FormData();
      filesArray.forEach((file) => formData.append("files", file));

      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });
      const data: ApiResponse<{ files: UploadedFile[] }> = await res.json();

      if (data.success && data.data) {
        onChange([...value, ...data.data.files]);
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    } catch {
      toast.error("Upload failed. Please try again.");
    } finally {
      setUploading(false);
    }
  }

  function handleDragOver(e: DragEvent) {
    e.preventDefault();
    if (!disabled) setDragOver(true);
  }

  function handleDragLeave() {
    setDragOver(false);
  }

  function handleDrop(e: DragEvent) {
    e.preventDefault();
    setDragOver(false);
    if (disabled) return;
    if (e.dataTransfer.files.length > 0) {
      uploadFiles(e.dataTransfer.files);
    }
  }

  function handleFileSelect(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files && e.target.files.length > 0) {
      uploadFiles(e.target.files);
      e.target.value = "";
    }
  }

  function handleRemove(index: number) {
    const updated = value.filter((_, i) => i !== index);
    onChange(updated);
  }

  return (
    <div className="space-y-4">
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => inputRef.current?.click()}
        className={`relative flex flex-col items-center justify-center rounded-lg border-2 border-dashed p-8 text-center cursor-pointer transition-colors ${
          dragOver
            ? "border-blue-500 bg-blue-50"
            : "border-gray-300 bg-gray-50 hover:border-gray-400"
        } ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
      >
        <input
          ref={inputRef}
          type="file"
          multiple
          accept={ACCEPTED_FILE_TYPES}
          className="hidden"
          onChange={handleFileSelect}
          disabled={disabled || uploading}
        />
        {uploading ? (
          <div className="flex flex-col items-center gap-2">
            <div className="h-6 w-6 animate-spin rounded-full border-2 border-gray-400 border-t-blue-600" />
            <p className="text-sm text-gray-500">Uploading...</p>
          </div>
        ) : (
          <>
            <svg
              className="mb-2 h-10 w-10 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              />
            </svg>
            <p className="text-sm font-medium text-gray-700">
              Drop files here or click to browse
            </p>
            <p className="mt-1 text-xs text-gray-500">
              PDF, AI, EPS, CDR, PSD, JPG, PNG, TIFF (max 25MB each, up to {MAX_FILES} files)
            </p>
          </>
        )}
      </div>

      {error && <p className="text-sm text-red-500">{error}</p>}

      {value.length > 0 && (
        <ul className="space-y-2">
          {value.map((file, index) => (
            <li
              key={index}
              className="flex items-center justify-between rounded-md border bg-white px-3 py-2 text-sm"
            >
              <div className="min-w-0 flex-1">
                <p className="truncate font-medium">{file.name}</p>
                <p className="text-xs text-gray-500">{formatSize(file.size)}</p>
              </div>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => handleRemove(index)}
                disabled={disabled}
                className="ml-2 h-7 w-7 p-0 text-red-500 hover:text-red-700"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </Button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
