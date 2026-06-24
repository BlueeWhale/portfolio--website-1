import { useState } from "react";

function ResumeSection() {
  const [showCertificates, setShowCertificates] =
    useState(false);

  const certificates = [
    {
      name: "Data Science and Analysis",
      issuer: "HP LIFE",
      image: "/certificates/hp.png",
      file: "/certificates/DS.pdf",
    },
    {
      name: "Sumsung Innovation Campus",
      issuer: "SIC",
      image: "/certificates/SIC.jpg",
      file: "/certificates/SIC.pdf",
    },
    {
      name: "Smart India Hackathon",
      issuer: "SIH",
      image: "/certificates/SIH.jpg",
      file: "/certificates/SIC.pdf",
    },
    {
      name: "AI for beginner",
      issuer: "HP LIFE",
      image: "/certificates/hp.png",
      file: "/certificates/ai.pdf",
    },
    {
      name: "Youth Parliamentary Debate",
      issuer: "AMIPHORIA 26",
      image: "/certificates/amphoria.jpg",
      file: "/certificates/amiphoria.pdf",
    },
  ];

  return (
    <section className="resume-section">
      <h1 className="resume-title">
        📄 Resume & Certificates
      </h1>

      <div className="resume-buttons">
        <a
          href="/rishi_resume.pdf"
          download
          className="resume-btn"
        >
          📥 Download Resume
        </a>

        <button
          className="certificate-btn"
          onClick={() =>
            setShowCertificates(true)
          }
        >
          🏆 Certificates
        </button>
      </div>

      {showCertificates && (
        <div className="modal-overlay">
          <div className="certificate-modal">

            <button
              className="close-btn"
              onClick={() =>
                setShowCertificates(false)
              }
            >
              ✖
            </button>

            <h2>
              🏆 My Certificates
            </h2>

            <div className="certificate-grid">

              {certificates.map(
                (certificate, index) => (
                  <div
                    key={index}
                    className="certificate-card"
                  >
                    <img
                      src={certificate.image}
                      alt={certificate.name}
                      className="certificate-image"
                    />

                    <h3>
                      {certificate.name}
                    </h3>

                    <p>
                      {certificate.issuer}
                    </p>

                    <a
                      href={certificate.file}
                      target="_blank"
                      rel="noreferrer"
                      className="view-btn"
                    >
                      View Certificate
                    </a>
                  </div>
                )
              )}

            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default ResumeSection;