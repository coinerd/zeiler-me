import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { FileText, Phone, Shield, ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Impressum | zeiler.me',
  description: 'Angaben gemäß § 5 TMG – Impressum von zeiler.me',
  openGraph: {
    title: 'Impressum | zeiler.me',
    description: 'Angaben gemäß § 5 TMG – Impressum von zeiler.me',
    url: 'https://zeiler.me/impressum',
    siteName: 'zeiler.me',
    type: 'website',
  },
};

const sections = [
  {
    icon: FileText,
    title: 'Angaben gemäß § 5 TMG',
    content: (
      <p>
        Detlef & Julian Zeiler
        <br />
        Musterstraße 123
        <br />
        69120 Heidelberg
      </p>
    ),
  },
  {
    icon: Phone,
    title: 'Kontakt',
    content: (
      <p>
        Telefon: +49 1234 567890
        <br />
        E-Mail: info@zeiler.me
      </p>
    ),
  },
  {
    icon: Shield,
    title: 'Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV',
    content: (
      <p>
        Detlef Zeiler
        <br />
        Julian Zeiler
        <br />
        Musterstraße 123
        <br />
        69120 Heidelberg
      </p>
    ),
  },
];

export default function ImpressumPage() {
  return (
    <div className="animate-fade-in">
      {/* Atmospheric Hero */}
      <section className="relative flex min-h-[40vh] items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/detlef/projekte/heiligenberg/geschichte/image-10.jpg"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/20" />
        </div>
        <div className="container relative z-10 px-4 py-16 md:px-6 md:py-20">
          <div className="max-w-2xl">
            <div className="mb-4 flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-white backdrop-blur-sm">
                <FileText className="h-7 w-7" />
              </div>
              <div>
                <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
                  Impressum
                </h1>
                <p className="mt-1 text-white/60">Angaben gemäß § 5 TMG</p>
              </div>
            </div>
            <div className="mt-6 h-1 w-40 rounded bg-gradient-to-r from-white/60 to-white/10"></div>
          </div>
        </div>
      </section>

      {/* Content with visual sections */}
      <div className="container px-4 py-12 md:px-6 md:py-20">
        <div className="mx-auto max-w-4xl">
          {/* Contact Cards */}
          <div className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-3">
            {sections.map(({ icon: Icon, title, content }) => (
              <div
                key={title}
                className="group relative rounded-xl border border-border/50 bg-card/50 p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-lg"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                    {title}
                  </h2>
                </div>
                <div className="text-sm leading-relaxed">{content}</div>
              </div>
            ))}
          </div>

          {/* Legal sections */}
          <div className="space-y-10">
            <LegalSection title="Haftung für Inhalte">
              <p>
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen
                Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir
                als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
                Informationen zu überwachen oder nach Umständen zu forschen, die auf eine
                rechtswidrige Tätigkeit hinweisen.
              </p>
              <p>
                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den
                allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist
                jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich.
                Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte
                umgehend entfernen.
              </p>
            </LegalSection>

            <LegalSection title="Haftung für Links">
              <p>
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir
                keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine
                Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige
                Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum
                Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige
                Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
              </p>
              <p>
                Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete
                Anhaltspunkte einer Rechtsverletzung nicht zumätbar. Bei Bekanntwerden von
                Rechtsverletzungen werden wir derartige Links umgehend entfernen.
              </p>
            </LegalSection>

            <LegalSection title="Urheberrecht">
              <p>
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten
                unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung,
                Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes
                bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen
                Gebrauch gestattet.
              </p>
              <p>
                Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die
                Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche
                gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam
                werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von
                Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
              </p>
            </LegalSection>
          </div>

          {/* Source footer */}
          <div className="mt-12 border-t border-border/50 pt-8">
            <p className="flex items-center gap-2 text-sm text-muted-foreground">
              <ExternalLink className="h-3.5 w-3.5" />
              <em>
                Quelle:{' '}
                <a
                  href="https://www.e-recht24.de"
                  className="underline transition-colors hover:text-primary"
                >
                  e-recht24.de
                </a>
              </em>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function LegalSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="relative pl-8 before:absolute before:bottom-0 before:left-0 before:top-0 before:w-1 before:rounded-full before:bg-gradient-to-b before:from-primary/60 before:to-primary/10">
      <h2 className="mb-4 text-xl font-bold">{title}</h2>
      <div className="prose prose-gray max-w-none space-y-3 text-sm leading-relaxed dark:prose-invert">
        {children}
      </div>
    </div>
  );
}
