import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import type { Lang } from "@/lib/i18n";

const text: Record<
  Lang,
  { role: string; tagline: string; place: string }
> = {
  en: {
    role: "Freelance Web Developer & AI Automation",
    tagline: "Websites that convert. Workflows that run themselves.",
    place: "Marseille · Remote worldwide",
  },
  fr: {
    role: "Développeur web freelance & automatisation IA",
    tagline: "Des sites qui convertissent. Des workflows qui tournent seuls.",
    place: "Marseille · Remote partout",
  },
};

/** Image de partage 1200×630 (Open Graph / X / LinkedIn), générée au build. */
export async function renderOgImage(lang: Lang) {
  const t = text[lang];
  const memoji = await readFile(join(process.cwd(), "public/luc-memoji-3.png"));
  const memojiSrc = `data:image/png;base64,${memoji.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#FAFAFA",
          color: "#1C1D20",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "72px 0 72px 80px",
            width: 760,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              fontSize: 28,
              color: "#71717A",
            }}
          >
            <div
              style={{
                width: 16,
                height: 16,
                borderRadius: 8,
                background: "#2563EB",
              }}
            />
            lucbaxmann.com
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                fontSize: 104,
                fontWeight: 700,
                lineHeight: 1,
                letterSpacing: -3,
              }}
            >
              Luc Baxmann
            </div>
            <div
              style={{
                marginTop: 28,
                fontSize: 42,
                lineHeight: 1.2,
                color: "#2563EB",
              }}
            >
              {t.role}
            </div>
            <div
              style={{
                marginTop: 24,
                fontSize: 28,
                lineHeight: 1.35,
                color: "#52525B",
              }}
            >
              {t.tagline}
            </div>
          </div>

          <div style={{ display: "flex", fontSize: 26, color: "#71717A" }}>
            {t.place}
          </div>
        </div>

        {/* eslint-disable-next-line @next/next/no-img-element -- ImageResponse (satori) ne supporte pas next/image */}
        <img
          src={memojiSrc}
          alt=""
          width={414}
          height={567}
          style={{ position: "absolute", right: 56, bottom: 0 }}
        />
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
