import type { Metadata } from "next";

import styles from "@/components/seo-article.module.css";
import { links } from "@/lib/i18n";
import { SITE_URL } from "@/lib/seo";

const TITLE = "Mentions légales | Luc Baxmann";
const DESCRIPTION =
  "Mentions légales du site lucbaxmann.com : éditeur, SIRET, hébergeur et propriété intellectuelle.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/mentions-legales` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/mentions-legales`,
    type: "website",
  },
};

export default function MentionsLegales() {
  return (
    <article className={styles.article}>
      <h1>Mentions légales</h1>
      <p>
        Le site <strong>lucbaxmann.com</strong> est édité à titre professionnel par un
        entrepreneur individuel.
      </p>

      <h2>Éditeur du site</h2>
      <ul>
        <li>Nom : Luc Baxmann-Renard, connu professionnellement sous le nom « Luc Baxmann ».</li>
        <li>Statut : entrepreneur individuel, auto-entrepreneur (micro-entreprise).</li>
        <li>SIRET : 104 832 910 00012.</li>
        <li>
          Adresse : non publiée, les informations de l&apos;entreprise étant non
          diffusibles au registre. Elle est communiquée sur demande écrite à l&apos;adresse
          de contact ci-dessous.
        </li>
        <li>
          Contact : <a href={`mailto:${links.email}`}>{links.email}</a>, ou via le
          formulaire de la section <a href="/fr#contact">contact</a>.
        </li>
        <li>Directeur de la publication : Luc Baxmann-Renard.</li>
      </ul>

      <h2>Hébergeur</h2>
      <p>
        Vercel Inc., 440 N Barranca Avenue #4133, Covina, CA 91723, États-Unis.
        Site : <a href="https://vercel.com">vercel.com</a>.
      </p>

      <h2>Propriété intellectuelle</h2>
      <p>
        Les textes, le code, la mise en page et les illustrations de ce site sont la
        propriété de Luc Baxmann-Renard, sauf mention contraire. Toute reproduction sans
        accord écrit préalable est interdite. Les noms, marques et sites cités dans la
        section réalisations (Cemax Store, Canaria+, Provence E.P.I et autres) appartiennent
        à leurs propriétaires respectifs.
      </p>

      <h2>Liens externes</h2>
      <p>
        Ce site contient des liens vers des sites tiers. Leur contenu n&apos;engage pas
        l&apos;éditeur, qui n&apos;a aucun contrôle sur eux.
      </p>

      <h2>Données personnelles</h2>
      <p>
        Le traitement des données saisies dans le formulaire de contact est décrit dans la{" "}
        <a href="/confidentialite">politique de confidentialité</a>.
      </p>

      <h2>Droit applicable</h2>
      <p>Ce site est soumis au droit français.</p>

      <p>Dernière mise à jour : 25 novembre 2026.</p>
    </article>
  );
}
