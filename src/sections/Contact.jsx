import { useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  FaWhatsapp,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTelegram,
} from "react-icons/fa";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_g8ym6to",
        "template_9170arq",
        form.current,
        "LoDrA5A2uYk2kdGCE"
      )
      .then(() => {
        alert("Email Sent Successfully 🚀");
      })
      .catch(() => {
        alert("Failed to Send Email ❌");
      });
  };

  const sendWhatsapp = () => {
    const name =
      form.current.name.value;

    const email =
      form.current.email.value;

    const message =
      form.current.message.value;

    const text = `
Hello Rishab,

Name: ${name}
Email: ${email}

Message:
${message}
`;

    const phone = "919625702007";

    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(
        text
      )}`,
      "_blank"
    );
  };

  return (
    <section className="contact-section">

    <div className="contact-glow"></div>

    <div className="contact-container">

        <div className="contact-info">

            <h5>MISSION CONTROL</h5>

            <h1>Let's Build Something Amazing.</h1>

            <p>
                Have a project idea, internship opportunity, freelance work,
                or just want to say hello? Feel free to reach out.
                I'm always excited to collaborate on innovative ideas.
            </p>

            <div className="contact-details">

                <div>
                    <span>📧</span>
                    <p>rishabgoyal345@gmail.com</p>
                </div>

                <div>
                    <span>📱</span>
                    <p>+91 96257 02007</p>
                </div>

                {/* Social Links */}

<div className="footer-socials">

    <a
        href="https://github.com/BlueeWhale"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
    >
        <FaGithub />
    </a>

    <a
        href="https://www.linkedin.com/in/rishabh-kumar-96979a37b/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
    >
        <FaLinkedin />
    </a>

    <a
        href="https://www.instagram.com/rishi_goyal0411?igsh=MTZta3M4ZGNrYTdqcg=="
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
    >
        <FaInstagram />
    </a>

    <a
        href="https://t.me/YOUR_USERNAME"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Telegram"
    >
        <FaTelegram />
    </a>

</div>

            </div>

        </div>


        <form
            ref={form}
            className="contact-form"
            onSubmit={sendEmail}
        >

            <div className="input-box">
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                />
            </div>

            <div className="input-box">
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                />
            </div>

            <div className="input-box">
                <textarea
                    name="message"
                    rows="6"
                    placeholder="Your Message"
                    required
                />
            </div>

            <div className="contact-buttons">

                <button
                    type="submit"
                    className="email-btn"
                >
                    <FaEnvelope />
                    Send Email
                </button>

                <button
                    type="button"
                    className="whatsapp-btn"
                    onClick={sendWhatsapp}
                >
                    <FaWhatsapp />
                    WhatsApp
                </button>

            </div>

        </form>

    </div>

</section>
  );
}

export default Contact;