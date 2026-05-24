import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Inicio from './src/components/Inicio';
import Catalogo from './src/components/Catalogo';
import Pago from './src/components/Pago';

function App() {
  // ESTADO GLOBAL DEL CARRITO
  const [carrito, setCarrito] = useState([]);

  // Función global para añadir productos
  const agregarAlCarrito = (producto) => {
    setCarrito((carritoActual) => {
      // Si el producto ya existe en el carrito, le sumamos 1 a la cantidad
      const existe = carritoActual.find(item => item.id === producto.id);
      if (existe) {
        return carritoActual.map(item => 
          item.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item
        );
      }
      // Si es nuevo, lo agregamos con cantidad 1
      return [...carritoActual, { ...producto, cantidad: 1 }];
    });
  };
  const eliminarDelCarrito = (idProducto) => {
    setCarrito((carritoActual) => 
      carritoActual.filter(item => item.id !== idProducto)
    );
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        
        {/* Le pasamos la nueva función al catálogo */}
        <Route path="/catalogo" element={
          <Catalogo 
            carrito={carrito} 
            onAgregarProducto={agregarAlCarrito} 
            onEliminarProducto={eliminarDelCarrito} /* <--- Pasamos la prop */
          />
        } />

        <Route path="/pago" element={<Pago carrito={carrito} />} />
      </Routes>
    </Router>
  );
}

export default App;
