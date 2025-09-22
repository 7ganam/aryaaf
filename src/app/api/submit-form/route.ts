import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Get the Google Apps Script URL from environment variables
    const googleScriptUrl = process.env.GOOGLE_APPS_SCRIPT_URL;
    console.log(googleScriptUrl);

    if (!googleScriptUrl) {
      return NextResponse.json(
        { success: false, error: "Google Apps Script URL not configured" },
        { status: 500 }
      );
    }

    // Forward the request to Google Apps Script
    const response = await fetch(googleScriptUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const result = await response.json();

    if (result.success) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json(
        { success: false, error: result.error || "Form submission failed" },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error("Form submission error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
