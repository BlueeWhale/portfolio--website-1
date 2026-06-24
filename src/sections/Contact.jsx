import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

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
      <h1>📡 Contact Space Station</h1>

      <form
        ref={form}
        className="contact-form"
        onSubmit={sendEmail}
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
        />

        <textarea
          name="message"
          rows="6"
          placeholder="Your Message"
          required
        />

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
    </section>
  );
}

export default Contact;