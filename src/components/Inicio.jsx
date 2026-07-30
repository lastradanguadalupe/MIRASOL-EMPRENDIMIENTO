import React, { useState } from 'react'; 
import { useNavigate } from 'react-router-dom'; 
import styles from './Inicio.module.css';

function Inicio() {
  const [mostrarContacto, setMostrarContacto] = useState(false);
  const navigate = useNavigate(); 

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.contenedorPadre}>
      
      {/* PRIMERA PANTALLA: INICIO (Ocupa el 100% del monitor) */}
      <div id="pantalla-inicio" className={styles.inicio}>
        
        <nav className={styles.navbarPrincipal}>
          <div className={styles.enlacesNav}>
            <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('pantalla-inicio'); }}>INICIO</a>
            <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('sobre-nosotros'); }}>SOBRE NOSOTROS</a>

            <div className={styles.dropdownNav}>
              <span className={styles.btnContactoNav} onClick={() => setMostrarContacto(!mostrarContacto)}>
                CONTACTO
              </span>
              
              {mostrarContacto && (
                <div className={styles.redesNavLista}>
                  <a href="https://wa.me/543875032696" target="_blank" rel="noreferrer">
                    WhatsApp
                  </a>
                  <a href="https://instagram.com/mirasol.sla" target="_blank" rel="noreferrer">
                    Instagram
                  </a>
                </div>
              )}
            </div>
          </div>
        </nav>

        <div className={styles.sliderContainer}>
          <div className={styles.slide}>
            <div
              className={styles.slideImg}
              style={{ backgroundImage: "url(./assets/fondo.png)" }}
            ></div>
            <div className={styles.slideContent}>
              <button className={styles.btnSlider} onClick={() => navigate('/catalogo')}>
                Ver Catálogo
              </button>
            </div>
          </div>
        </div>

        <div className={styles.divisorOnda}>
          <svg viewBox="0 0 1440 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,60 C320,110 1120,0 1440,55 L1440,100 L0,100 Z" />
          </svg>
        </div>
      </div>

     
    <section id="sobre-nosotros" className={styles.seccionSobreNosotros}>
      <div className={styles.contenedorHistoria}>
    
    {/* Columna Izquierda: Texto */}
    <div className={styles.contenidoSobreNosotros}>
      <span className={styles.eyebrow}>Tradición Salteña</span>
      <h2>Nuestra Historia</h2>
      <p>
        En Mirasol, seleccionamos cada pieza pensando en la tradición de nuestra tierra. 
        Trabajamos con alpaca cincelada y cueros legítimos para ofrecerte mates imperiales y premium 
        con una terminación única, directo desde Salta.
      </p>
    </div>

    {/* Columna Derecha: Imagen proporcional */}
    <div className={styles.columnaImagenHistoria}>
      <div className={styles.marcoImagen}>
        <img 
          src="./assets/posfon2.jpeg" 
          alt="Artesanía y tradición Mirasol" 
          className={styles.imagenHistoria}
        />
      </div>
    </div>

    </div>
  </section>
    </div>
  );
}

export default Inicio;