"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence, Variants } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuVariants: Variants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.3, ease: "easeInOut" }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: { duration: 0.3, ease: "easeInOut" }
    }
  };

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <Link href="/" className="logo">
          <Image src="/logo.jpg" alt="Jravio Detailing Logo" width={70} height={70} style={{ borderRadius: '50%', border: '2px solid rgba(255,255,255,0.1)' }} />
        </Link>

        {/* Desktop Menu */}
        <div className="nav-links desktop-only">
          <Link href="/">Acasa</Link>
          <Link href="/servicii">Servicii</Link>
          <Link href="/pricing">Preturi</Link>
          <Link href="/gallery">Galerie</Link>
          <a href="tel:0763624228" className="btn btn-primary btn-sm">
            <Phone size={16} style={{ marginRight: '8px' }} /> 0763 624 228
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="mobile-toggle" onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mobile-menu"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            <div className="container mobile-nav-links">
              <Link href="/" onClick={toggleMenu}>Acasa</Link>
              <Link href="/servicii" onClick={toggleMenu}>Servicii</Link>
              <Link href="/pricing" onClick={toggleMenu}>Preturi</Link>
              <Link href="/gallery" onClick={toggleMenu}>Galerie</Link>
              <Link href="/contact" onClick={toggleMenu} className="btn btn-primary btn-full">
                Contacteaza-ne
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .navbar {
          background: rgba(5, 5, 5, 0.85);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          position: sticky;
          top: 0;
          z-index: 1000;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          padding: 0.5rem 0;
          transition: background 0.3s;
        }
        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .logo {
          display: flex;
          align-items: center;
          text-decoration: none;
          transition: transform 0.3s;
        }
        .logo:hover {
          transform: scale(1.05);
        }
        .nav-links {
          display: flex;
          gap: 2.5rem;
          align-items: center;
        }
        .nav-links a:not(.btn) {
          color: #ccc;
          font-weight: 500;
          transition: color 0.3s;
          position: relative;
          padding: 0.5rem 0;
        }
        .nav-links a:not(.btn):hover {
          color: white;
          text-shadow: 0 0 8px rgba(255, 255, 255, 0.3);
        }
        .nav-links a:not(.btn)::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: 0px;
          left: 0;
          background-color: var(--primary);
          transition: width 0.3s ease;
          box-shadow: 0 0 8px var(--primary);
        }
        .nav-links a:not(.btn):hover::after {
          width: 100%;
        }
        .btn-sm {
          padding: 0.5rem 1.2rem;
          font-size: 0.9rem;
          display: flex;
          align-items: center;
        }
        
        .mobile-toggle {
          display: none;
          background: none;
          border: none;
          color: white;
          cursor: pointer;
        }

        .mobile-menu {
          overflow: hidden;
          background: #0a0a0a;
          border-bottom: 1px solid #222;
        }
        .mobile-nav-links {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          padding: 2rem 1rem;
        }
        .mobile-nav-links a {
          font-size: 1.2rem;
          color: #ddd;
        }
        .btn-full {
          width: 100%;
          text-align: center;
          justify-content: center;
        }

        @media (max-width: 768px) {
          .desktop-only {
            display: none;
          }
          .mobile-toggle {
            display: block;
          }
          .logo-text {
             font-size: 1.2rem;
          }
        }
      `}</style>
    </nav>
  );
}
