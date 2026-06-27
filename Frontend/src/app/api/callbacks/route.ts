import { NextResponse } from "next/server";
import type { CallbackFormData, ApiResponse } from "@/lib/types";

export async function POST(request: Request) {
  try {
    const body: CallbackFormData = await request.json();

    if (!body.name || !body.phone || !body.timePreference) {
      return NextResponse.json<ApiResponse>({
        success: false,
        message: "Name, phone, and time preference are required.",
        errors: {
          ...(!body.name ? { name: ["Name is required"] } : {}),
          ...(!body.phone ? { phone: ["Phone is required"] } : {}),
          ...(!body.timePreference ? { timePreference: ["Time preference is required"] } : {}),
        },
      }, { status: 400 });
    }

    const validTimes = ["now", "1hour", "4hours", "tomorrow", "anytime"];
    if (!validTimes.includes(body.timePreference)) {
      return NextResponse.json<ApiResponse>({
        success: false,
        message: "Invalid time preference.",
        errors: { timePreference: ["Invalid time preference selected."] },
      }, { status: 400 });
    }

    console.log("=== NEW CALLBACK REQUEST ===");
    console.log(JSON.stringify(body, null, 2));

    return NextResponse.json<ApiResponse>({
      success: true,
      message: "Callback request received! We'll call you back at your preferred time.",
      data: body,
    });
  } catch (error) {
    console.error("Callback API error:", error);
    return NextResponse.json<ApiResponse>({
      success: false,
      message: "Something went wrong. Please try again or WhatsApp us directly.",
    }, { status: 500 });
  }
}
