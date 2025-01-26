import "../styles/AboutSection.css";
import { useLocation } from "react-router-dom";

const AboutSection = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div className="about-section-container">
      <section className="about-section">
        <div className="about-title-container">
          <h2 className={`about-title ${isHomePage ? "left" : "center"}`}>Hakkımızda</h2>
        </div>
        <div className="about-text-container">
          <p className="about-text">
            {isHomePage ? (
              <>
                SZ Art Services, Türkiye’nin ilk kültür-sanat-tasarım
                danışmanlık ajansı olarak, prodüksiyondan stratejiye,
                arşivden izleyici geliştirmeye uzanan kapsamlı hizmetler
                sunar. Sanatçıları, kurumları ve izleyicileri bir araya
                getirerek, sanat ve hayat arasındaki güçlü bağı temel alan,
                sürdürülebilir ve esnek bir yapı oluşturur. SZ Art Services
                ile sanat ve kültür alanında fark yaratın.
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


