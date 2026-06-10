import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Catalogo.module.css';
import SidebarCarrito from './SidebarCarrito'; 

const LISTA_PRODUCTOS = [
  {
    id: 1,
    categoria: 'imperial',
    img: './assets/mate1.jpeg',
    titulo: 'Mate Imperial virola de alpaca cincelada',
    desc: 'De calabaza forrado en cuero con costura uruguaya. Fleje de alpaca. Colores negro, marrón y borravino.',
    precio: 46400
  },
  {
    id: 2,
    categoria: 'imperial',
    img: './assets/mateimpliso.jpeg',
    titulo: 'Mate Imperial virola de alpaca lisa',
    desc: 'De calabaza forrado en cuero con costura uruguaya. Fleje de alpaca. Colores negro, marrón y borravino.',
    precio: 43200
  },
  {
    id: 3,
    categoria: 'imperial',
    img: './assets/impafa',
    titulo: 'Mate Imperial AFA',
    desc: 'De calabaza forrado en cuero con costura uruguaya. Aro de bronce. Escudo AFA de bronce. Virola de alpaca.',
    precio: 67200
  },
  {
    id: 4,
    categoria: 'camionero',
    img: './assets/foto-mate.jpeg',
    titulo: 'Mate Camionero Premium',
    desc: 'Cuero legítimo, base reforzada con costura uruguaya ideal para el día a día.',
    precio: 18000
  },
  {
    id: 5,
    categoria: 'camionero',
    img: './assets/matedealp.jpeg',
    titulo: 'Mate Camionero de Alpaca',
    desc: 'Costura uruguaya, virola de alpaca cincelada.',
    precio: 22000
  },
  {
    id: 6,
    categoria: 'criollo',
    img: './assets/matecriollo.jpeg',
    titulo: 'Mate Criollo',
    desc: 'De calabaza pulida con base de cuero crudo cocida en tiento.',
    precio: 22000
  },
  {
    id: 7,
    categoria: 'torpedo',
    img: './assets/topliso.jpeg',
    titulo: 'Mate Torpedo virola de acero lisa',
    desc: 'De calabaza forrado en cuero con costura uruguaya. Colores negro, marrón y borravino.',
    precio: 31500
  }
];


function Catalogo({ carrito, onAgregarProducto, onEliminarProducto }) {
  const navigate = useNavigate();
  const [filtrosAbiertos, setFiltrosAbiertos] = useState(false);
  const [categoriaActiva, setCategoriaActiva] = useState('todos');
  const [carritoAbierto, setCarritoAbierto] = useState(false);

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
    ? LISTA_PRODUCTOS 
    : LISTA_PRODUCTOS.filter(p => p.categoria === categoriaActiva);

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
        </ul>
      </div>

      {/* Grilla de productos dinámica */}
      <section className={styles.grillaProductos}>
        {productosFiltrados.map((producto) => (
          <div key={producto.id} className={styles.tarjetaMate}>
              <img src={producto.img} alt={producto.titulo} onClick={(e) => abrirModal(e.target)} />
              <h3>{producto.titulo}</h3>
              <p>{producto.desc}</p>
              <span className={styles.precio}>${producto.precio.toLocaleString('es-AR')}</span>
              
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