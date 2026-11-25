import { renderOgImage } from "@/lib/og";

export const alt =
  "Luc Baxmann — Développeur web freelance & automatisation IA, Marseille";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return renderOgImage("fr");
}
