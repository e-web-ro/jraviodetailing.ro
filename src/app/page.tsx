"use client";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Shield, Star, Clock, ArrowRight, Gem, PaintBucket, Scissors, CheckCircle2, Armchair, Lightbulb } from 'lucide-react';

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
            Perfectiune in Detailing Auto
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

      <Footer />

      <style jsx>{`
        .hero {
          height: 85vh; /* Slightly taller */
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          background: url('https://images.unsplash.com/photo-1601362840469-51e4d8d58785?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80') center/cover no-repeat;
          background-attachment: fixed; /* Parallax feel */
          text-align: center;
        }
        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(10,10,10,1));
          z-index: 1;
        }
        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 800px;
        }
        .hero h1 {
          font-size: 4.5rem;
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 1.5rem;
          background: linear-gradient(to right, #fff, #bbb);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          text-shadow: 0 10px 30px rgba(0,0,0,0.5);
        }
        .hero p {
          font-size: 1.3rem;
          color: #ddd;
          margin-bottom: 2.5rem;
          font-weight: 300;
        }
        .hero-cta {
          display: flex;
          gap: 1.5rem;
          justify-content: center;
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
      `}</style>
    </main>
  );
}
