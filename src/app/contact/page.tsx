"use client";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Phone, MapPin, Clock, MessageCircle } from 'lucide-react';

export default function Contact() {

  return (
    <main>
      <Navbar />
      <div className="page-header">
        <div className="container">
          <h1>Contact Direct</h1>
          <p>Suntem la un telefon distanta pentru programari si informatii.</p>
        </div>
      </div>

      <section className="section container">
        <div className="contact-container">
          <motion.div
            className="contact-info-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3>Date de Contact</h3>
            <div className="info-items-wrapper">
              <div className="info-item">
                <MapPin className="icon" size={32} />
                <div>
                  <h4>Locatie</h4>
                  <p>Strada Smochinului nr 7</p>
                  <p className="small">Sector 1, București</p>
                </div>
              </div>
              <div className="info-item">
                <Clock className="icon" size={32} />
                <div>
                  <h4>Program</h4>
                  <p>Luni - Sambata: 09:00 - 18:00</p>
                  <p className="small">Duminica: Inchis</p>
                </div>
              </div>
              <div className="info-item">
                <Phone className="icon" size={32} />
                <div>
                  <h4>Telefon</h4>
                  <p>0763 624 228</p>
                </div>
              </div>
            </div>

            <div className="cta-buttons">
              <a href="tel:0763624228" className="btn btn-primary btn-large">
                <Phone size={24} style={{ marginRight: '10px' }} /> Suna Acum
              </a>
              <a href="https://wa.me/40763624228" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp btn-large">
                <MessageCircle size={24} style={{ marginRight: '10px' }} /> Mesaj pe WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        .page-header {
          padding: 10rem 0 4rem;
          background: linear-gradient(to bottom, #111, #0a0a0a);
          border-bottom: 1px solid #222;
          text-align: center;
        }
        .page-header h1 {
          font-size: 3rem;
          margin-bottom: 1rem;
        }
        .page-header p {
          color: #888;
        }
        .contact-container {
          max-width: 800px;
          margin: 0 auto;
        }
        .contact-info-card {
           background: #151515;
           border-radius: 16px;
           padding: 3rem;
           border: 1px solid #222;
           text-align: center;
        }
        .contact-info-card h3 {
          font-size: 2rem;
          margin-bottom: 2.5rem;
          color: white;
        }
        .info-items-wrapper {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 2rem;
          text-align: left;
          margin-bottom: 3rem;
        }
        .info-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 1rem;
          padding: 1.5rem;
          background: rgba(255,255,255,0.03);
          border-radius: 8px;
        }
        .info-item .icon {
          color: var(--primary);
        }
        .info-item h4 {
          font-size: 1.2rem;
          color: white;
          margin-bottom: 0.5rem;
        }
        .info-item p {
          color: #ccc;
          font-size: 1.1rem;
        }
        .small {
          font-size: 0.9rem !important;
          color: #888 !important;
          margin-top: 0.2rem;
        }
        .cta-buttons {
          display: flex;
          gap: 1.5rem;
          justify-content: center;
        }
        .btn-large {
          padding: 1rem 2rem;
          font-size: 1.2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          min-width: 250px;
        }
        .btn-whatsapp {
          background-color: #25d366;
          color: white;
          border: none;
          border-radius: 4px; /* match btn-primary border radius if defined globally */
          font-weight: 600;
          transition: background-color 0.3s, transform 0.2s;
        }
        .btn-whatsapp:hover {
          background-color: #20ba5a;
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .info-items-wrapper {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          .cta-buttons {
            flex-direction: column;
          }
          .contact-info-card {
            padding: 2rem 1rem;
          }
        }
      `}</style>
    </main>
  );
}
