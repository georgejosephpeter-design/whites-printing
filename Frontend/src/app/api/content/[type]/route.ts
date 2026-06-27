import { NextResponse } from "next/server";
import type { ApiResponse } from "@/lib/types";

const contentKeys: Record<string, string> = {
  services: "services",
  industries: "industries",
  locations: "locations",
  faq: "faqs",
  testimonials: "testimonials",
  offers: "offers",
};

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ type: string }> }
) {
  const { type } = await params;

  const exportKey = contentKeys[type];
  if (!exportKey) {
    return NextResponse.json<ApiResponse>({
      success: false,
      message: `Content type "${type}" not found.`,
    }, { status: 404 });
  }

  try {
    const module = await import(`@/data/${type}`);
    const items: unknown[] = (module as Record<string, unknown[]>)[exportKey] || [];

    return NextResponse.json({
      success: true,
      data: { items, total: items.length, type },
    });
  } catch (error) {
    console.error(`Content API error for ${type}:`, error);
    return NextResponse.json<ApiResponse>({
      success: false,
      message: "Failed to load content.",
    }, { status: 500 });
  }
}
