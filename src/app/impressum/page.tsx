import React from "react"

export default function ImpressumPage() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-24 lg:py-32">
      <div className="flex flex-col items-start gap-4">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Impressum
        </h1>
        <div className="prose prose-gray max-w-4xl dark:prose-invert">
          <section className="mb-8">
            <h2>Angaben gemäß § 5 TMG</h2>
            <p>
              Detlef & Julian Zeiler<br />
              Musterstraße 123<br />
              69120 Heidelberg
            </p>
          </section>

          <section className="mb-8">
            <h2>Kontakt</h2>
            <p>
              Telefon: +49 1234 567890<br />
              E-Mail: info@zeiler.me
            </p>
          </section>

          <section className="mb-8">
            <h2>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
            <p>
              Detlef Zeiler<br />
              Julian Zeiler<br />
              Musterstraße 123<br />
              69120 Heidelberg
            </p>
          </section>

          <section className="mb-8">
            <h2>Haftung für Inhalte</h2>
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den
              allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
              verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu
              forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            </p>
            <p>
              Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen
              Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der
              Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden
              Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
            </p>
          </section>

          <section className="mb-8">
            <h2>Haftung für Links</h2>
            <p>
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.
              Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
              verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten
              Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte
              waren zum Zeitpunkt der Verlinkung nicht erkennbar.
            </p>
            <p>
              Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer
              Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links
              umgehend entfernen.
            </p>
          </section>

          <section className="mb-8">
            <h2>Urheberrecht</h2>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
              Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
              Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
            </p>
            <p>
              Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter
              beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine
              Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei
              Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
            </p>
          </section>

          <section>
            <p className="text-muted-foreground text-sm">
              <em>Quelle: <a href="https://www.e-recht24.de" className="underline">e-recht24.de</a></em>
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
