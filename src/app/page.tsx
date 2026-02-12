"use client";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Shield, Star, Clock, ArrowRight, Gem, PaintBucket, Scissors, CheckCircle2, Armchair, Lightbulb, Check, Zap } from 'lucide-react';

export default function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariant = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 50 } }
  };

  const services = [
    {
      title: "Fullbody PPF",
      description: "Protectie suprema pentru vopseaua masinii tale. Folia PPF este o bariera invizibila impotriva zgarieturilor, pietricelelor si factorilor chimici.",
      icon: <Shield size={32} />,
      image: "/portofoliu/542818191_17864937312454778_4759173288046722290_n.jpg"
    },
    {
      title: "Chrome Delete",
      description: "Schimba aspectul masinii prin infolierea elementelor cromate in negru lucios sau mat. Ofera un look mai sportiv si agresiv.",
      icon: <Scissors size={32} />,
      image: "/portofoliu/505143241_17857749825454778_1629903843666616500_n.jpg"
    },
    {
      title: "Detailing Exterior",
      description: "Proces complex de curatare, decontaminare si corectie a lacului. Eliminam panza de paianjen si zgarieturile fine.",
      icon: <PaintBucket size={32} />,
      image: "/portofoliu/526887545_17860201467454778_8808329801711584321_n.jpg"
    },
    {
      title: "Detailing Interior",
      description: "Curatare in profunzime a fiecarui element din habitaclu. Igienizare completa cu injectie-extractie si abur.",
      icon: <Armchair size={32} />,
      image: "/portofoliu/534143849_17862284916454778_543517394185957724_n.jpg"
    },
    {
      title: "Reconditionare Faruri",
      description: "Restaurarea claritatii farurilor matuite. Procesul include slefuire progresiva, polishare si protectie PPF.",
      icon: <Lightbulb size={32} />,
      image: "/portofoliu/518072471_17857497099454778_5571668123458131904_n.jpg"
    }
  ];

  return (
    <main>
      <Navbar />

      {/* Hero Section */}
      <section className="hero">
        {/* ... (keep existing hero code) ... */}
        <motion.div
          className="container hero-content"
          initial="initial"
          animate="animate"
          variants={fadeIn}
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Perfectiune in Detailing Auto Bucuresti
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Readucem stralucirea masinii tale cu servicii premium de polish, protectie ceramica si curatare tapiterie.
          </motion.p>
          <motion.div
            className="hero-cta"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <Link href="/servicii" className="btn btn-primary">Vezi Serviciile</Link>
            <a href="https://wa.me/40763624228" target="_blank" rel="noopener noreferrer" className="btn btn-outline">Programeaza Acum</a>
          </motion.div>
        </motion.div>
        <div className="hero-overlay"></div>
      </section>

      {/* Services Preview */}
      <section className="section container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Servicii Premium</h2>
          <p className="section-subtitle">Solutii complete pentru intretinerea masinii tale</p>
        </motion.div>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="service-image">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="service-icon-overlay">
                  {service.icon}
                </div>
              </div>
              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <Link href="/servicii" className="btn btn-outline">
            Vezi Toate Serviciile <ArrowRight size={16} style={{ display: 'inline', marginLeft: '5px' }} />
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="section bg-darker">
        <div className="container">
          <div className="about-grid">
            <motion.div
              className="about-image"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="image-wrapper">
                <Image
                  src="/portofoliu/542818191_17864937312454778_4759173288046722290_n.jpg"
                  alt="Despre Jravio Detailing"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="experience-badge">
                <span className="years">5+</span>
                <span className="text">Ani de<br />Excelenta</span>
              </div>
            </motion.div>

            <motion.div
              className="about-content"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>Despre JRAVIO DETAILING</h2>
              <h3 className="subtitle">Pasiune pentru perfectiune in fiecare detaliu.</h3>
              <p>
                La Jravio Detailing, nu doar curatam masini - le transformam. Suntem dedicati artei detailing-ului auto, folosind cele mai noi tehnologii si produse premium pentru a readuce starea de "nou" a autovehiculului tau.
              </p>
              <p>
                Fie ca este vorba de o protectie PPF invizibila, un tratament ceramic durabil sau o curatare minutioasa a interiorului, echipa noastra de profesionisti trateaza fiecare proiect cu aceeasi rigurozitate si atentie.
              </p>

              <ul className="about-features">
                <li><CheckCircle2 className="check" size={20} /> Tehnicieni certificati si pasionati</li>
                <li><CheckCircle2 className="check" size={20} /> Produse de top (Gyeon, Rupes, Koch Chemie)</li>
                <li><CheckCircle2 className="check" size={20} /> Atelier modern si climatizat</li>
                <li><CheckCircle2 className="check" size={20} /> Garantie pentru toate serviciile prestate</li>
              </ul>

              <a href="https://wa.me/40763624228" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ marginTop: '2rem' }}>
                Programeaza-te pe WhatsApp
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section bg-darker">
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            De ce Jravio Detailing?
          </motion.h2>
          <div className="features-grid">
            <motion.div
              className="feature"
              initial={{ opacity: 0, width: "80%" }}
              whileInView={{ opacity: 1, width: "100%" }}
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                borderColor: "rgba(255, 59, 59, 0.3)"
              }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="feature-icon"><Gem size={32} /></div>
              <h4>Materiale Premium</h4>
              <p>Folosim doar produse de top (Koch Chemie, Rupes, Gyeon) pentru rezultate exceptionale.</p>
            </motion.div>
            <motion.div
              className="feature"
              initial={{ opacity: 0, width: "80%" }}
              whileInView={{ opacity: 1, width: "100%" }}
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                borderColor: "rgba(255, 59, 59, 0.3)"
              }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="feature-icon"><Clock size={32} /></div>
              <h4>Experienta</h4>
              <p>Peste 5 ani de experienta in domeniul detailing-ului auto.</p>
            </motion.div>
            <motion.div
              className="feature"
              initial={{ opacity: 0, width: "80%" }}
              whileInView={{ opacity: 1, width: "100%" }}
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                borderColor: "rgba(255, 59, 59, 0.3)"
              }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="feature-icon"><Star size={32} /></div>
              <h4>Atentie la Detalii</h4>
              <p>Tratam fiecare masina cu aceeasi grija, indiferent de pachetul ales.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            <h2>Gata sa iti transformi masina?</h2>
            <p>Contacteaza-ne pentru o oferta personalizata.</p>
            <Link href="/contact" className="btn btn-primary">Contacteaza-ne</Link>
          </motion.div>
        </div>
      </section>

      {/* Pricing Preview Section */}
      <section className="section container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Pachete Detailing Exterior</h2>
          <p className="section-subtitle">Alege nivelul de protectie potrivit pentru masina ta</p>
        </motion.div>

        <div className="pricing-grid">
          {/* Silver Package */}
          <motion.div
            className="pricing-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -10, borderColor: "#333", backgroundColor: "#181818" }}
            transition={{ delay: 0.1 }}
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
                <li><Check size={16} className="check" /> Spălare detaliată 2 găleți</li>
                <li><Check size={16} className="check" /> Decontaminare chimică și fizică</li>
                <li><Check size={16} className="check" /> Curățare jante și anvelope</li>
                <li><Check size={16} className="check" /> Aplicare dressing anvelope</li>
              </ul>
            </div>

            <a href="https://wa.me/40763624228" target="_blank" rel="noopener noreferrer" className="btn btn-outline full-width">Programează-te</a>
          </motion.div>

          {/* Gold Package - Popular */}
          <motion.div
            className="pricing-card popular"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, y: -10 }}
            transition={{ delay: 0.2 }}
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
                <li><Check size={16} className="check" /> Tot ce include pachetul Silver</li>
                <li><Check size={16} className="check" /> Degresare balamale uși</li>
                <li><Check size={16} className="check" /> Aplicare tratament chedere</li>
              </ul>
            </div>

            <a href="https://wa.me/40763624228" target="_blank" rel="noopener noreferrer" className="btn btn-primary full-width">Programează-te</a>
          </motion.div>

          {/* Platinum Package */}
          <motion.div
            className="pricing-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -10, borderColor: "#333", backgroundColor: "#181818" }}
            transition={{ delay: 0.3 }}
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
                <li><Check size={16} className="check" /> Pachet premium complet</li>
                <li><Check size={16} className="check" /> Curățare detaliată etrieri</li>
                <li><Check size={16} className="check" /> Curățare compartiment motor (la cerere)</li>
              </ul>
            </div>

            <a href="https://wa.me/40763624228" target="_blank" rel="noopener noreferrer" className="btn btn-outline full-width">Programează-te</a>
          </motion.div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <Link href="/pricing" className="btn btn-outline">
            Vezi Lista Completa de Preturi (PPF, Interior) <ArrowRight size={16} style={{ display: 'inline', marginLeft: '5px' }} />
          </Link>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="section bg-darker" style={{ overflow: 'hidden', padding: '4rem 0' }}>
        <div className="container" style={{ marginBottom: '2rem' }}>
          <h2 className="section-title">Portofoliu Lucrari Recent</h2>
        </div>

        <div className="marquee-container">
          <div className="marquee-track">
            {/* Original Set */}
            {[
              "505143241_17857749825454778_1629903843666616500_n.jpg",
              "517097842_17857270557454778_2691934537107345339_n.jpg",
              "518072471_17857497099454778_5571668123458131904_n.jpg",
              "524167739_17859196899454778_3453654246227289282_n.jpg",
              "526887545_17860201467454778_8808329801711584321_n.jpg",
              "534143849_17862284916454778_543517394185957724_n.jpg",
              "534323231_17861928705454778_36140480576635748_n.jpg",
              "542818191_17864937312454778_4759173288046722290_n.jpg",
              "543668718_17865165066454778_6724803299633798733_n.jpg",
              "551832710_17865906543454778_7918687230567193298_n.jpg",
              "552627032_17866423749454778_1498802626795071639_n.jpg",
              "553472656_3761824820782138_2481548277377934948_n.jpg",
              "558301642_1857831758945018_6749391576225849454_n.jpg",
              "573555990_17871037347454778_4930858486637755745_n.jpg",
              "573719298_3338848636279690_7728634538714525155_n.jpg",
              "575511257_17871037338454778_2232946489165793936_n.jpg",
              "584403281_689888817184681_7891745417107844995_n.jpg",
              "590417619_1329109788989497_1981107012294555643_n.jpg",
              "626060451_17881542612454778_6081212463125568744_n.jpg",
              "626358571_1104181911785038_1573810634875490750_n.jpg",
              "629868540_1270959788272990_4106681548580487520_n.jpg"
            ].map((img, i) => (
              <div key={i} className="portfolio-slide">
                <Image
                  src={`/portofoliu/${img}`}
                  alt={`Portfolio ${i}`}
                  width={400}
                  height={300}
                  style={{ objectFit: 'cover', borderRadius: '12px' }}
                />
              </div>
            ))}
            {/* Duplicate Set for Loop */}
            {[
              "505143241_17857749825454778_1629903843666616500_n.jpg",
              "517097842_17857270557454778_2691934537107345339_n.jpg",
              "518072471_17857497099454778_5571668123458131904_n.jpg",
              "524167739_17859196899454778_3453654246227289282_n.jpg",
              "526887545_17860201467454778_8808329801711584321_n.jpg",
              "534143849_17862284916454778_543517394185957724_n.jpg",
              "534323231_17861928705454778_36140480576635748_n.jpg",
              "542818191_17864937312454778_4759173288046722290_n.jpg",
              "543668718_17865165066454778_6724803299633798733_n.jpg",
              "551832710_17865906543454778_7918687230567193298_n.jpg",
              "552627032_17866423749454778_1498802626795071639_n.jpg",
              "553472656_3761824820782138_2481548277377934948_n.jpg",
              "558301642_1857831758945018_6749391576225849454_n.jpg",
              "573555990_17871037347454778_4930858486637755745_n.jpg",
              "573719298_3338848636279690_7728634538714525155_n.jpg",
              "575511257_17871037338454778_2232946489165793936_n.jpg",
              "584403281_689888817184681_7891745417107844995_n.jpg",
              "590417619_1329109788989497_1981107012294555643_n.jpg",
              "626060451_17881542612454778_6081212463125568744_n.jpg",
              "626358571_1104181911785038_1573810634875490750_n.jpg",
              "629868540_1270959788272990_4106681548580487520_n.jpg"
            ].map((img, i) => (
              <div key={`dup-${i}`} className="portfolio-slide">
                <Image
                  src={`/portofoliu/${img}`}
                  alt={`Portfolio ${i}`}
                  width={400}
                  height={300}
                  style={{ objectFit: 'cover', borderRadius: '12px' }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        .hero {
          height: 85vh; 
          display: flex;
          align-items: flex-start;
          justify-content: center;
          position: relative;
          background: url('https://images.unsplash.com/photo-1601362840469-51e4d8d58785?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80') center/cover no-repeat;
          background-attachment: fixed;
          text-align: center;
          padding-top: 130px; /* Moved MUCH higher, just below navbar */
        }
        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          z-index: 1;
          pointer-events: none;
        }
        .hero-content {
          position: relative;
          z-index: 9999; /* Absolute top layer */
          max-width: 900px;
          margin-top: 0;
        }
        .hero h1 {
          font-size: 5rem; /* Larger */
          font-weight: 900;
          line-height: 1.1;
          margin-bottom: 1.5rem;
          color: #ffffff;
          text-shadow: 3px 3px 0 #000000; /* Solid hard shadow for max visibility */
        }
        .hero p {
          font-size: 1.6rem; /* Larger */
          color: #ffffff;
          margin-bottom: 2.5rem;
          font-weight: 700;
          text-shadow: 2px 2px 0 #000000; /* Solid hard shadow */
          letter-spacing: 0.5px;
        }
        .hero-cta {
          display: flex;
          gap: 1.5rem;
          justify-content: center;
          position: relative;
          z-index: 20; /* Ensure buttons are clickable */
        }
        .section {
          padding: 8rem 0;
        }
        .bg-darker {
          background: #080808;
          background-image: radial-gradient(circle at top right, #1a1a1a 0%, transparent 40%);
        }
        .card-icon {
          margin-bottom: 1.5rem;
        }
        .text-primary {
          color: var(--primary);
        }
        .services-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 1.5rem;
          margin-top: 4rem;
        }
        .service-card {
          background: #151515;
          border-radius: 12px;
          overflow: hidden;
          border: 1px solid #222;
          transition: all 0.3s ease;
          position: relative;
          display: flex;
          flex-direction: column;
        }
        .service-card:hover {
          border-color: var(--primary);
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        }
        .service-image {
          position: relative;
          height: 300px; /* Taller image to match the reference style */
          width: 100%;
        }
        .service-icon-overlay {
          position: absolute;
          bottom: -20px;
          left: 50%;
          transform: translateX(-50%);
          width: 40px;
          height: 40px;
          background: var(--primary);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          box-shadow: 0 4px 10px rgba(0,0,0,0.5);
          z-index: 2;
        }
        .service-content {
          padding: 2rem 1rem 1.5rem;
          text-align: center;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
        }
        .service-content h3 {
          font-size: 1.2rem;
          margin-bottom: 0.8rem;
          color: white;
          font-weight: 700;
        }
        .service-content p {
          color: #ccc;
          margin-bottom: 0;
          font-size: 0.9rem;
          line-height: 1.5;
        }
        @media (max-width: 1200px) {
           .services-grid {
             grid-template-columns: repeat(3, 1fr);
           }
        }
        @media (max-width: 768px) {
          .services-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .service-image {
            height: 220px;
          }
        }
        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 3rem;
          margin-top: 4rem;
        }
        .feature {
          background: rgba(255,255,255,0.03);
          padding: 2rem;
          border-radius: 12px;
          border: 1px solid rgba(255,255,255,0.05);
          transition: transform 0.3s;
        }
        .feature:hover {
          transform: translateY(-5px);
          background: rgba(255,255,255,0.05);
        }
        .feature-icon {
          color: var(--primary);
          margin-bottom: 1rem;
          background: rgba(255, 77, 77, 0.1);
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
        }
        .feature h4 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          color: white;
        }
        .feature p {
          color: #aaa;
        }
        
        /* About Section Styles */
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }
        .about-image {
          position: relative;
        }
        .image-wrapper {
          position: relative;
          height: 450px;
          border-radius: 20px;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.1);
          box-shadow: 0 20px 40px rgba(0,0,0,0.4);
        }
        .experience-badge {
          position: absolute;
          bottom: -20px;
          right: -20px;
          background: var(--primary);
          padding: 1.5rem;
          border-radius: 15px;
          color: white;
          text-align: center;
          box-shadow: 0 10px 20px rgba(0,0,0,0.3);
          border: 4px solid #080808;
        }
        .experience-badge .years {
          display: block;
          font-size: 2.5rem;
          font-weight: 800;
          line-height: 1;
        }
        .experience-badge .text {
          font-size: 0.9rem;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .subtitle {
          font-size: 1.5rem;
          color: #ddd;
          margin-bottom: 1.5rem;
          font-weight: 400;
        }
        .about-content p {
          color: #bbb;
          margin-bottom: 1.5rem;
          line-height: 1.8;
          font-size: 1.05rem;
        }
        .about-features {
          list-style: none;
          padding: 0;
          margin-top: 2rem;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }
        .about-features li {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #ddd;
          font-weight: 500;
        }
        .about-features .check {
          color: var(--primary);
        }

        @media (max-width: 960px) {
          .about-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          .image-wrapper {
            height: 350px;
          }
          .experience-badge {
            right: 10px;
            bottom: -15px;
          }
        }

        .cta-section {
          padding: 8rem 0;
          text-align: center;
          background: linear-gradient(135deg, #111, #0a0a0a);
          border-top: 1px solid #222;
          position: relative;
          overflow: hidden;
        }
        .cta-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--primary), transparent);
        }
        .cta-section h2 {
          font-size: 3rem;
          margin-bottom: 1.5rem;
        }
        .cta-section p {
          color: #999;
          margin-bottom: 2.5rem;
          font-size: 1.3rem;
        }
        @media (max-width: 768px) {
          .hero h1 {
            font-size: 2.5rem;
          }
          .hero-cta {
            flex-direction: column;
          }
        }
        
        /* Portfolio Marquee */
        .marquee-container {
          width: 100%;
          overflow: hidden;
          position: relative;
        }
        .marquee-track {
          display: flex;
          gap: 2rem;
          width: max-content;
          animation: scroll 60s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
        .portfolio-slide {
          position: relative;
          width: 400px;
          height: 300px;
          flex-shrink: 0;
          transition: transform 0.3s;
          cursor: pointer;
        }
        .portfolio-slide:hover {
          transform: scale(1.05);
          z-index: 2;
        }
        
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        @media (max-width: 768px) {
          .portfolio-slide {
            width: 300px;
            height: 220px;
          }
        }

        /* Pricing CSS */
        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
          align-items: flex-start;
          margin-top: 2rem;
        }
        .pricing-card {
          background: #151515;
          border: 1px solid #333;
          border-radius: 12px;
          padding: 2rem;
          position: relative;
          transition: transform 0.3s, border-color 0.3s;
          display: flex;
          flex-direction: column;
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
          color: white;
        }
        .pricing-card .subtitle {
          color: var(--primary);
          font-weight: 600;
          margin-bottom: 0.5rem;
          font-size: 1.1rem;
        }
        .pricing-card .description {
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
        .bonus .icon {
          min-width: 18px;
          color: var(--primary);
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
          .pricing-card.popular {
             transform: scale(1);
             margin: 2rem 0;
          }
        }
      `}</style>
    </main >
  );
}
