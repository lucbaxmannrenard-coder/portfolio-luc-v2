"use client";

import * as React from "react";
import { CheckCircle2 } from "lucide-react";
import { Magnetic } from "@/components/magnetic";
import { SocialLinks } from "@/components/social-icons";
import { Reveal } from "@/components/reveal";
import { useLanguage } from "@/components/language-provider";
import { links } from "@/lib/i18n";

const SUPABASE_URL = "https://jahiessgxbsgrrtkleqd.supabase.co";
// Clé publishable : exposable côté client, la table est en RLS insert-only.
const SUPABASE_KEY = "sb_publishable_wzzRDsYs4df_vVdZcF7YcA_1BEIa8BY";
const NOTIFY_EMAIL = links.email;

type Status = "idle" | "sending" | "success" | "error";

const fieldClass =
  "w-full border-b border-ink-foreground/20 bg-transparent py-3 text-base outline-none transition-colors placeholder:text-ink-muted/60 focus:border-ink-foreground";

export function Contact() {
  const { t, lang } = useLanguage();
  const [status, setStatus] = React.useState<Status>("idle");
  const [time, setTime] = React.useState("");

  React.useEffect(() => {
    function tick() {
      setTime(
        new Date().toLocaleTimeString(lang === "fr" ? "fr-FR" : "en-GB", {
          hour: "2-digit",
          minute: "2-digit",
          timeZone: "Europe/Paris",
        })
      );
    }
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, [lang]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.reportValidity()) return;

    const data = Object.fromEntries(new FormData(form).entries()) as Record<
      string,
      string
    >;
    if (data.website) {
      setStatus("success"); // honeypot: fake success for bots
      return;
    }
    delete data.website;

    setStatus("sending");

    const record = { ...data, user_agent: navigator.userAgent.slice(0, 250) };
    const save = fetch(`${SUPABASE_URL}/rest/v1/contact_requests`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: SUPABASE_KEY,
        Authorization: `Bearer ${SUPABASE_KEY}`,
        Prefer: "return=minimal",
      },
      body: JSON.stringify(record),
    }).then((r) => {
      if (!r.ok) throw new Error(`supabase ${r.status}`);
    });

    const notify = fetch(`https://formsubmit.co/ajax/${NOTIFY_EMAIL}`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        _subject: `Portfolio — new contact request from ${data.name}`,
        Name: data.name,
        Email: data.email,
        Company: data.company || "—",
        "Project type": data.project_type,
        Message: data.message,
      }),
    }).then((r) => {
      if (!r.ok) throw new Error(`formsubmit ${r.status}`);
    });

    const results = await Promise.allSettled([save, notify]);
    if (results.some((r) => r.status === "fulfilled")) {
      form.reset();
      setStatus("success");
    } else {
      setStatus("error");
    }
  }

  return (
    <section
      id="contact"
      className="scroll-mt-20 bg-ink text-ink-foreground"
    >
      <div className="mx-auto max-w-7xl px-6 pb-10 pt-24 sm:px-10 sm:pt-32">
        <Reveal>
          <h2 className="text-5xl font-medium leading-[1.05] tracking-tight sm:text-7xl">
            {t.contact.heading[0]}
            <br />
            {t.contact.heading[1]}
            <span className="text-primary">.</span>
          </h2>
          <p className="mt-6 max-w-xl text-ink-muted">{t.contact.subtitle}</p>
        </Reveal>

        <Reveal className="mt-16 grid gap-16 lg:grid-cols-[1.4fr_1fr]">
          <div>
            {status === "success" ? (
              <div className="flex items-start gap-3 py-6" role="status">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden />
                <p>{t.contact.success}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="grid gap-8">
                <div className="grid gap-8 sm:grid-cols-2">
                  <label className="block">
                    <span className="text-xs uppercase tracking-[0.12em] text-ink-muted">
                      {t.contact.name} *
                    </span>
                    <input name="name" required autoComplete="name" className={fieldClass} />
                  </label>
                  <label className="block">
                    <span className="text-xs uppercase tracking-[0.12em] text-ink-muted">
                      {t.contact.email} *
                    </span>
                    <input
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      className={fieldClass}
                    />
                  </label>
                </div>
                <div className="grid gap-8 sm:grid-cols-2">
                  <label className="block">
                    <span className="text-xs uppercase tracking-[0.12em] text-ink-muted">
                      {t.contact.company} ({t.contact.companyOptional})
                    </span>
                    <input name="company" autoComplete="organization" className={fieldClass} />
                  </label>
                  <label className="block">
                    <span className="text-xs uppercase tracking-[0.12em] text-ink-muted">
                      {t.contact.projectType} *
                    </span>
                    <select
                      name="project_type"
                      required
                      defaultValue={t.contact.projectTypes[0]}
                      className={`${fieldClass} appearance-none [&>option]:text-foreground`}
                    >
                      {t.contact.projectTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>
                <label className="block">
                  <span className="text-xs uppercase tracking-[0.12em] text-ink-muted">
                    {t.contact.message} *
                  </span>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder={t.contact.messagePlaceholder}
                    className={`${fieldClass} resize-none`}
                  />
                </label>
                {/* Honeypot anti-spam : caché aux humains, rempli par les bots */}
                <input
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className="absolute -left-[9999px]"
                />
                {status === "error" && (
                  <p className="text-sm text-red-400" role="alert">
                    {t.contact.error}
                    <a href={`mailto:${NOTIFY_EMAIL}`} className="underline">
                      {NOTIFY_EMAIL}
                    </a>
                    .
                  </p>
                )}
                <Magnetic className="w-fit">
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="flex size-32 items-center justify-center rounded-full bg-primary text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/85 disabled:opacity-60 sm:size-36"
                  >
                    {status === "sending" ? t.contact.sending : t.contact.submit}
                  </button>
                </Magnetic>
              </form>
            )}
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="mb-2 text-xs uppercase tracking-[0.12em] text-ink-muted">
              {t.contact.directLabel}
            </h3>
            <a
              href={`mailto:${NOTIFY_EMAIL}`}
              className="w-fit rounded-full border border-ink-foreground/20 px-5 py-3 text-sm transition-colors hover:border-ink-foreground"
            >
              {NOTIFY_EMAIL}
            </a>
            <SocialLinks onDark className="mt-2" />
          </div>
        </Reveal>

        {/* Barre footer */}
        <div className="mt-24 flex flex-col justify-between gap-3 border-t border-ink-foreground/15 pt-6 text-xs text-ink-muted sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} Luc Baxmann — {t.footer.tagline}
          </p>
          <p>
            {t.contact.localTime} : {time} (Marseille)
          </p>
        </div>
      </div>
    </section>
  );
}
