import "./Hero.css";
import foto from "../../assets/foto.png";

const Hero = () => {
  return (
    <div className="hero" id="hero">
      <div className="text-container">
        <span>Hola Soy, </span>
        <h1>Jampier Caramantin</h1>
        <p>
        Mi pasión por la programación web y mi conjunto de habilidades en JavaScript, Reactjs y Node.js me permiten crear aplicaciones web dinámicas y atractivas.
        </p>
        <a href="https://wa.me/51938622543" target="_blank" className="btn">
          Contáctame
        </a>
      </div>
      <div className="image-container">
        <div className="circle-bg"></div>
        <img src={foto} alt="foto jampier" className="foto" />
      </div>
    </div>
  );
};

export default Hero;
