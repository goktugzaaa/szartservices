import React from "react";


const ProjectsSection = () => {
  return (
    <div className="projects-section-container">
      <section className="projects-section">
        <div className="projects-title-container">
          <h2 className="projects-title">Projeler</h2>
        </div>
        <div className="projects-text-container">
          <p className="projects-text">
            SZ Art Services, Türkiye’nin ilk kültür-sanat-tasarım
            danışmanlık ajansı olarak, prodüksiyondan stratejiye,
            arşivden izleyici geliştirmeye uzanan kapsamlı hizmetler
            sunar. Sanatçıları, kurumları ve izleyicileri bir araya
            getirerek, sanat ve hayat arasındaki güçlü bağı temel alan,
            sürdürülebilir ve esnek bir yapı oluşturur. SZ Art Services
            ile sanat ve kültür alanında fark yaratın.
          </p>
          <div className="learn-more-container">
            <a href="Projects" className="learn-more">
              Learn more <span className="arrow">→</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
} 
export default ProjectsSection;