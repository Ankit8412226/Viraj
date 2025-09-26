import { NextResponse } from "next/server";

const SITEMAP_URL = "https://virajjewellers.com/sitemap.xml";

export async function GET() {
  try {
    const endpoints = [
      `https://www.google.com/ping?sitemap=${encodeURIComponent(SITEMAP_URL)}`,
      `https://www.bing.com/ping?sitemap=${encodeURIComponent(SITEMAP_URL)}`,
    ];
    const results = await Promise.allSettled(
      endpoints.map((url) => fetch(url, { method: "GET" }))
    );
    return NextResponse.json({ ok: true, results });
  } catch (e) {
    return NextResponse.json({ ok: false, error: (e as Error).message }, { status: 500 });
  }
}


