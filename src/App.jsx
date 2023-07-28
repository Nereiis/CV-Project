//Importamos toda la biblioteca de useState
import { useState } from 'react';

import './App.css'

//Importamos el contenido del CV y todos sus archivos 
// import About from './components/About';
import Hero from './components/Hero';
import Education from './components/Education';
import Experience from './components/Experience';
import More from './components/More';
import About from './components/About'
import Volunteer from './components/Volunteer';
import { CV } from './CV/CV';
//De CV sacamos los elementos principales
const { hero, education, experience, languages, habilities, volunteer} = CV;

function App() {
  //Creamos la función para que se muestre la información de Experiencia o de Educación
  //Primero definimos la constante que va a recibir los dos valores, uno nos mostrará la Educación y el otro la ocultara, por defecto muestra la educación
  const [showEducation, setShowEducation] = useState(true);

  //Igual que con education y experience creamos la constante para about y volunteer
  const [showAbout, setShowAbout] = useState(true);

  //Creamos la función para mostrar la información restante al hacer click en el menu burger
  //Primero definimos la constante y la función para mostrar
  const [showMore ,setShowMore] = useState(false);
  //Lo definimos en false para que al principio no muestre nada
  const handleButtonClick = () => {
    setShowMore(!showMore);
  }

  return (
    <div className = 'App'>
     <section className = 'button-menu'>
        <button className = 'menu' onClick ={handleButtonClick}>
          <img className = 'img-menu' src = 'https://www.pngfind.com/pngs/m/100-1008434_load-more-icon-png-png-download-down-chevron.png' alt = 'Menu' />
        </button>
        <button>
          <a href='https://github.com/Nereiis' target='_blank' rel='noopener noreferrer'>
          <img className='img-menu' src='https://cdn-icons-png.flaticon.com/512/25/25231.png' alt='GitHub' />
          </a>
        </button>
      </section>
      
      {showMore && <More languages = {languages} habilities = {habilities} />}
      {/* Renderiza el componente Hero pasando el objeto hero como prop */}
      <Hero hero={hero} />
      
      <div className = 'button-container'>
        {/* Creamos el botón para Education */}
        {/* El atributo añadido active hace el giro */}
        <button className={`button-exp ${showEducation ? 'active' : ''}`} onClick={() => setShowEducation(true)}> Education </button>
        {/* Creamos el botón de Experience que ocultara la información de Education */}
        <button className={`button-exp ${!showEducation ? 'active' : ''}`} onClick={() => setShowEducation(false)}> Experience </button>
      </div>
      
      {/* Creamos la función para variar entre Exp y Edc */}
      <div className ={`content-container ${showEducation ? 'flip' : ''}`}>
        {/* Condición: Si showEducation es verdadero */}
        {showEducation ? (
          //Renderiza el componente Education pasando el array education como prop
          <Education education = {education} />
        ) : (
          // Renderiza el componente Experience pasando el array experience como prop
          <Experience experience = {experience} />
        )}
      </div>
      <div className = 'button-container'>
      <button className={`button-exp ${showAbout ? 'active' : ''}`} onClick={() => setShowAbout(true)}> About Me </button>
      <button className={`button-exp ${!showAbout ? 'active' : ''}`} onClick={() => setShowAbout(false)}> Volunteer </button>
      </div>
      <div className ={`content-container ${showAbout ? 'flip' : ''}`}>
        {/* Condición: Si showEducation es verdadero */}
        {showAbout ? (
          //Renderiza el componente Education pasando el array education como prop
          <About hero = {hero} />
        ) : (
          // Renderiza el componente Experience pasando el array experience como prop
          <Volunteer volunteer = {volunteer} />
        )}
      </div>
    </div>
  );
}

export default App
