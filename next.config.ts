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
};

export default nextConfig;
