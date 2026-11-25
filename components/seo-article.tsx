import type { SeoPage } from "@/lib/seo-playbook";

import styles from "./seo-article.module.css";

/**
 * Le texte d'une page du playbook, rendu côté serveur : tout est dans le HTML que lisent
 * Google et les crawlers IA. Pas d'accordéon, pas d'onglets, pas d'animation d'entrée qui
 * masquerait le texte avant l'exécution du JavaScript.
 */
export function SeoArticle({ page }: { page: SeoPage }) {
  return (
    <article
      className={styles.article}
      dangerouslySetInnerHTML={{ __html: page.html }}
    />
  );
}
