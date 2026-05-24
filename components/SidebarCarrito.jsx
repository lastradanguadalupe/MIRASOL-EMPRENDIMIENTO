import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './SidebarCarrito.module.css';

function SidebarCarrito({ isOpen, onClose, carrito, onEliminarItem }) {
  const navigate = useNavigate();

  const totalPrecio = carrito.reduce((acumulador, item) => acumulador + (item.precio * item.cantidad), 0);

  return (
    <div className={`${styles.sidebarCarrito} ${isOpen ? styles.open : ''}`}>
      <button className={styles.cerrarCarrito} onClick={onClose}>&times;</button>
      
      <h2>Tu Carrito</h2>

      <div className={styles.contenidoCarrito}>
        {carrito.length === 0 ? (
          <p className={styles.carritoVacio}>Tu carrito está vacío. ¡Elegí un buen mate para empezar!</p>
        ) : (
          <ul className={styles.listaProductos}>
            {carrito.map((item) => (
              <li key={item.id} className={styles.itemCarrito}>
                <div className={styles.infoItem}>
                  <h4>{item.titulo}</h4>
                  <p>{item.cantidad} x ${item.precio.toLocaleString('es-AR')}</p>
                </div>
                
                {/* Contenedor derecho: subtotal + botón de borrar */}
                <div className={styles.accionesItem}>
                  <span className={styles.subtotalItem}>
                    ${(item.precio * item.cantidad).toLocaleString('es-AR')}
                  </span>
                  
                  {/* BOTÓN DE BORRAR: Ejecuta la función pasando el id del mate */}
                  <button 
                    className={styles.btnBorrar} 
                    onClick={() => onEliminarItem(item.id)}
                    title="Eliminar del carrito"
                  >
                    &times; {/* Podés cambiarlo por 🗑️ si preferís el tachito */}
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      {carrito.length > 0 && (
        <div className={styles.footerCarrito}>
          <div className={styles.totalContenedor}>
            <span>Total:</span>
            <span className={styles.precioTotal}>${totalPrecio.toLocaleString('es-AR')}</span>
          </div>
          <button 
            className={styles.btnConfirmar} 
            onClick={() => { onClose(); navigate('/pago'); }}
          >
            Confirmar Compra
          </button>
        </div>
      )}
    </div>
  );
}

export default SidebarCarrito;
