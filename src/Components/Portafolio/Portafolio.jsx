import "./Portfolio.css";
import landingAR from "../../assets/landingAR.png";
import landingEB from "../../assets/landingEB.png";
import landingTW from "../../assets/landingTW.png";
import poquedex from "../../assets/poquedex.png";

const portfolioItems = [
  {
    id: 1,
    img: landingAR,
    title: "Landing Page crevi",
    description:
      "Desarrollado con html CSS Y JavaScript, es una landing page para una empresa de Construcción",
    demoLink:
      "https://jampiercaramantin.github.io/portafolio/pages/CREVI/index.html",
  },
  {
    id: 2,
    img: landingEB,
    title: "Landing Page estudio de Abogados",
    description:
      "Desarrollado con html CSS Y JavaScript, es una landing page para un estudio de abogados",
    demoLink:
      "https://jampiercaramantin.github.io/portafolio/pages/Abogados/index.html",
  },
  {
    id: 3,
    img: landingTW,
    title: "Landing Page tweentyx",
    description:
      "Desarrollado con html CSS Y JavaScript, es una landing page para una empresa de importaciones",
    demoLink:
      "https://tweentyx.com/",
  },
  {
    id: 4,
    img: poquedex,
    title: "Poquedex",
    description:
      "Desarrollado con html CSS Y JavaScript, poquedex es una app para ver pokemones y sus habilidades usanda la api de pokeapi",
    demoLink:
      "https://jampiercaramantin.github.io/portafolio/pages/api_pokemon/index.html",
  },
];

const Portafolio = () => {
  return (
  <div className="portafolio" id="portfolio">
    <h1>Portafolio</h1>
    <div className="portafolio-container">
        {portfolioItems.map((item)=>(
            <div className="portafolio-card" key={item.id}>
                <img src={item.img} alt={item.title} className="portfolio-image"/>
                <div className="portfolio-content">
                    <h3>{ item.title }</h3>
                    <p>{ item.description }</p>
                    <a href={ item.demoLink } target="_blank" rel="noopener noreferrer" className="demo-button">
                        ver demo
                    </a>
                </div>
            </div>
            
        ))}
    </div>
  </div>
);
};

export default Portafolio;
