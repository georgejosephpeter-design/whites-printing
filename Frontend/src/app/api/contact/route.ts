import { NextResponse } from "next/server";
import type { ContactFormData, ApiResponse } from "@/lib/types";

export async function POST(request: Request) {
  try {
    const body: ContactFormData = await request.json();

    if (!body.name || !body.email || !body.subject || !body.message) {
      return NextResponse.json<ApiResponse>({
        success: false,
        message: "Name, email, subject, and message are required.",
        errors: {
          ...(!body.name ? { name: ["Name is required"] } : {}),
          ...(!body.email ? { email: ["Email is required"] } : {}),
          ...(!body.subject ? { subject: ["Subject is required"] } : {}),
          ...(!body.message ? { message: ["Message is required"] } : {}),
        },
      }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json<ApiResponse>({
        success: false,
        message: "Please provide a valid email address.",
        errors: { email: ["Invalid email format."] },
      }, { status: 400 });
    }

    console.log("=== NEW CONTACT MESSAGE ===");
    console.log(JSON.stringify(body, null, 2));

    return NextResponse.json<ApiResponse>({
      success: true,
      message: "Message received! We'll get back to you within 24 hours.",
      data: body,
    });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json<ApiResponse>({
      success: false,
      message: "Something went wrong. Please try again or WhatsApp us directly.",
    }, { status: 500 });
  }
}
