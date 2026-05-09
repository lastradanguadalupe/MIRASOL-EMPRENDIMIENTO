import React from 'react';
import styles from './Inicio.module.css';

// Funciones mínimas
function irAInicio() {
  console.log("Ir a inicio");
}
function irACatalogo() {
  console.log("Ir a catálogo");
}
function toggleRedesFijas(e) {
  console.log("Mostrar/ocultar redes sociales");
}

function Inicio() {
  console.log("Renderizando Inicio");
  return (
    <div id="pantalla-inicio" className={styles.inicio}>
      <section className={styles.sliderContainer}>
        <div className={`${styles.slide} ${styles.active}`}>
          <div
            className={styles.slideImg}
            style={{ backgroundImage: "url(../assets/fondo.png)" }}
          ></div>
          <div className={styles.slideContent}>
            <button className={styles.btnSlider} onClick={() => irACatalogo()}>
              Ver Catálogo
            </button>
          </div>
        </div>
      </section>

      <nav className={styles.navbarPrincipal}>
        <div className={styles.enlacesNav}>
          <a href="#" onClick={() => irAInicio()}>INICIO</a>
          <a href="#" onClick={() => irACatalogo()}>SOBRE NOSOTROS</a>

          <div className={styles.dropdownNav}>
            <span
              className={styles.btnContactoNav}
              onClick={(e) => toggleRedesFijas(e)}
            >
              CONTACTO
            </span>
            <div id="redes-fijas" className={styles.redesNavLista}>
              <a href="https://wa.me/543875032696" target="_blank">WhatsApp</a>
              <a href="https://instagram.com/mirasol.sla" target="_blank">Instagram</a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Inicio;
