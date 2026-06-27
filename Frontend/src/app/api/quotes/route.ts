import { NextResponse } from "next/server";
import type { QuoteFormData, ApiResponse } from "@/lib/types";

export async function POST(request: Request) {
  try {
    const body: QuoteFormData = await request.json();

    if (!body.name || !body.phone || !body.service) {
      return NextResponse.json<ApiResponse>({
        success: false,
        message: "Name, phone, and service are required.",
        errors: {
          ...(!body.name ? { name: ["Name is required"] } : {}),
          ...(!body.phone ? { phone: ["Phone is required"] } : {}),
          ...(!body.service ? { service: ["Service is required"] } : {}),
        },
      }, { status: 400 });
    }

    console.log("=== NEW QUOTE REQUEST ===");
    console.log(JSON.stringify(body, null, 2));

    return NextResponse.json<ApiResponse>({
      success: true,
      message: "Quote request received! We'll respond via WhatsApp within 2 hours.",
      data: body,
    });
  } catch (error) {
    console.error("Quote API error:", error);
    return NextResponse.json<ApiResponse>({
      success: false,
      message: "Something went wrong. Please try again or WhatsApp us directly.",
    }, { status: 500 });
  }
}
