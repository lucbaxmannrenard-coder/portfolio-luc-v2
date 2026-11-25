import type { Metadata } from "next";

import styles from "@/components/seo-article.module.css";
import { links } from "@/lib/i18n";
import { SITE_URL } from "@/lib/seo";

const TITLE = "Politique de confidentialité | Luc Baxmann";
const DESCRIPTION =
  "Quelles données le site lucbaxmann.com collecte, pourquoi, combien de temps, et comment exercer vos droits.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/confidentialite` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/confidentialite`,
    type: "website",
  },
};

export default function Confidentialite() {
  return (
    <article className={styles.article}>
      <h1>Politique de confidentialité</h1>
      <p>
        Cette page explique quelles données personnelles le site{" "}
        <strong>lucbaxmann.com</strong> collecte, pourquoi, et quels sont vos droits.
      </p>

      <h2>Responsable du traitement</h2>
      <p>
        Luc Baxmann-Renard, entrepreneur individuel (SIRET 104 832 910 00012). Contact :{" "}
        <a href={`mailto:${links.email}`}>{links.email}</a>. Les autres informations
        sur l&apos;éditeur figurent dans les <a href="/mentions-legales">mentions légales</a>.
      </p>

      <h2>Les données collectées</h2>
      <p>
        Le seul formulaire du site est le formulaire de contact. Quand vous l&apos;envoyez,
        je reçois :
      </p>
      <ul>
        <li>votre nom et votre adresse email ;</li>
        <li>le nom de votre entreprise, si vous le renseignez (facultatif) ;</li>
        <li>le type de projet choisi et votre message ;</li>
        <li>
          l&apos;identifiant technique de votre navigateur (user-agent, tronqué à 250
          caractères), qui sert à repérer les envois automatisés.
        </li>
      </ul>
      <p>
        Aucune autre donnée n&apos;est demandée. Rien n&apos;est collecté si vous
        n&apos;envoyez pas le formulaire.
      </p>

      <h2>Pourquoi ces données</h2>
      <p>
        Pour répondre à votre demande et vous faire une proposition. La base légale est
        l&apos;exécution de mesures précontractuelles prises à votre demande, ainsi que mon
        intérêt légitime à répondre aux messages que l&apos;on m&apos;adresse. Vos données ne
        servent à aucune décision automatisée et ne sont pas vendues.
      </p>

      <h2>Qui y a accès</h2>
      <ul>
        <li>Moi, Luc Baxmann-Renard.</li>
        <li>
          <strong>Supabase</strong>, qui stocke votre demande dans une base de données.
        </li>
        <li>
          <strong>Web3Forms</strong>, qui m&apos;envoie votre message par email.
        </li>
        <li>
          <strong>Vercel</strong>, qui héberge le site et en mesure l&apos;audience (voir ci-dessous).
        </li>
      </ul>
      <p>
        Certains de ces prestataires sont établis ou traitent des données hors de
        l&apos;Union européenne. Dans ce cas, le transfert repose sur les garanties prévues
        par le RGPD.
      </p>

      <h2>Combien de temps</h2>
      <p>
        Votre demande est conservée le temps de la traiter, puis au maximum trois ans après
        notre dernier échange. Vous pouvez demander sa suppression avant ce délai.
      </p>

      <h2>Cookies et mesure d&apos;audience</h2>
      <p>
        Ce site ne dépose aucun cookie et n&apos;utilise pas le stockage local de votre
        navigateur. La fréquentation est mesurée avec Vercel Web Analytics, qui compte les
        visites de façon agrégée, sans cookie et sans profil individuel. Aucun bandeau de
        consentement n&apos;est donc nécessaire.
      </p>

      <h2>Vos droits</h2>
      <p>
        Vous pouvez demander l&apos;accès à vos données, leur rectification, leur
        effacement, la limitation du traitement ou vous y opposer, ainsi que la
        portabilité de vos données. Écrivez-moi à{" "}
        <a href={`mailto:${links.email}`}>{links.email}</a> : je réponds sous un mois. Si
        vous estimez que vos droits ne sont pas respectés, vous pouvez saisir la CNIL
        (<a href="https://www.cnil.fr">cnil.fr</a>).
      </p>

      <p>Dernière mise à jour : 25 novembre 2026.</p>
    </article>
  );
}
