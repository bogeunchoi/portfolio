import { NextResponse } from "next/server";
import { getAllProjects } from "@/lib/projects";

export async function GET() {
  const base = "http://localhost:3000"; // 👉 배포 시 실제 도메인으로 교체
  const projects = getAllProjects();

  const urls = [
    "",
    "/about",
    "/projects",
    ...projects.map((p) => `/projects/${p.slug}`),
    "/contact",
  ];

  const body =
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">` +
    urls.map((u) => `<url><loc>${base}${u}</loc></url>`).join("") +
    `</urlset>`;

  return new NextResponse(body, {
    headers: { "content-type": "application/xml" },
  });
}
