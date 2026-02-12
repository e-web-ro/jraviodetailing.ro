"use client";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>JRAVIO DETAILING</h3>
            <p>Pasiune pentru perfectiune.</p>
          </div>
          <div className="footer-links">
            <h4>Navigare</h4>
            <a href="/servicii">Servicii</a>
            <a href="/pricing">Lista Preturi</a>
            <a href="/contact">Contact</a>
          </div>
          <div className="footer-blog">
            <h4>Sfaturi & Blog</h4>
            <a href="/ce-este-ppf">Ce este Folia PPF?</a>
            <a href="/ce-este-protectia-ceramica">Ce este Protectia Ceramica?</a>
            <a href="/avantaje-detailing">Avantaje Detailing Auto</a>
          </div>
          <div className="footer-contact">
            <h4>Contact</h4>
            <p>Telefon: <a href="tel:0763624228">0763 624 228</a></p>
            <p>Email: contact@jraviodetailing.ro</p>
            <p>Adresa: Strada Smochinului nr 7, Sector 1, București</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Jravio Detailing. Toate drepturile rezervate.</p>
        </div>
      </div>
      <style jsx>{`
        .footer {
          background: #050505;
          padding: 4rem 0 2rem;
          border-top: 1px solid #222;
          margin-top: 4rem;
        }
        .footer-content {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
          margin-bottom: 3rem;
        }
        .footer-brand h3 {
          color: var(--primary);
          margin-bottom: 1rem;
        }
        .footer-links h4, .footer-contact h4, .footer-blog h4 {
          margin-bottom: 1.5rem;
          color: white;
        }
        .footer-links a, .footer-blog a {
          display: block;
          color: #888;
          margin-bottom: 0.5rem;
          transition: color 0.3s;
        }
        .footer-links a:hover, .footer-blog a:hover {
          color: var(--primary);
        }
        .footer-contact p {
          color: #888;
          margin-bottom: 0.5rem;
        }
        .footer-bottom {
          text-align: center;
          color: #555;
          padding-top: 2rem;
          border-top: 1px solid #111;
        }
      `}</style>
    </footer>
  );
}
