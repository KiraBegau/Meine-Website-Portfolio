export default function Projects() {
  return (
    <div className="min-h-screen bg-gray-950 py-16 px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto">
        {/* 📘 Schulischer Werdegang */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-300 mb-4 border-b border-cyan-400 pb-2">
            As a Designer (Auswahl)
          </h2>
          <ul className="space-y-3 text-gray-300">
            <div className="bg-gray-900/60 p-5 rounded-2xl shadow-md border border-gray-800 mb-6  transition-all duration-300 hover:-translate-y-2 hover:bg-gray-700/40 hover:shadow-lg">
              <strong className="block text-cyan-400 text-lg mb-2">
                ITU Consult GmbH
              </strong>
              <p className="text-gray-300 leading-relaxed text-sm">
                Nutzeranalyse, Design- und Effizienzoptimierung sowie
                strategische Beratung einer Anwendung zum Bedatungsprozess von
                Fahrzeug-Steuergeräten für die Volkswagen AG.
              </p>
            </div>

            <div className="bg-gray-900/60 p-5 rounded-2xl shadow-md border border-gray-800 mb-6  transition-all duration-300 hover:-translate-y-2 hover:bg-gray-700/40 hover:shadow-lg">
              <strong className="block text-cyan-400 text-lg mb-2">
                ITU Consult GmbH
              </strong>
              <p className="text-gray-300 leading-relaxed text-sm">
                Nutzeranalyse, Design- und Effizienzoptimierung sowie
                strategische Beratung einer firmeninternen Anwendung zur
                Erfassung der Arbeitszeiten.
              </p>
            </div>

            <div className="bg-gray-900/60 p-5 rounded-2xl shadow-md border border-gray-800 mb-6  transition-all duration-300 hover:-translate-y-2 hover:bg-gray-700/40 hover:shadow-lg">
              <strong className="block text-cyan-400 text-lg mb-2">
                ITU Consult GmbH
              </strong>
              <p className="text-gray-300 leading-relaxed text-sm">
                Verantwortung für die Pflege und den Ausbau des internen
                Unternehmensnetzwerks, einschließlich der Erstellung von Content
                zur Förderung der internen Kommunikationen und Stärkung der
                Unternehmensmarke.
              </p>
            </div>

            <div className="bg-gray-900/60 p-5 rounded-2xl shadow-md border border-gray-800 mb-6  transition-all duration-300 hover:-translate-y-2 hover:bg-gray-700/40 over:shadow-lg">
              <strong className="block text-cyan-400 text-lg mb-2">
                Studienprojekt
              </strong>
              <p className="text-gray-300 leading-relaxed text-sm">
                Entwicklung eines Online-Medien-Projekts, das eine Homepage,
                mobile Website, App, Social-Media-Sites/Content,
                Marketingkampagne und-strategie, Styleguide und CD inkl. Logo
                umfasst. Dabei wurden Benchmark-Analysen, Zielgruppen-Analyse
                sowie das Alleinstellungsmerkmal berücksichtigt.
              </p>
            </div>
          </ul>
        </div>

        <div className="flex items-center justify-center">
          <div className="hidden md:block h-full w-px bg-cyan-400"></div>
        </div>

        {/* 🧠 Skills */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-300 mb-4 border-b border-cyan-400 pb-2">
            As a Developer (Auswahl)
          </h2>

          <div className="bg-gray-900/60 p-5 rounded-2xl shadow-md border border-gray-800 mb-6  transition-all duration-300 hover:-translate-y-2 hover:bg-gray-700/40 hover:shadow-lg">
            <strong className="block text-cyan-400 text-lg mb-2">
              Privates Projekt
            </strong>
            <p className="text-gray-300 leading-relaxed text-sm">
              Konzeption und Umsetzung einer responsiven Website Zur Vermittlung
              und Adoption von Tieren. Entwicklung interaktiver Features wie
              Such- und Filterfunktionen sowie Sortierung nach verschiedenen
              Kriterien. Umsetzung unter Nutzung von HTML, CSS/Tailwind,
              JavaScript/Type- Script und React/Vite. Implementierung
              nutzerfreundlicher Interaktionen, wie z. B. Hover-Effekte.
            </p>
            <p className="mt-2">
              <a
                href="https://findyourfurry.kira-begau.de/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:underline hover:text-cyan-500/80"
              >
                Zur Projektseite →
              </a>
            </p>
          </div>

          <div className="bg-gray-900/60 p-5 rounded-2xl shadow-md border border-gray-800 mb-6  transition-all duration-300 hover:-translate-y-2 hover:bg-gray-700/40 hover:shadow-lg">
            <strong className="block text-cyan-400 text-lg mb-2">
              Weiterbildungsprojekt
            </strong>
            <p className="text-gray-300 leading-relaxed text-sm">
              Entwicklung einer webbasierten Event-Management-Anwendung („Event
              Scheduler“) mit React, TypeScript und Vite. Umsetzung einer
              Event-List-Ansicht, Detailseiten für einzelne Events sowie
              Benutzerregistrierung und Login mit API-Token-Authentifizierung.
              Einsatz von React Router für Navigation, React-Hooks für State-
              und Effect-Management, TailwindCSS für responsives Styling und
              lokale Speicherung von Tokens. Umsetzung geschützter Routen für
              authentifizierte Aktionen und Handling von API-Fehlern
              (Gruppenprojekt).
            </p>
            <p className="mt-2">
              <a
                href="https://events-scheduler.onrender.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:underline hover:text-cyan-500/80"
              >
                Zur Projektseite →
              </a>
            </p>
          </div>

          <div className="bg-gray-900/60 p-5 rounded-2xl shadow-md border border-gray-800 mb-6  transition-all duration-300 hover:-translate-y-2 hover:bg-gray-700/40 hover:shadow-lg">
            <strong className="block text-cyan-400 text-lg mb-2">
              Weiterbildungsprojekt
            </strong>
            <p className="text-gray-300 leading-relaxed text-sm">
              Konzeption und Umsetzung eines browserbasierten Spiels im Rahmen
              eines zweitägigen Hackathons, entwickelt in HTML, CSS und
              JavaScript (Gruppenprojekt).
            </p>
            <p className="mt-2">
              <a
                href="https://alex-bash-86.github.io/crossover-project/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:underline hover:text-cyan-500/80"
              >
                Zur Projektseite →
              </a>
            </p>
          </div>

          <div className="bg-gray-900/60 p-5 rounded-2xl shadow-md border border-gray-800 mb-6  transition-all duration-300 hover:-translate-y-2 hover:bg-gray-700/40 hover:shadow-lg">
            <strong className="block text-cyan-400 text-lg mb-2">
              Weiterbildungsprojekt
            </strong>
            <p className="text-gray-300 leading-relaxed text-sm">
              Entwicklung einer webbasierten Film-Tagebuch-Anwendung („Movie
              Diary“) unter Verwendung der TMDB API. Umsetzung einer Startseite
              mit Filmlisten und Suchfunktion sowie einer Journal-Seite mit
              gespeicherten Favoriten und persönlichen Notizen. Nutzung der
              Fetch-, DOM- und Web-Storage-APIs sowie TailwindCSS für
              responsives UI-Design und klare Strukturierung (Gruppenprojekt).
            </p>
            <p className="mt-2">
              <a
                href="https://keboris.github.io/movieapi/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:underline hover:text-cyan-500/80"
              >
                Zur Projektseite →
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
