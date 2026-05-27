import React, { useState } from 'react';
import styles from './Navbar.module.css';

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Mirasol</div>

      {/* Botón hamburguesa */}
      <button className={styles.hamburger} onClick={() => setOpen(!open)}>
        ☰
      </button>

      {/* Links */}
      <ul className={`${styles.links} ${open ? styles.open : ''}`}>
        <li><a href="#inicio">Inicio</a></li>
        <li><a href="#catalogo">Catálogo</a></li>
        <li><a href="#contacto">Contacto</a></li>
        <li><a href="#carrito">Mi Carrito</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
