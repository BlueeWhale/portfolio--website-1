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