import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useLocation } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "../styles/ProjectsSection.css";

const projects = [
  {
    name: "Buluştuğumuz Yer Burası",
    description: "Bu proje, bir e-ticaret platformu için geliştirilmiş özel bir tasarım içerir.",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZv-XXiN6cxaoaHrCKGnV_l_oVBo1bqK6XAw&s",
  },
  {
    name: "Art And Wine",
    description: "Bu proje, bir sosyal medya uygulamasına entegre edilmiş yenilikçi özellikler sunar.",
    imageUrl: "https://pbs.twimg.com/media/FEFDvJdWYAAbMIt?format=jpg&name=large",
  },
  {
    name: "UNTITLED 1.0",
    description:
      "6-26 Kasım tarihleri arasında sizlerle buluşacak olan, dönemimiz güncel Türk sanatının seçkin örneklerinin yer aldığı seçkide eserler sergilenecek.",
    imageUrl: "https://pbs.twimg.com/media/FD1SlpeWYAQo2gI?format=jpg&name=large",
  },
];

const ProjectsSection = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div
      className="projects-slide-container"
      style={{ marginTop: isHomePage ? "1%" : "10%" }}
    >
      <h3 className="section-title">Projelerimiz</h3>
      <Swiper
        navigation
        pagination={false}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        modules={[Navigation, Pagination, Autoplay]}
        className="my-5"
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index} className="p-4">
            <div className="project-slide-content">
              <h3 className="project-title">{project.name}</h3>
              <div className="project-content">
                <img
                  src={project.imageUrl}
                  alt={project.name}
                  className="project-image"
                />
                <p className="project-description">{project.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProjectsSection;

