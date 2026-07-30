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
      {carrito.length > 0 && (
        <p className={styles.contadorItems}>
          {carrito.reduce((acc, item) => acc + item.cantidad, 0)} producto(s)
        </p>
      )}

      <div className={styles.contenidoCarrito}>
        {carrito.length === 0 ? (
          <div className={styles.carritoVacio}>
            <span className={styles.iconoVacio}>🧉</span>
            <p>Tu carrito está vacío.<br />¡Elegí un buen mate para empezar!</p>
          </div>
        ) : (
          <ul className={styles.listaProductos}>
            {carrito.map((item) => (
              <li key={item.id} className={styles.itemCarrito}>
                <img
                  className={styles.miniaturaItem}
                  src={item.imagen_url || './assets/placeholder.jpeg'}
                  alt={item.nombre}
                  onError={(e) => { e.target.src = './assets/placeholder.jpeg'; }}
                />
                <div className={styles.infoItem}>
                  <h4>{item.nombre}</h4>
                  <p>{item.cantidad} x ${item.precio.toLocaleString('es-AR')}</p>
                </div>
                
                
                <div className={styles.accionesItem}>
                  <span className={styles.subtotalItem}>
                    ${(item.precio * item.cantidad).toLocaleString('es-AR')}
                  </span>
                  
                  
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