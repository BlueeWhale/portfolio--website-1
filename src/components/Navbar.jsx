import { useState, useEffect } from "react";
import { FaRocket, FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png";

function Navbar({ theme, toggleTheme }) {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    "home",
    "about",
    "Education",
    "skills",
    "projects",
    "resume",
    "contact",
  ];

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.6,
      }
    );

    sections.forEach((section) =>
      observer.observe(section)
    );

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="space-navbar">
      <div className="nav-brand">
        <img
          src={logo}
          alt="logo"
          className="nav-logo"
        />
        <h2>Rishabh Kumar</h2>
      </div>

      <div
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <ul
        className={
          menuOpen
            ? "nav-links active"
            : "nav-links"
        }
      >
        {links.map((link) => (
          <li key={link}>
            <a
              href={`#${link}`}
              className={
                active === link
                  ? "active-link"
                  : ""
              }
              onClick={() => {
                setActive(link);
                setMenuOpen(false);
              }}
            >
              {active === link && (
                <span className="rocket-indicator">
                  <FaRocket />
                </span>
              )}

              {link.charAt(0).toUpperCase() +
                link.slice(1)}
            </a>
          </li>
        ))}
      </ul>

      <button
  className="theme-btn"
  onClick={toggleTheme}
>
  {theme === "dark" ? "☀️" : "🌙"}
</button>
    </nav>
  );
}

export default Navbar;