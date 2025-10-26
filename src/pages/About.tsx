import CV from "../assets/CV.pdf";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-950 py-16 px-8 flex flex-col items-center">
      {/* Grid mit 3 Spalten */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl w-full mx-auto">
        {/* 📘 Schulischer Werdegang */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-300 mb-4 border-b border-cyan-400 pb-2">
            Schulischer Werdegang
          </h2>
          <ul className="space-y-3 text-gray-300">
            <li>
              <strong className="text-cyan-400">2018 – 2022</strong> <br />
              Ostfalia Hochschule für angewandte Wissenschaften <br />
              <span className="text-sm italic">B.A. Mediendesign</span>
            </li>
            <li>
              <strong className="text-cyan-400">2015 – 2018</strong> <br />
              Neue Schule Wolfsburg <br />
              <span className="text-sm italic">Abitur</span>
            </li>
            <li>
              <strong className="text-cyan-400">2008 – 2015</strong> <br />
              Leonardo da Vinci IGS <br />
              <span className="text-sm italic">
                Erweiterter Realschulabschluss
              </span>
            </li>
            <li>
              <strong className="text-cyan-400">2005 – 2008</strong> <br />
              Hellwinkelschule Wolfsburg
            </li>
          </ul>
        </div>

        {/* 💼 Praxiserfahrung */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-300 mb-4 border-b border-cyan-400 pb-2">
            Praxiserfahrung & Werdegang
          </h2>
          <ul className="space-y-3 text-gray-300">
            <li>
              <strong className="text-cyan-400">Seit 2025</strong> <br />
              Weiterbildung “Full-Stack Web- & App-Entwicklung”
            </li>
            <li>
              <strong className="text-cyan-400">2022 – 2024</strong> <br />
              UI/UX Designerin bei ITU Consult GmbH
            </li>
            <li>
              <strong className="text-cyan-400">April – Aug 2022</strong> <br />
              Mediendesignerin bei Screen GmbH
            </li>
            <li>
              <strong className="text-cyan-400">März – Mai 2021</strong> <br />
              Praktikum bei Grunddesign
            </li>
          </ul>
        </div>

        {/* 🧠 Skills */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-300 mb-4 border-b border-cyan-400 pb-2">
            Skills
          </h2>

          <h3 className="text-lg font-semibold mt-4 text-cyan-400">
            Hard Skills
          </h3>
          <ul className="list-disc list-inside text-gray-300 text-m space-y-1">
            <li>UI/UX Design & Prototyping (Figma, Adobe XD)</li>
            <li>HTML, CSS, Tailwind, JavaScript</li>
            <li>React, Node.js, Git, GitHub</li>
            <li>Usability Testing, Design Thinking</li>
          </ul>

          <h3 className="text-lg font-semibold mt-6 text-cyan-400">
            Soft Skills
          </h3>
          <ul className="list-disc list-inside text-gray-300 text-m space-y-1">
            <li>Kreativität & konzeptionelles Denken</li>
            <li>Teamfähigkeit & Kommunikation</li>
            <li>Analytisches Denken</li>
            <li>Empathie & Nutzerorientierung</li>
          </ul>
        </div>
      </div>

      {/* 🎯 Button jetzt außerhalb des Grids – mittig */}
      <div className="mt-12 flex justify-center w-full">
        <a
          href={CV}
          download
          className="bg-cyan-400 hover:bg-cyan-600 text-gray-900 font-semibold px-6 py-3 rounded-lg transition text-center"
        >
          Lebenslauf herunterladen
        </a>
      </div>
    </div>
  );
}
