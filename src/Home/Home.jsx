import React from 'react'
import './Home.css'
import Hero from '../Components/Hero/Hero';
import About from '../Components/About/About';
import Skills from '../Components/Skiills/Skills';
import Portafolio from '../Components/Portafolio/Portafolio';
import ContactForm from '../Components/ContacForm/ContactForm';

const Home = () => {
  return (
    <div className='home'>
      <Hero />
      <About />
      <Skills />
      <Portafolio />
      <ContactForm />
    </div>
  )
}

export default Home

// https://www.youtube.com/watch?v=gWVSIvl7fP4&list=PL1sZAh2_s8OQ53Gp9h1puwFufK46jV-3O&index=7
