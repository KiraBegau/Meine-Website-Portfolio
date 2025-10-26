import { useState } from "react";
import SocialLinks from "../components/SocialLinks";
import Mail from "../assets/Mail.png";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/kira.begau@gmx.de",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center bg-gray-950 text-gray-100">
      <p className="text-lg mb-8 text-gray-300 max-w-md">
        Schreiben Sie mir gerne eine Nachricht
      </p>

      <form
        onSubmit={handleSubmit}
        className="w-98 h-120 bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-800 mx-auto"
      >
        <div className="mb-4 text-left">
          <label className="block text-sm font-medium mb-1 text-gray-400">
            Ihr Name
          </label>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:ring-2 hover:bg-gray-700/55 focus:ring-cyan-500 outline-none"
          />
        </div>

        <div className="mb-4 text-left">
          <label className="block text-sm font-medium mb-1 text-gray-400">
            Ihre E-Mail-Adresse
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:ring-2 hover:bg-gray-700/55 focus:ring-cyan-500 outline-none"
          />
        </div>

        <div className="mb-6 text-left">
          <label className="block text-sm font-medium mb-1 text-gray-400">
            Ihre Nachricht
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            required
            className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:ring-2 hover:bg-gray-700/55 focus:ring-cyan-500 outline-none resize-none"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-cyan-400 hover:bg-cyan-600 text-gray-900 font-semibold py-2 rounded-lg transition transform hover:-translate-y-0.5"
        >
          Abschicken
        </button>

        {status === "success" && (
          <p className="text-cyan-400 text-sm mt-3">
            ✔ Nachricht erfolgreich gesendet!
          </p>
        )}
        {status === "error" && (
          <p className="text-red-400 text-sm mt-2">
            ❌ Fehler beim Senden. Bitte versuche es später erneut.
          </p>
        )}
      </form>
      <div className="flex flex-col items-center mt-8 text-gray-300 space-y-2">
        <a
          href="mailto:kira.begau@gmx.de"
          className="flex items-center gap-2 text-lg md:text-xl text-cyan-400 hover:text-cyan-500/90 hover:underline transition font-medium"
        >
          <img src={Mail} alt="Mail Icon" className="w-6 h-6 opacity-90" />
          Oder senden Sie mir eine E-Mail
        </a>
        <span className="text-m text-gray-400">kira.begau@gmx.de</span>
      </div>
      <SocialLinks />
    </div>
  );
}
