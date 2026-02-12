"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence, Variants } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <Link href="/" className="logo">
          <div className="logo-wrapper">
            <Image src="/logo.jpg" alt="Jravio Detailing Logo" width={80} height={80} className="logo-img" />
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="nav-links desktop-only">
          <Link href="/" className="nav-link">Acasa</Link>
          <Link href="/servicii" className="nav-link">Servicii</Link>
          <Link href="/pricing" className="nav-link">Preturi</Link>
          <Link href="/gallery" className="nav-link">Galerie</Link>
          <a href="tel:0763624228" className="btn-call">
            <Phone size={18} /> <span>0763 624 228</span>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="mobile-toggle" onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
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
              <a href="tel:0763624228" className="btn-call mobile-btn">
                <Phone size={18} /> Suna Acum
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          padding: 1.5rem 0;
          background: transparent;
          transition: all 0.4s ease;
        }

        .navbar.scrolled {
          background: rgba(10, 10, 10, 0.85);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          padding: 0.8rem 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        }

        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
        }

        .logo-wrapper {
          position: relative;
          transition: transform 0.3s;
        }

        .logo:hover .logo-wrapper {
          transform: scale(1.05);
        }

        .logo-img {
          display: block;
          border-radius: 8px; /* Slight rounding for a modern look */
        }

        .logo-text {
          font-size: 1.4rem;
          font-weight: 700;
          color: white;
          letter-spacing: 1px;
        }

        .highlight {
          color: var(--primary);
        }

        .nav-links {
          display: flex;
          gap: 2.5rem;
          align-items: center;
        }

        .nav-link {
          color: #ddd;
          font-weight: 500;
          font-size: 0.95rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          position: relative;
          padding: 5px 0;
          transition: color 0.3s;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--primary);
          transition: width 0.3s ease;
          box-shadow: 0 0 8px var(--primary);
        }

        .nav-link:hover {
          color: white;
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .btn-call {
          background: linear-gradient(135deg, var(--primary) 0%, #d00000 100%);
          color: white;
          padding: 0.7rem 1.5rem;
          border-radius: 50px;
          font-weight: 600;
          font-size: 0.95rem;
          display: flex;
          align-items: center;
          gap: 8px;
          text-decoration: none;
          box-shadow: 0 4px 15px rgba(255, 59, 59, 0.3);
          transition: all 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .btn-call:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(255, 59, 59, 0.5);
          filter: brightness(1.1);
        }

        .mobile-toggle {
          display: none;
          background: none;
          border: none;
          color: white;
          cursor: pointer;
          padding: 5px;
        }

        .mobile-menu {
          overflow: hidden;
          background: rgba(10, 10, 10, 0.95);
          backdrop-filter: blur(16px);
          border-bottom: 1px solid #333;
          position: fixed;
          top: 75px; /* Adjust based on scrolled height approximately */
          left: 0;
          width: 100%;
          z-index: 999;
        }

        .mobile-nav-links {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          padding: 2rem;
          align-items: center;
        }

        .mobile-nav-links a {
          font-size: 1.1rem;
          color: #eee;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-weight: 600;
          width: 100%;
          text-align: center;
        }
        
        .mobile-btn {
          margin-top: 1rem;
          justify-content: center;
          width: 100%;
          max-width: 250px;
        }

        @media (max-width: 900px) {
           .logo-text {
             font-size: 1.1rem;
           }
           .nav-links {
             gap: 1.5rem;
           }
        }

        @media (max-width: 768px) {
          .desktop-only {
            display: none;
          }
          .mobile-toggle {
            display: block;
          }
          .navbar {
            padding: 1rem 0;
            background: rgba(10, 10, 10, 0.85); /* Always dark on mobile for visibility */
            backdrop-filter: blur(12px);
          }
          .mobile-menu {
            top: 70px;
          }
        }
      `}</style>
    </nav>
  );
}
