import React from 'react';
import styles from './Catalogo.module.css';

// Funciones mínimas para evitar errores
function irAInicio() {
  console.log("Ir a inicio");
}
function toggleFiltros() {
  console.log("Abrir/cerrar filtros");
}
function toggleMenu() {
  console.log("Abrir/cerrar carrito");
}
function abrirModal(img) {
  console.log("Abrir modal con imagen:", img.src);
}
function cerrarModal(e) {
  console.log("Cerrar modal");
}
function agregarAlCarrito(producto, precio) {
  console.log(`Agregado al carrito: ${producto} - $${precio}`);
}
function filtrarMates(tipo) {
  console.log("Filtrar mates:", tipo);
}

function Catalogo() {
  return (
    <div id="pantalla-catalogo" className={styles.catalogo}>
      <header className={styles.headerTienda}>
        <h2>Nuestro Catálogo</h2>
      </header>

      <div className={styles.contenedorLogoEsquina}>
        <img src="logo.png" className={styles.logoMarca} onClick={() => irAInicio()} />
      </div>

      {/* Botón menú filtros */}
      <div className={styles.menuFiltrosIcono} onClick={() => toggleFiltros()}>
        <span></span><span></span><span></span>
      </div>

      {/* Botón flotante carrito */}
      <button className={styles.botonFlotante} onClick={() => toggleMenu()}>
        🛒 Mi Carrito
      </button>

      {/* Sidebar filtros */}
      <div id="sidebar-filtros" className={styles.sidebarFiltros}>
        <button className={styles.cerrarFiltros} onClick={() => toggleFiltros()}>×</button>
        <ul>
          <li onClick={() => filtrarMates('todos')}>Todos</li>
          <li onClick={() => filtrarMates('imperial')}>Mates Imperiales</li>
          <li onClick={() => filtrarMates('camionero')}>Mates Camioneros</li>
          <li onClick={() => filtrarMates('torpedo')}>Mates Torpedo</li>
          <li onClick={() => filtrarMates('bombillas')}>Bombillas</li>
          <li onClick={() => filtrarMates('termos')}>Termos</li>
          <li onClick={() => filtrarMates('yerbas')}>Yerbas</li>
        </ul>
      </div>

      {/* Grilla de productos */}
      <section className={styles.grillaProductos}>
        <div className={`${styles.tarjetaMate} imperial`}>
            <img src="mate1.jpeg" alt="Mate Imperial virola de alpaca cincelada" onClick={(e) => abrirModal(e.target)} />
            <h3>Mate Imperial virola de alpaca cincelada</h3>
            <p>De calabaza forrado en cuero con costura uruguaya. Fleje de alpaca. Colores negro, marrón y borravino</p>
            <span className={styles.precio}>$46.400</span>
            <button onClick={() => agregarAlCarrito('Mate Imperial', 46400)}>Agregar al carrito</button>
        </div>
        <div className={`${styles.tarjetaMate} imperial`}>
            <img src="mateimpliso.jpeg" alt="Mate Imperial virola de alpaca lisa" onClick={(e) => abrirModal(e.target)} />
            <h3>Mate Imperial virola de alpaca lisa</h3>
            <p>De calabaza forrado en cuero con costura uruguaya. Fleje de alpaca. Colores negro, marrón y borravino</p>
            <span className={styles.precio}>$43.200</span>
            <button onClick={() => agregarAlCarrito('Mate Imperial', 43200)}>Agregar al carrito</button>
        </div>
        <div className={`${styles.tarjetaMate} imperial`}>
            <img src="impafa.jpeg" alt="Mate Imperial AFA" onClick={(e) => abrirModal(e.target)} />
            <h3>Mate Imperial AFA</h3>
            <p>-De calabaza forrado en cuero con costura uruguaya - Aro de bronce - Escudo AFA de bronce - Virola de alpaca cincelada </p>
            <span className={styles.precio}>$67.200</span>
            <button onClick={() => agregarAlCarrito('Mate Imperial', 67200)}>Agregar al carrito</button>
        </div>
        <div className={`${styles.tarjetaMate} camionero`}>
            <img src="foto-mate.jpeg" alt="Mate Camionero" onClick={(e) => abrirModal(e.target)} />
            <h3>Mate Camionero</h3>
            <p>Cuero legítimo, base reforzada.</p>
            <span className={styles.precio}>$18.000</span>
            <button onClick={() => agregarAlCarrito('Mate Camionero', 18000)}>Agregar al carrito</button>
        </div>  
        <div className={`${styles.tarjetaMate} camionero`}>
            <img src="matedealp.jpeg" alt="Mate Camionero de Alpaca" onClick={(e) => abrirModal(e.target)} />
            <h3>Mate Camionero de Alpaca</h3>
            <p>Costura uruguaya, virola de alpaca cincelada</p>
            <span className={styles.precio}>$22.000</span>
            <button onClick={() => agregarAlCarrito('Mate Camionero de Alpaca', 22000)}>Agregar al carrito</button>
        </div>
        <div className={`${styles.tarjetaMate} criollo`}>
            <img src="matecriollo.jpeg" alt="Mate Criollo" onClick={(e) => abrirModal(e.target)} />
            <h3>Mate Criollo</h3>
            <p>De calabaza pulida con base de cuero crudo cocida en tiento</p>
            <span className={styles.precio}>$22.000</span>
            <button onClick={() => agregarAlCarrito('Mate Criollo', 22000)}>Agregar al carrito</button>
        </div>    
        <div className={`${styles.tarjetaMate} criollo`}>
            <img src="matecriolloalp.jpeg" alt="Mate Criollo con virola de alpaca" onClick={(e) => abrirModal(e.target)} />
            <h3>Mate Criollo con virola de alpaca</h3>
            <p>De calabaza pulida con base de cuero crudo cocida en tiento</p>
            <span className={styles.precio}>$22.000</span>
            <button onClick={() => agregarAlCarrito('Mate Criollo con virola de alpaca', 22000)}>Agregar al carrito</button>
        </div>     
        <div className={`${styles.tarjetaMate} camionero`}>
            <img src="matedeb.jpeg" alt="Mate Camionero de Bronce" onClick={(e) => abrirModal(e.target)} />
            <h3>Mate Camionero de Bronce</h3>
            <p>Costura uruguaya, virola de alpaca cincelada</p>
            <span className={styles.precio}>$22.000</span>
            <button onClick={() => agregarAlCarrito('Mate Camionero de Bronce', 22000)}>Agregar al carrito</button>
        </div>
        <div className={`${styles.tarjetaMate} torpedo`}>
            <img src="topliso.jpeg" alt="Mate Mate Torpedo con virola de acero lisa" onClick={(e) => abrirModal(e.target)} />
            <h3>Mate Mate Torpedo con virola de acero lisa</h3>
            <p>De calabaza forrado en cuero con costura uruguaya. Colores negro, marron y borravino</p>
            <span className={styles.precio}>$31.500</span>
            <button onClick={() => agregarAlCarrito('Mate Mate Torpedo con virola de acero lisa', 31500)}>Agregar al carrito</button>
        </div>
        <div className={`${styles.tarjetaMate} torpedo`}>
            <img src="topcincelado.jpeg" alt="Mate Mate Torpedo con virola de acero cincelada" onClick={(e) => abrirModal(e.target)} />
            <h3>Mate Mate Torpedo con virola de acero cincelada</h3>
            <p>De calabaza forrado en cuero con costura uruguaya. Colores negro, marron y borravino</p>
            <span className={styles.precio}>$45.600</span>
            <button onClick={() => agregarAlCarrito('Mate Mate Torpedo con virola de acero cincelada', 45600)}>Agregar al carrito</button>
        </div>
      </section>

      {/* Modal de imagen */}
      <div id="modal-imagen" className={styles.modal} onClick={(e) => cerrarModal(e)}>
        <span className={styles.cerrarModal}>&times;</span>
        <img className={styles.contenidoModal} id="imagen-grande" />
        <div id="descripcion-modal"></div>
      </div>
    </div>
  );
}

export default Catalogo;
