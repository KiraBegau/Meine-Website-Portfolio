import meinBild from "../assets/Bewerbungsfoto_neu.jpg";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center md:justify-between px-6 md:px-12 text-center md:text-left space-y-8 md:space-y-0">
      {/* Textbereich */}
      <div className="max-w-lg">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
          UI/UX Designerin & Frontend Developer
        </h1>
      </div>

      {/* Bildbereich mit Overlay */}
      <div className="relative w-64 sm:w-80 md:w-[420px] group overflow-hidden rounded-2xl shadow-lg">
        <img
          src={meinBild}
          alt="UI/UX & Coding Illustration"
          className="w-full h-auto rounded-2xl transition-transform duration-500 group-hover:scale-105"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gray-950/85 rounded-2xl flex items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <p className="text-gray-200 text-base sm:text-lg italic px-6">
            „The only way to do great work is to love what you do.“ <br />
            <span className="text-cyan-400 text-sm mt-2 block">
              – Steve Jobs
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
