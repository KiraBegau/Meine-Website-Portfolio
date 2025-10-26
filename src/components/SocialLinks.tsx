// src/components/SocialLinks.tsx
import Logo from "../assets/XingNew.png"; // dein Bild
import LinkedIn from "../assets/icons8-linkedin-50.png";
import Github from "../assets/GitH.png";
export default function SocialLinks() {
  return (
    <div className="flex gap-4 justify-center mt-10 space-x-8">
      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/kira-begau-74ab2b354/"
        target="_blank"
        rel="noopener noreferrer"
        className="w-8 h-8 hover:scale-110 transition-transform"
      >
        <img
          src={LinkedIn}
          alt="LinkedIn Profil"
          className="w-8 h-8 hover:scale-110 transition-transform hover:brightness-70"
        />
        <path d="M99.5 512c-11.3 0-21.6-5.8-27.5-15.5-5.9-9.6-5.5-22.2 1-31l196-295.7L72.9 0H0v512h99.5zM512 0h-99.5l-196 295.7 196 295.7H512V0z" />
      </a>

      {/* Xing */}
      <a
        href="https://www.xing.com/profile/Kira_Begau/web_profiles?nwt_nav=profile&sc_o=navigation_profile&sc_o_PropActionOrigin=navigation_neffi_100&expandNeffi=true"
        target="_blank"
        rel="noopener noreferrer"
        className="w-8 h-8 hover:scale-110 transition-transform hover:brightness-70"
      >
        <img
          src={Logo}
          alt="Xing Profil"
          className="w-7.5 h-7.5 hover:scale-110 transition-transform fill-cyan-400"
        />
        <path d="M99.5 512c-11.3 0-21.6-5.8-27.5-15.5-5.9-9.6-5.5-22.2 1-31l196-295.7L72.9 0H0v512h99.5zM512 0h-99.5l-196 295.7 196 295.7H512V0z" />
      </a>

      <a
        href="https://github.com/KiraBegau"
        target="_blank"
        rel="noopener noreferrer"
        className="w-8 h-8 hover:scale-110 transition-transform"
      >
        <img
          src={Github}
          alt="GitHub Profil"
          className="w-8 h-8 hover:scale-110 transition-transform hover:brightness-70"
        />
        <path d="M99.5 512c-11.3 0-21.6-5.8-27.5-15.5-5.9-9.6-5.5-22.2 1-31l196-295.7L72.9 0H0v512h99.5zM512 0h-99.5l-196 295.7 196 295.7H512V0z" />
      </a>
    </div>
  );
}
