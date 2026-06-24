import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTelegram,
  FaHeart
} from "react-icons/fa";

import logo from "../assets/logo.png";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-top">

        <div className="footer-brand">
          <img
            src={logo}
            alt="logo"
            className="footer-logo"
          />

          <h2>Rishabh Kumar</h2>

          <p>
            Full Stack Developer • React •
            Three.js • Python • AI
          </p>
        </div>

        <div className="footer-socials">

          <a
            href="https://github.com/BlueeWhale"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/rishabh-kumar-96979a37b/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://www.instagram.com/rishi_goyal0411?igsh=MTZta3M4ZGNrYTdqcg=="
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram />
          </a>

          <a
            href="https://t.me/YOUR_USERNAME"
            target="_blank"
            rel="noreferrer"
          >
            <FaTelegram />
          </a>

        </div>

      </div>

      <div className="footer-bottom">

        <p>
          © {new Date().getFullYear()} BlueWhale.
          All Rights Reserved.
        </p>

        <p>
          Made with <FaHeart className="heart" />
          using React & Three.js 🚀
        </p>

      </div>

    </footer>
  );
}

export default Footer;