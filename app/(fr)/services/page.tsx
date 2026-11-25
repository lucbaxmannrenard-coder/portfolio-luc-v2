import type { Metadata } from "next";
import Link from "next/link";

import styles from "@/components/seo-article.module.css";
import { fiche, hubPath, seoPages, siteUrl } from "@/lib/seo-playbook";

// Le hub : liste toutes les pages de service, lié depuis le pied de page de chaque page.
// Chaque page est ainsi à deux clics de l'accueil.
const GROUPS: Array<[string, string]> = [
  ["service", "Mes prestations"],
  ["service_ville", "Près de chez vous"],
  ["public", "Selon votre situation"],
  ["comparaison", "Pour bien choisir"],
];

const TITLE = "Services de développeur web freelance à Marseille | Luc Baxmann";
const DESCRIPTION =
  "Création de site internet, e-commerce, landing page et automatisation IA sur mesure : toutes les prestations de Luc Baxmann, chacune sur sa page.";

export function generateMetadata(): Metadata {
  return {
    title: { absolute: TITLE },
    description: DESCRIPTION,
    alternates: { canonical: siteUrl() + hubPath() },
    openGraph: {
      title: TITLE,
      description: DESCRIPTION,
      url: siteUrl() + hubPath(),
      type: "website",
    },
  };
}

export default function ServicesHub() {
  const hub = hubPath();
  const pages = seoPages().filter((p) => p.slug.startsWith(hub + "/"));
  const action = fiche().action as { url?: string; libelle?: string } | undefined;

  return (
    <section className={styles.hub}>
      <h1>Services de développeur web freelance à Marseille</h1>
      <p>
        Je suis développeur web freelance à Marseille. Chaque prestation a sa propre
        page : ce que je fais, comment ça se passe, et ce que j&apos;ai déjà livré.
      </p>
      {action?.url && (
        <p>
          <a className="seo-cta" href={action.url}>
            {action.libelle ?? "Me contacter"}
          </a>
        </p>
      )}
      {GROUPS.map(([type, title]) => {
        const group = pages.filter((p) => p.type === type);
        if (!group.length) return null;
        return (
          <div key={type}>
            <h2>{title}</h2>
            <ul>
              {group.map((p) => (
                <li key={p.slug}>
                  <Link href={p.slug}>{p.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </section>
  );
}
