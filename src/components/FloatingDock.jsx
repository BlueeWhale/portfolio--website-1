import {
  FaWhatsapp,
  FaEnvelope,
  FaFileDownload,
} from "react-icons/fa";

function FloatingDock() {
  return (
    <div className="floating-dock">

      <a
        href="mailto:rishabgoyal345@gmail.com"
        className="dock-btn dock-email"
      >
        <FaEnvelope />
      </a>

      <a
        href="/rishi_resume.pdf"
        download
        className="dock-btn dock-resume"
      >
        <FaFileDownload />
      </a>

      <a
        href="https://wa.me/919625702007"
        target="_blank"
        rel="noreferrer"
        className="dock-btn dock-whatsapp"
      >
        <FaWhatsapp />
      </a>

    </div>
  );
}

export default FloatingDock;