"use client";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Check, Star, Shield, Zap, Car } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Pricing() {
  const commonFeatures = [
    "Prespălare cu spumă delicată",
    "Spălare cu două găleți și șampon dedicat",
    "Spălare cu spumă activă",
    "Degresare chimică și fizică (argilă)",
    "Degresare balamale uși",
    "Curățare detaliată a jantelor și etrierilor",
    "Curățare anvelope și aplicare dressing",
    "Aplicare tratament pentru chedere și trim-uri"
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <main>
      <Navbar />
      <div className="page-header">
        <div className="container">
          <h1>Lista de Preturi</h1>
          <p>Alege pachetul perfect pentru nevoile mașinii tale.</p>
        </div>
      </div>

      <section className="section container">
        <h2 className="category-title">FOLIE PPF (Paint Protection Film)</h2>

        <div className="pricing-grid" style={{ marginBottom: '6rem' }}>
          {/* PPF Integral */}
          <motion.div
            className="pricing-card popular"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            whileHover={{ scale: 1.02, y: -10 }}
          >
            <div className="popular-badge">ULTIMATE PROTECTION</div>
            <div className="card-header">
              <h3>PPF INTEGRAL</h3>
              <p className="subtitle">Full Body Coverage</p>
              <p className="description">Protecție invizibilă și completă pentru întreaga caroserie.</p>
            </div>

            <div className="prices">
              <div className="price-row" style={{ justifyContent: 'center', fontSize: '1.2rem' }}>
                Incepand de la <strong>12.000 RON</strong>
              </div>
            </div>

            <div className="features">
              <h4>Beneficii Principale:</h4>
              <ul>
                <li><Check size={16} className="check" /> Protecție invizibilă și regenerabilă la căldură</li>
                <li><Check size={16} className="check" /> Garanție până la 10 ani</li>
                <li><Check size={16} className="check" /> Rezistență sporită la pietriș și zgârieturi</li>
                <li><Check size={16} className="check" /> Păstrează luciul original al vopselei</li>
                <li><Check size={16} className="check" /> Aplicare profesională (precizie OEM)</li>
              </ul>
            </div>

            <a href="https://wa.me/40763624228" target="_blank" rel="noopener noreferrer" className="btn btn-primary full-width">Programează-te</a>
          </motion.div>

          {/* PPF Kit Frontal */}
          <motion.div
            className="pricing-card"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            whileHover={{ y: -10, borderColor: "#333", backgroundColor: "#181818" }}
          >
            <div className="card-header">
              <h3>PPF Kit Frontal</h3>
              <p className="subtitle">Zonele esențiale expuse</p>
              <p className="description">Capotă, Bară față, Aripi laterale față, Faruri, Oglinzi.</p>
            </div>

            <div className="prices">
              <div className="price-row" style={{ justifyContent: 'center', fontSize: '1.2rem' }}>
                Incepand de la <strong>5.500 RON</strong>
              </div>
            </div>

            <div className="features">
              <p style={{ color: '#aaa', fontSize: '0.9rem', marginBottom: '1rem', lineHeight: '1.5' }}>
                Ideal pentru cei care vor să protejeze zonele cele mai expuse la impact (pietricele, insecte). O opțiune eficientă financiar și practic.
              </p>
              <ul>
                <li><Check size={16} className="check" /> Protejează bara față, capota, aripile și oglinzile</li>
                <li><Check size={16} className="check" /> Previne ciobiturile de la pietre</li>
                <li><Check size={16} className="check" /> Investiție inteligentă pentru protecție parțială</li>
              </ul>
            </div>

            <a href="https://wa.me/40763624228" target="_blank" rel="noopener noreferrer" className="btn btn-outline full-width">Programează-te</a>
          </motion.div>
        </div>

        <h2 className="category-title">PACHETE EXTERIOR</h2>

        <div className="pricing-grid">
          {/* Silver Package */}
          <motion.div
            className="pricing-card"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            whileHover={{ y: -10, borderColor: "#333", backgroundColor: "#181818" }}
          >
            <div className="card-header">
              <h3>Pachet Silver</h3>
              <p className="subtitle">Polish One Step</p>
              <p className="description">Elimină 45-50% din zgârieturi și redă luciul lacului.</p>
            </div>

            <div className="prices">
              <div className="price-row"><span>Clasa mică</span> <strong>999 RON</strong></div>
              <div className="price-row"><span>Clasa medie</span> <strong>1149 RON</strong></div>
              <div className="price-row"><span>Clasa mare</span> <strong>1299 RON</strong></div>
              <div className="price-row"><span>SUV</span> <strong>1499 RON</strong></div>
            </div>

            <div className="bonus">
              <Star size={18} className="icon" />
              <p><strong>Gratuit:</strong> Tratament cu ceară solidă Meguiars Ultimate Wax (3-4 luni)</p>
            </div>

            <div className="features">
              <h4>Include procesul de spălare:</h4>
              <ul>
                {commonFeatures.map((f, i) => (
                  <li key={i}><Check size={16} className="check" /> {f}</li>
                ))}
              </ul>
            </div>

            <a href="https://wa.me/40763624228" target="_blank" rel="noopener noreferrer" className="btn btn-outline full-width">Programează-te</a>
          </motion.div>

          {/* Gold Package - Popular */}
          <motion.div
            className="pricing-card popular"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            whileHover={{ scale: 1.02, y: -10 }}
          >
            <div className="popular-badge">POPULAR</div>
            <div className="card-header">
              <h3>Pachet Gold</h3>
              <p className="subtitle">Polish 2 Step (Corecție Lac)</p>
              <p className="description">Elimină 90-95% din zgârieturi, redă strălucirea inițială de fabrică.</p>
            </div>

            <div className="prices">
              <div className="price-row"><span>Clasa mică</span> <strong>1999 RON</strong></div>
              <div className="price-row"><span>Clasa medie</span> <strong>2199 RON</strong></div>
              <div className="price-row"><span>Clasa mare</span> <strong>2399 RON</strong></div>
              <div className="price-row"><span>SUV</span> <strong>2599 RON</strong></div>
            </div>

            <div className="bonus highlight">
              <Shield size={18} className="icon" />
              <p><strong>Gratuit:</strong> Tratament ceramic ultrahidrofob Gtechnic Exo v5 (24 luni)</p>
            </div>

            <div className="features">
              <h4>Include procesul de spălare:</h4>
              <ul>
                {commonFeatures.map((f, i) => (
                  <li key={i}><Check size={16} className="check" /> {f}</li>
                ))}
              </ul>
            </div>

            <a href="https://wa.me/40763624228" target="_blank" rel="noopener noreferrer" className="btn btn-primary full-width">Programează-te</a>
          </motion.div>

          {/* Platinum Package */}
          <motion.div
            className="pricing-card"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            whileHover={{ y: -10, borderColor: "#333", backgroundColor: "#181818" }}
          >
            <div className="card-header">
              <h3>Pachet Platinum</h3>
              <p className="subtitle">Polish 2-3 Step & Full Ceramic</p>
              <p className="description">Include tot din Gold + strat suplimentar G-Technic Crystal Serum Light (Total 60 luni protecție).</p>
            </div>

            <div className="prices">
              <div className="price-row"><span>Clasa mică</span> <strong>2799 RON</strong></div>
              <div className="price-row"><span>Clasa medie</span> <strong>3099 RON</strong></div>
              <div className="price-row"><span>Clasa mare</span> <strong>3499 RON</strong></div>
              <div className="price-row"><span>SUV</span> <strong>3999 RON</strong></div>
            </div>

            <div className="bonus">
              <Zap size={18} className="icon" />
              <p><strong>Gratuit:</strong> Tratament hidrofob geamuri</p>
            </div>

            <div className="features">
              <h4>Include procesul de spălare:</h4>
              <ul>
                {commonFeatures.map((f, i) => (
                  <li key={i}><Check size={16} className="check" /> {f}</li>
                ))}
              </ul>
            </div>

            <a href="https://wa.me/40763624228" target="_blank" rel="noopener noreferrer" className="btn btn-outline full-width">Programează-te</a>
          </motion.div>
        </div>

        <h2 className="category-title" style={{ marginTop: '6rem' }}>DETAILING INTERIOR</h2>

        <div className="pricing-grid" style={{ justifyContent: 'center' }}>
          <motion.div
            className="pricing-card popular"
            style={{ maxWidth: '600px', width: '100%' }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            whileHover={{ scale: 1.02, y: -10 }}
          >
            <div className="card-header">
              <h3>Pachet Detailing Interior</h3>
              <p className="subtitle">Curățare Profundă & Igienizare</p>
              <p className="description">Redă prospețimea și aspectul de nou al interiorului mașinii tale.</p>
            </div>

            <div className="prices">
              <div className="price-row"><span>Clasa mică</span> <strong>699 RON</strong></div>
              <div className="price-row"><span>Clasa medie</span> <strong>899 RON</strong></div>
              <div className="price-row"><span>Clasa mare</span> <strong>999 RON</strong></div>
              <div className="price-row"><span>SUV</span> <strong>1199 RON</strong></div>
            </div>

            <div className="bonus">
              <Star size={18} className="icon" />
              <p><strong>Opțional:</strong> Protecție ceramică piele de la <strong>400 RON + TVA</strong></p>
            </div>

            <div className="features">
              <h4>Include:</h4>
              <ul>
                <li><Check size={16} className="check" /> Aspirarea în detaliu a habitaclului</li>
                <li><Check size={16} className="check" /> Curățarea suprafețelor textile și mochetei (injecție-extracție)</li>
                <li><Check size={16} className="check" /> Igienizarea instalației de climatizare cu aburi</li>
                <li><Check size={16} className="check" /> Curățarea bordului și elementelor din plastic</li>
                <li><Check size={16} className="check" /> Curățarea și hidratarea pielii + volan (balsam dedicat)</li>
                <li><Check size={16} className="check" /> Curățarea în detaliu a centurilor de siguranță</li>
                <li><Check size={16} className="check" /> Aplicare dressing pe elementele din plastic/cauciuc</li>
                <li><Check size={16} className="check" /> Îndepărtarea părului de animal</li>
              </ul>
            </div>

            <a href="https://wa.me/40763624228" target="_blank" rel="noopener noreferrer" className="btn btn-primary full-width">Programează-te</a>
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
        .category-title {
          text-align: center;
          font-size: 2rem;
          margin-bottom: 3rem;
          color: var(--primary);
          text-transform: uppercase;
          letter-spacing: 2px;
        }
        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
          align-items: flex-start;
        }
        .pricing-card {
          background: #151515;
          border: 1px solid #333;
          border-radius: 12px;
          padding: 2rem;
          position: relative;
          transition: transform 0.3s, border-color 0.3s;
        }
        .pricing-card:hover {
          transform: translateY(-5px);
          border-color: #444;
        }
        .pricing-card.popular {
          border-color: var(--primary);
          background: #1a1a1a;
          box-shadow: 0 0 30px rgba(255, 77, 77, 0.1);
          transform: scale(1.02);
          z-index: 2;
        }
        .pricing-card.popular:hover {
          transform: scale(1.02) translateY(-5px);
        }
        .popular-badge {
          position: absolute;
          top: -15px;
          left: 50%;
          transform: translateX(-50%);
          background: var(--primary);
          color: white;
          padding: 0.5rem 1.5rem;
          border-radius: 20px;
          font-weight: 700;
          font-size: 0.8rem;
          letter-spacing: 1px;
        }
        .card-header {
          text-align: center;
          margin-bottom: 2rem;
          border-bottom: 1px solid #333;
          padding-bottom: 1.5rem;
        }
        .card-header h3 {
          font-size: 1.8rem;
          margin-bottom: 0.5rem;
        }
        .subtitle {
          color: var(--primary);
          font-weight: 600;
          margin-bottom: 0.5rem;
        }
        .description {
          color: #888;
          font-size: 0.9rem;
          line-height: 1.4;
        }
        .prices {
          background: rgba(0,0,0,0.2);
          padding: 1rem;
          border-radius: 8px;
          margin-bottom: 1.5rem;
        }
        .price-row {
          display: flex;
          justify-content: space-between;
          padding: 0.5rem 0;
          border-bottom: 1px solid #333;
          font-size: 0.95rem;
          color: #ccc;
        }
        .price-row:last-child {
          border-bottom: none;
        }
        .price-row strong {
          color: white;
        }
        .bonus {
          background: rgba(255, 77, 77, 0.1);
          padding: 1rem;
          border-radius: 8px;
          margin-bottom: 1.5rem;
          display: flex;
          gap: 10px;
          align-items: start;
        }
        .bonus.highlight {
          background: rgba(255, 77, 77, 0.2);
          border: 1px solid rgba(255, 77, 77, 0.3);
        }
        .bonus p {
          font-size: 0.9rem;
          color: #eee;
          margin: 0;
        }
        .features h4 {
          font-size: 1rem;
          margin-bottom: 1rem;
          color: #aaa;
        }
        .features ul {
          list-style: none;
          padding: 0;
          margin-bottom: 2rem;
        }
        .features li {
          display: flex;
          gap: 10px;
          margin-bottom: 0.5rem;
          color: #ccc;
          font-size: 0.9rem;
          align-items: flex-start;
        }
        .full-width {
          width: 100%;
          justify-content: center;
        }
        @media (max-width: 900px) {
          .pricing-grid {
            grid-template-columns: 1fr;
            max-width: 500px;
            margin: 0 auto;
          }
          .pricing-card.popular {
            transform: scale(1);
          }
           .pricing-card.popular:hover {
            transform: translateY(-5px);
          }
        }
      `}</style>
    </main>
  );
}
