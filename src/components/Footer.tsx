export default function Footer() {
  return (
    <footer className="sticky bottom-0 bg-teal-950 bg-opacity-30 backdrop-blur-md py-2 text-center text-sm text-gray-300">
      © {new Date().getFullYear()} My Portfolio. All rights reserved.{" "}
      <a>Alle Icons von </a>
      <a
        className="hover:text-gray-400 hover:underline"
        target="_blank"
        href="https://icons8.com"
      >
        Icons8
      </a>
    </footer>
  );
}
//<a target="_blank" href="https://icons8.com/icon/8808/linkedin"></a>//
