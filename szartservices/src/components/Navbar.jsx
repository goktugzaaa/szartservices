import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [isHeroSection, setIsHeroSection] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const isHomePage = location.pathname === "/"; 

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector('.hero-section');
      const navbar = document.querySelector('.hamburger-btn');
      if (heroSection) {
        const navbarbottom = navbar.getBoundingClientRect().bottom;
        const heroSectionBottom = heroSection.getBoundingClientRect().bottom;
        setIsHeroSection(navbarbottom < heroSectionBottom);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div>
        <Link
          to="/"
          className={`logo ${isOpen ? "menu-open" : ""}`}
          style={{ display: isHomePage && !isOpen ? "none" : "block", color: "black" }}
          onClick={closeMenu}
        >
          <span>SZArtServices</span>
        </Link>
      </div>
      <div className={`hamburger-btn`} onClick={toggleMenu}>
        <div
          className={`hamburger-bar ${isOpen ? "open" : ""} ${
            isHomePage && isHeroSection ? "home-page" : "other-page"
          }`}
        ></div>
      </div>

      <div className={`fullscreen-menu ${isOpen ? "open" : ""}`}>
        <nav className="menu-items">
          <Link to="/about" className="menu-item" onClick={closeMenu}>
            <span>Hakkımızda</span>
          </Link>
          <Link to="/projects" className="menu-item" onClick={closeMenu}>
            <span>Projelerimiz</span>
          </Link>
          <Link to="/services" className="menu-item" onClick={closeMenu}>
            <span>Hizmetler</span>
          </Link>
          <Link to="/artists" className="menu-item" onClick={closeMenu}>
            <span>Sanatçılar</span>
          </Link>
          <Link to="/journal" className="menu-item" onClick={closeMenu}>
            <span>Jurnal</span>
          </Link>
          <Link to="/contact" className="menu-item" onClick={closeMenu}>
            <span>İletişim</span>
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Navbar;