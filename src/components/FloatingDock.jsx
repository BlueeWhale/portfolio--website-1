import {
  FaWhatsapp,
  FaEnvelope,
 
} from "react-icons/fa";

function FloatingDock() {
  return (
    <div className="floating-dock">

      <a
        href="mailto:rishabgoyal345@gmail.com"
        className="dock-btn email-btn"
      >
        <FaEnvelope />
      </a>

      <a
        href="/rishi_resume.pdf"
        download
        className="dock-btn resume-btn"
      >
       📄
      </a>

      <a
        href="https://wa.me/919625702007"
        target="_blank"
        rel="noreferrer"
        className="dock-btn whatsapp-btn"
      >
        <FaWhatsapp />
      </a>

    </div>
  );
}

export default FloatingDock;