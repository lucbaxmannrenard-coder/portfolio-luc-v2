import { renderOgImage } from "@/lib/og";

export const alt = "Luc Baxmann — Freelance web developer & AI automation, Marseille";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return renderOgImage("en");
}
