import React from 'react';
import '../styles/Services.css';

const services = [
  {
    title: 'Art Brokeraj',
    description: `Ajansımız, ikincil piyasa eserlerinizi değerlendirmek üzere brokeraj hizmeti sunmaktadır. Sanat eseri, likidite bakımından farklı bir yatırım aracıdır. Değer biçerken ekspertiz, arşiv taraması ve yatırım danışmanlığı gibi aşamalardan geçebilir.`,
  },
  {
    title: 'Fuar ve Etkinlik Yönetimi',
    description: `Kültür, sanat ve tasarım odağında oluşturduğumuz programlarla, izleyicilerle buluşmayı amaçlıyoruz. Strateji ve sürdürülebilirlik odaklı etkinlik yönetimi, tanıtım, dijital pazarlama, sigorta ve lojistik takibi gibi hizmetler veriyoruz.`,
  },
  {
    title: 'Sanat Yayıncılığı',
    description: `Yayıncılık sektöründeki deneyimimizle, katalog ve monografi hizmetleri, editörlük, redaksiyon, çeviri ve sanat yazarlığı gibi içeriklerle sizlere hizmet sunuyoruz.`,
  },
  {
    title: 'Kültür, Sanat ve Tasarım Danışmanlığı',
    description: `Yaratıcı endüstrilerdeki hızla değişen dünya koşullarına uyum sağlamak için kurum ve bireylere 360 derece çözüm ve hizmet sunmaktayız.`,
  },
  {
    title: 'Proje Yönetimi',
    description: `Uzman ekibimiz, belirlenen kriterlere uygun olarak süreç yönetimi, beceri ve bilgi yönetimi sağlayarak projeleri zamanında yürütür.`,
  },
  {
    title: 'Küratöryel Hizmetler',
    description: `Ticari ve kar amacı gütmeyen kurumlara, özel koleksiyonlara, arşivlere ve kütüphanelere küratörlük hizmeti sunmaktayız.`,
  },
  {
    title: 'Müzayede',
    description: `Sanat ekosisteminde önemli bir rol oynayan müzayedeler, butik müzayedelerle gerçekleştirilmektedir.`,
  },
  {
    title: 'Sanatçı Temsiliyeti',
    description: `Yeni nesil galericilik ekolüyle, görsel sanatlar alanında çalışan sanatçılara temsiliyet, sergileme, pazarlama ve kariyer yönetimi hizmetleri sunuyoruz.`,
  },
  {
    title: 'Strateji',
    description: `Hızla değişen dünyada sürdürülebilirlik ve büyüme hedefleyen sektörler için strateji geliştirmek önemlidir. Sanat ortamı ve aktörleri için stratejik planlamalar yapıyoruz.`,
  },
  {
    title: 'Yeni Nesil PR Hizmetleri',
    description: `Markanızı dijitalde öne çıkarmak için strateji danışmanlığı, influencer marketing, dijital PR ve online itibar yönetimi hizmetleri sunuyoruz.`,
  },
];

const Services = () => {
  return (
    <div className="services-container">
      <h1 className="main-title">Hizmetlerimiz</h1>
      <div className="services-list">
        {services.map((service, index) => (
          <div className="service-item" key={index}>
            <div className="service-title">
              <h2>{service.title}</h2>
            </div>
            <div className="service-description">
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;

