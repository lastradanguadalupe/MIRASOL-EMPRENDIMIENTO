import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Catalogo.module.css';
import SidebarCarrito from './SidebarCarrito';
import { supabase } from "./lib/supabaseClient";

function Catalogo({ carrito, onAgregarProducto, onEliminarProducto }) {
  const navigate = useNavigate();
  const [filtrosAbiertos, setFiltrosAbiertos] = useState(false);
  const [categoriaActiva, setCategoriaActiva] = useState('todos');
  const [carritoAbierto, setCarritoAbierto] = useState(false);

  
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  
  useEffect(() => {
    async function traerProductos() {
      setCargando(true);
      const { data, error } = await supabase
        .from('productos')
        .select('*');

      if (error) {
        console.error('Error trayendo productos:', error);
        setError(error.message);
      } else {
        setProductos(data);
      }
      setCargando(false);
    }

    traerProductos();
  }, []);

  const totalItemsEnCarrito = carrito.reduce((acumulador, item) => acumulador + item.cantidad, 0);

  function filtrarMates(tipo) {
    setCategoriaActiva(tipo);
    setFiltrosAbiertos(false);
  }

  function toggleMenu() {
    setCarritoAbierto(true);
  }

  function abrirModal(img) { console.log("Abrir modal", img.src); }

  
  const productosFiltrados = categoriaActiva === 'todos'
    ? productos
    : productos.filter(
        (p) => p.atributos?.tipo?.toLowerCase() === categoriaActiva
      );

  if (cargando) {
    return <p>Cargando productos...</p>;
  }

  if (error) {
    return <p>Hubo un error cargando los productos: {error}</p>;
  }

  return (
    <div id="pantalla-catalogo" className={styles.catalogo}>


      <SidebarCarrito
        isOpen={carritoAbierto}
        onClose={() => setCarritoAbierto(false)}
        carrito={carrito}
        onEliminarItem={onEliminarProducto}
      />


      <div className={styles.menuFiltrosIcono} onClick={() => setFiltrosAbiertos(true)}>
        <span></span><span></span><span></span>
      </div>

      <header className={styles.headerTienda}>
        <h2>Nuestro Catálogo</h2>
      </header>


      <button className={styles.botonFlotante} onClick={toggleMenu}>
        🛒 Mi Carrito ({totalItemsEnCarrito})
      </button>


      <div className={`${styles.sidebarFiltros} ${filtrosAbiertos ? styles.open : ''}`}>
        <button className={styles.cerrarFiltros} onClick={() => setFiltrosAbiertos(false)}>×</button>
        <ul>
          <li onClick={() => filtrarMates('todos')}>Todos los Modelos</li>
          <li onClick={() => filtrarMates('imperial')}>Mates Imperiales</li>
          <li onClick={() => filtrarMates('camionero')}>Mates Camioneros</li>
          <li onClick={() => filtrarMates('criollo')}>Mates Criollos</li>
          <li onClick={() => filtrarMates('torpedo')}>Mates Torpedo</li>
          <li className={styles.separadorFiltro}></li>
          <li onClick={() => filtrarMates('yerba')}>Yerbas</li>
          <li onClick={() => filtrarMates('termo')}>Termos</li>
        </ul>
      </div>

      {/* Grilla de productos dinámica, ahora con datos de Supabase */}
      <section className={styles.grillaProductos}>
        {productosFiltrados.map((producto) => (
          <div key={producto.id} className={styles.tarjetaMate}>
              <div className={styles.contenedorImagen}>
                {producto.atributos?.tipo && (
                  <span className={styles.badgeTipo}>{producto.atributos.tipo}</span>
                )}
                <img
                  src={producto.imagen_url || './assets/placeholder.jpeg'}
                  alt={producto.nombre}
                  onClick={(e) => abrirModal(e.target)}
                  onError={(e) => { e.target.onerror = null; e.target.src = './assets/placeholder.jpeg'; }}
                />
              </div>
              <h3>{producto.nombre}</h3>
              <p>{producto.descripcion}</p>
              <span className={styles.precio}>${Number(producto.precio).toLocaleString('es-AR')}</span>

              <button onClick={() => onAgregarProducto(producto)}>
                Agregar al carrito
              </button>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Catalogo;