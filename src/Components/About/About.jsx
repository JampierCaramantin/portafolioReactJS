import React from "react";
import "./About.css";
import foto from "../../assets/foto.png";

const About = () => {
  return (
    <div className="about-details" id="about">
      <div className="circle-bg"></div>
      <img src={foto} alt="Foto jampier About" />
      <div className="about-infos">
        <h1>Sobre mí</h1>
        <p className="description">
          Soy estudiante de Ingeniería de Sistemas con pasión por el desarrollo
          web y la creación de soluciones tecnológicas. He desarrollado una
          página web para una empresa de importaciones, diseñado una aplicación
          web de geolocalización para optimizar los procesos en mi lugar de
          trabajo, he creado varios sitios web como parte de mi aprendizaje y
          mejora continua. Siempre estoy en busca de nuevas oportunidades para
          crecer como desarrollador, aprender nuevas tecnologías y contribuir
          con mis habilidades a proyectos innovadores.
        </p>
        <div className="experience-section">
            <div className="experience">
                <i className="fas fa-plus"></i>
                <span>2</span>
                <p>Años de experiencia</p>
            </div>
            <div className="experience">
                <i className="fas fa-plus"></i>
                <span>20</span>
                <p>Proyectos realizados</p>
            </div>
            <div className="experience">
                <i className="fas fa-plus"></i>
                <span>5</span>
                <p>Trabajos profesionales</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;
