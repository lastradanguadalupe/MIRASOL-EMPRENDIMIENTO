import React, { useState } from 'react';
import styles from './Sidebar.module.css';

function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Botón hamburguesa */}
      <button className={styles.hamburger} onClick={() => setOpen(!open)}>
        ☰
      </button>

      {/* Panel lateral */}
      <aside className={`${styles.sidebar} ${open ? styles.open : ''}`}>
        <ul>
          <li><a href="#imperial">Mate Imperial</a></li>
          <li><a href="#camionero">Mate Camionero</a></li>
          <li><a href="#torpedo">Mate Torpedo</a></li>
          <li><a href="#termo">Termo</a></li>
          <li><a href="#bombilla">Bombilla</a></li>
        </ul>
      </aside>
    </>
  );
}

export default Sidebar;

