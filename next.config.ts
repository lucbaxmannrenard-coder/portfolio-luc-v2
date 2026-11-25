import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /**
   * Zone secondaire : /noe est servi par le projet Vercel `noe-note`
   * (note de candidature Noé, code dans ~/Documents/developper/claude/Noé/site).
   * Cette app est déployée avec basePath "/noe", donc la page et ses assets
   * `_next` vivent tous sous ce préfixe — une seule paire de règles suffit.
   */
  async rewrites() {
    return [
      { source: "/noe", destination: "https://noe-note.vercel.app/noe" },
      {
        source: "/noe/:path*",
        destination: "https://noe-note.vercel.app/noe/:path*",
      },
    ];
  },

  /**
   * /noe est une page de candidature privée : elle ne doit pas être indexée. L'en-tête
   * s'applique à la réponse servie sous lucbaxmann.com (le robots.txt ne la bloque pas
   * exprès : Google doit pouvoir lire le noindex).
   */
  async headers() {
    const noindex = [{ key: "X-Robots-Tag", value: "noindex, nofollow" }];
    return [
      { source: "/noe", headers: noindex },
      { source: "/noe/:path*", headers: noindex },
    ];
  },
};

export default nextConfig;
