import "../styles/AboutSection.css";
import { useLocation } from "react-router-dom";

const AboutSection = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div className={`about-section-container ${isHomePage ? "" : "section"}`}>
      <section className="about-section">
        <div className="about-title-container">
          <h2 className={`about-title ${isHomePage ? "left" : "center"}`}>Hakkımızda</h2>
        </div>
        <div className="about-text-container">
          <p className="about-text">
            {isHomePage ? (
              <>
                 SZ Art Services olarak Türkiye’nin ilk sanat ve tasarım danışmanlık ajansıyız.
                 Sanatçıları, kurumları ve izleyicileri bir araya getiriyor, sanat ve hayat arasındaki bağı güçlendiren çözümler sunuyoruz.
                  Bizimle fark yaratın!"
              </>
            ) : (
              <>
                SZ Art Services; prodüksiyondan izleyici geliştirmeye,
                arşivden stratejiye, sanat ve kültür alanında tüm faaliyetlere
                çözümler sunan, gelişimin birlikte olduğuna inanan ve bu
                süreci bir kültürel inşa olarak ele alan, Türkiye’deki ilk
                kültür-sanat-tasarım danışmanlık ajansıdır...
              </>
            )}
          </p>
          {isHomePage && (
          <div className="learn-more-container">
            <a href="About" className="learn-more">
              Learn more <span className="arrow">→</span>
            </a>
          </div>
        )}
        </div>
        
      </section>
    </div>
  );
};

export default AboutSection;


