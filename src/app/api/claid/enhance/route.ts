import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { imageUrl } = await req.json();
    if (!imageUrl) {
      return NextResponse.json({ error: "imageUrl required" }, { status: 400 });
    }
    const apiKey = process.env.CLAID_API_KEY || "";
    if (!apiKey) {
      // No Claid key - return original image URL as-is
      return NextResponse.json({ url: imageUrl });
    }
    const res = await fetch("https://api.claid.ai/v1-beta1/image/edit/upload", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        input: imageUrl,
        operations: { restorations: { upscale: "smart_enhance" } },
        output: { format: { type: "jpeg", quality: 95 } },
      }),
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok || !data?.data?.output?.tmp_url) {
      return NextResponse.json({ url: imageUrl }); // fallback to original
    }
    return NextResponse.json({ url: data.data.output.tmp_url });
  } catch (e) {
    return NextResponse.json({ error: "Enhancement failed" }, { status: 500 });
  }
}
