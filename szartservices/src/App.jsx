import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';  // Navbar bileşeni
import Home from './pages/Home';           // Anasayfa bileşeni
import About from './pages/About';         // Hakkımızda bileşeni
import Projects from './pages/Projects';   // Projelerimiz bileşeni
import Services from './pages/Services';   // Hizmetler bileşeni
import Artists from './pages/Artists';     // Sanatçılar bileşeni
import Journal from './pages/Journal';     // Jurnal bileşeni
import Contact from './pages/Contact';     // İletişim bileşeni

function App() {
  return (
    <>
    <div>
      {/* Navbar her sayfada gösterilecek */}
      <Navbar />
      {/* Route yapılandırması */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/services" element={<Services />} />
        <Route path="/artists" element={<Artists />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </div>
    </>
    
  );
}

export default App;



