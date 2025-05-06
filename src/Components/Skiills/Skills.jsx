import "./Skills.css";

const Skills = () => {
  return (
    <div className="skills" id="skills">
      <h1> Mis Habilidades</h1>
      <div className="skills-base">
        <div className="skills-box">
          <i className="fas fa-laptop-code"></i>
          <h3>Desarrollo Web</h3>
          <p>
            Como desarrollador web, me especializo en crear interfaces modernas,
            funcionales y responsivas que brindan una excelente experiencia al
            usuario. Tengo experiencia trabajando con tecnologías como HTML,
            CSS, JavaScript y frameworks como Angular. Me enfoco en escribir
            código limpio, escalable y optimizado, y disfruto transformar ideas
            en soluciones web interactivas y bien estructuradas. Siempre estoy
            aprendiendo nuevas herramientas y mejores prácticas para mantenerme
            actualizado y seguir creciendo como profesional.
          </p>
        </div>
        <div className="skills-box">
          <i className="fas fa-drafting-compass"></i>
          <h3>Diseño UI/UX</h3>
          <p>
            Me apasiona diseñar experiencias digitales centradas en el usuario,
            combinando funcionalidad y estética para crear interfaces intuitivas
            y atractivas. En mi proceso de diseño UI/UX, me enfoco en entender
            las necesidades reales de los usuarios, crear flujos de navegación
            claros y aplicar principios de diseño visual coherentes con la
            identidad del producto. Utilizo herramientas como Figma para
            prototipar y validar ideas rápidamente, asegurando una experiencia
            fluida en diferentes dispositivos. Busco siempre el equilibrio entre
            lo visual y lo funcional para lograr productos usables y agradables
          </p>
        </div>
        <div className="skills-box">
          <i className="fab fa-react"></i>
          <h3>Desarrollo Web</h3>
          <p>
            Desarrollo aplicaciones web dinámicas y escalables utilizando React,
            aprovechando su enfoque basado en componentes para construir
            interfaces reutilizables y eficientes. Me gusta trabajar con
            estados, hooks y rutas para crear experiencias de usuario fluidas y
            rápidas. Además, integro librerías modernas como React Router, Axios
            y Tailwind CSS para potenciar el rendimiento y el diseño visual de
            los proyectos. Siempre busco escribir código limpio y modular,
            siguiendo buenas prácticas para asegurar la mantenibilidad y
            evolución del software.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
