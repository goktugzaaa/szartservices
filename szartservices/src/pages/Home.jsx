import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ProjectsSection from '../components/ProjectsSection';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home-page">
        <HeroSection />
      <AboutSection />
      <ProjectsSection />
    </div>
  );
};

export default Home;
