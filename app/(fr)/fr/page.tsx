import { Home } from "@/components/home";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata("fr");

export default function Page() {
  return <Home lang="fr" />;
}
