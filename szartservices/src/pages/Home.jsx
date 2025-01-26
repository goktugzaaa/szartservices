import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home-page">
        <HeroSection />
      <AboutSection />
      
    </div>
  );
};

export default Home;
