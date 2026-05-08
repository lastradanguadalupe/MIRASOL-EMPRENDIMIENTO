import React from 'react';
import styles from './SidebarCarrito.module.css';

// Funciones mínimas
function toggleMenu() {
  console.log("Abrir/cerrar carrito");
}
function irAPago() {
  console.log("Ir a pantalla de pago");
}

function SidebarCarrito() {
  return (
    <div id="sidebar" className={styles.sidebar}>
      <button className={styles.cerrarBtn} onClick={() => toggleMenu()}>
        ×
      </button>

      <div className={styles.resumenCarrito}>
        <h3>Tu Pedido:</h3>
        <ul id="items-carrito"></ul>
        <p>
          <strong>
            Total: $<span id="total-precio">0</span>
          </strong>
        </p>

        <button
          className={styles.btnConfirmarCarrito}
          onClick={() => irAPago()}
        >
          Confirmar Compra
        </button>
      </div>
    </div>
  );
}

export default SidebarCarrito;
