import headerImage from "../assets/Pic2.jpg"; // dein Bild
import { NavLink, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const getTitle = () => {
    switch (location.pathname) {
      case "/":
        return "Kira Begau";
      case "/about":
        return "About Me";
      case "/projects":
        return "My Projects";
      case "/contact":
        return "Contact";
      default:
        return "Kira Begau";
    }
  };
  return (
    <nav
      className="sticky top-0 bg-black text-cyan w-full py-2 shadow-md z-50"
      style={{ backgroundImage: `url(${headerImage})` }}
    >
      <div className="flex justify-center items-center">
        <h1 className="text-3xl font-bold tracking-wide text-white">
          {getTitle()}
        </h1>
      </div>
      <div className="flex justify-center gap-8 mt-3 text-lg">
        <NavLink
          to="/"
          className="relative text-gray-200 hover:text-cyan-300 after:block after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-cyan-300 after:via-cyan-300 after:to-cyan-300 hover:after:w-full after:transition-all after:duration-300"
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className="relative text-gray-200 hover:text-cyan-300 after:block after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-cyan-300 after:via-cyan-300 after:to-cyan-300 hover:after:w-full after:transition-all after:duration-300"
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          className="relative text-gray-200 hover:text-cyan-300 after:block after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-cyan-300 after:via-cyan-300 after:to-cyan-300 hover:after:w-full after:transition-all after:duration-300"
        >
          Projects
        </NavLink>
        <NavLink
          to="/contact"
          className="relative text-gray-200 hover:text-cyan-300 after:block after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-cyan-300 after:via-cyan-300 after:to-cyan-300 hover:after:w-full after:transition-all after:duration-300"
        >
          Contact
        </NavLink>
      </div>
    </nav>
  );
}
