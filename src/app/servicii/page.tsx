"use client";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { CarFront, SprayCan, Shield, Armchair, CheckCircle2, Scissors, PaintBucket, Lightbulb } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Services() {
  const services = [
    {
      title: "Fullbody PPF",
      description: "Protectie suprema pentru vopseaua masinii tale. Folia PPF este o bariera invizibila impotriva zgarieturilor, pietricelelor si factorilor chimici.",
      icon: <Shield size={32} />,
      image: "/portofoliu/542818191_17864937312454778_4759173288046722290_n.jpg",
      features: ["Protectie impotriva criblurii", "Autoregenerare zgarieturi", "Garantie extinsa"]
    },
    {
      title: "Chrome Delete",
      description: "Schimba aspectul masinii prin infolierea elementelor cromate in negru lucios sau mat. Ofera un look mai sportiv si agresiv.",
      icon: <Scissors size={32} />,
      image: "/portofoliu/505143241_17857749825454778_1629903843666616500_n.jpg",
      features: ["Aspect 'Shadow Line'", "Folie premium rezistenta", "Reversibil oricand"]
    },
    {
      title: "Detailing Exterior",
      description: "Proces complex de curatare, decontaminare si corectie a lacului. Eliminam panza de paianjen si zgarieturile fine.",
      icon: <PaintBucket size={32} />,
      image: "/portofoliu/526887545_17860201467454778_8808329801711584321_n.jpg",
      features: ["Polish multi-step", "Decontaminare vopsea", "Protectie ceramica / ceara"]
    },
    {
      title: "Detailing Interior",
      description: "Curatare in profunzime a fiecarui element din habitaclu. Igienizare completa cu injectie-extractie si abur.",
      icon: <Armchair size={32} />,
      image: "/portofoliu/534143849_17862284916454778_543517394185957724_n.jpg",
      features: ["Injectie-extractie tapiterie", "Curatare & hidratare piele", "Igienizare tubulatura AC"]
    },
    {
      title: "Reconditionare Faruri",
      description: "Restaurarea claritatii farurilor matuite. Procesul include slefuire progresiva, polishare si protectie PPF.",
      icon: <Lightbulb size={32} />,
      image: "/portofoliu/518072471_17857497099454778_5571668123458131904_n.jpg",
      features: ["Reda vizibilitatea nocturna", "Imbunatateste estetica", "Protectie UV inclusa"]
    }
  ];

  return (
    <main>
      <Navbar />
      <div className="page-header">
        <div className="container">
          <h1>Serviciile Noastre</h1>
          <p>Excelenta in fiecare detaliu pentru masina ta.</p>
        </div>
      </div>

      <section className="section container">
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
                <h2>{service.title}</h2>
                <p>{service.description}</p>
                <ul className="features-list">
                  {service.features.map((feature, i) => (
                    <li key={i}><CheckCircle2 size={16} className="check" /> {feature}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      <Footer />

      <style jsx>{`
        .page-header {
          padding: 6rem 0 4rem;
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
          font-size: 1.2rem;
        }
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
          margin-top: 2rem;
        }
        .service-card {
          background: #151515;
          border-radius: 12px;
          overflow: hidden;
          border: 1px solid #222;
          transition: all 0.3s ease;
        }
        .service-card:hover {
          border-color: var(--primary);
          box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        }
        .service-image {
          position: relative;
          height: 220px;
          width: 100%;
        }
        .service-icon-overlay {
          position: absolute;
          bottom: -25px;
          right: 20px;
          width: 50px;
          height: 50px;
          background: var(--primary);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          box-shadow: 0 4px 10px rgba(0,0,0,0.5);
        }
        .service-content {
          padding: 2rem 1.5rem 1.5rem;
        }
        .service-content h2 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          color: white;
        }
        .service-content p {
          color: #ccc;
          margin-bottom: 1.5rem;
          font-size: 0.95rem;
          line-height: 1.6;
          min-height: 80px; 
        }
        .features-list {
          list-style: none;
          padding: 0;
        }
        .features-list li {
          color: #888;
          margin-bottom: 0.6rem;
          display: flex;
          align-items: center;
          gap: 0.8rem;
          font-size: 0.9rem;
        }
        .check {
          color: var(--primary);
          min-width: 16px;
        }
        @media (max-width: 768px) {
          .services-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </main>
  );
}
