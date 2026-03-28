"use client";

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function Gallery() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const images = [
    { src: "/portofoliu/626060451_17881542612454778_6081212463125568744_n.jpg" },
    { src: "/portofoliu/534143849_17862284916454778_543517394185957724_n.jpg" },
    { src: "/portofoliu/542818191_17864937312454778_4759173288046722290_n.jpg" },
    { src: "/portofoliu/543668718_17865165066454778_6724803299633798733_n.jpg" },
    { src: "/portofoliu/505143241_17857749825454778_1629903843666616500_n.jpg" },
    { src: "/portofoliu/518072471_17857497099454778_5571668123458131904_n.jpg" },
    { src: "/portofoliu/534323231_17861928705454778_36140480576635748_n.jpg" },
    { src: "/portofoliu/524167739_17859196899454778_3453654246227289282_n.jpg" },
    { src: "/portofoliu/517097842_17857270557454778_2691934537107345339_n.jpg" },
    { src: "/portofoliu/526887545_17860201467454778_8808329801711584321_n.jpg" },
    { src: "/portofoliu/573555990_17871037347454778_4930858486637755745_n.jpg" },
    { src: "/portofoliu/575511257_17871037338454778_2232946489165793936_n.jpg" },
    { src: "/portofoliu/552627032_17866423749454778_1498802626795071639_n.jpg" },
    { src: "/portofoliu/626358571_1104181911785038_1573810634875490750_n.jpg" },
    { src: "/portofoliu/573719298_3338848636279690_7728634538714525155_n.jpg" },
    { src: "/portofoliu/590417619_1329109788989497_1981107012294555643_n.jpg" },
    { src: "/portofoliu/558301642_1857831758945018_6749391576225849454_n.jpg" },
    { src: "/portofoliu/629868540_1270959788272990_4106681548580487520_n.jpg" },
    { src: "/portofoliu/584403281_689888817184681_7891745417107844995_n.jpg" },
    { src: "/portofoliu/553472656_3761824820782138_2481548277377934948_n.jpg" },
    { src: "/portofoliu/551832710_17865906543454778_7918687230567193298_n.jpg" }
  ];

  const handleImageClick = (idx: number) => {
    setIndex(idx);
    setOpen(true);
  };

  return (
    <main>
      <Navbar />
      <div className="page-header">
        <div className="container">
          <h1>Galerie Foto</h1>
          <p>Rezultate care vorbesc de la sine.</p>
        </div>
      </div>

      <section className="section container">
        <div className="gallery-grid">
          {images.map((img, idx) => (
            <div
              key={idx}
              className="gallery-item"
              onClick={() => handleImageClick(idx)}
            >
              <div
                className="gallery-img"
                style={{ backgroundImage: `url(${img.src})` }}
              />
              <div className="overlay">
                <span>Vezi Detalii</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={images}
      />

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
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 1rem;
          margin-top: 2rem;
        }
        .gallery-item {
          position: relative;
          aspect-ratio: 4/3;
          overflow: hidden;
          border-radius: 4px;
          cursor: pointer;
        }
        .gallery-img {
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center;
          transition: transform 0.5s ease;
        }
        .gallery-item:hover .gallery-img {
          transform: scale(1.1);
        }
        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0,0,0,0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s;
        }
        .gallery-item:hover .overlay {
          opacity: 1;
        }
        .overlay span {
          border: 1px solid white;
          padding: 0.5rem 1rem;
          color: white;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-size: 0.9rem;
        }
      `}</style>
    </main>
  );
}
