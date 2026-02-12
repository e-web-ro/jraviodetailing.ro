"use client";

import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
    return (
        <>
            <a
                href="https://wa.me/40763624228"
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-float"
                aria-label="Contacteaza-ne pe WhatsApp"
            >
                <MessageCircle size={32} />
            </a>
            <style jsx>{`
        .whatsapp-float {
          position: fixed;
          bottom: 30px;
          right: 30px;
          background-color: #25d366;
          color: white;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 10px rgba(0,0,0,0.3);
          z-index: 1000;
          transition: all 0.3s ease;
        }
        .whatsapp-float:hover {
          transform: scale(1.1);
          box-shadow: 0 6px 14px rgba(0,0,0,0.4);
          background-color: #20ba5a;
        }
        @media(max-width: 768px) {
          .whatsapp-float {
            bottom: 20px;
            right: 20px;
            width: 50px;
            height: 50px;
          }
        }
      `}</style>
        </>
    );
}
