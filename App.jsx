import React from 'react';

// Importo todos los componentes
import Inicio from './components/Inicio';
import Catalogo from './components/Catalogo';
import Pago from './components/Pago';
import Sidebar from './components/Sidebar';          // menú hamburguesa de categorías
import SidebarCarrito from './components/SidebarCarrito'; // carrito lateral

function App() {
  console.log("Renderizando App");
  return (
    <div>
      {/* Barra lateral de categorías */}
      <Sidebar />

      {/* Barra lateral del carrito */}
      <SidebarCarrito />

      {/* Pantallas principales */}
      <Inicio />
      <Catalogo />
      <Pago />
    </div>
  );
}

export default App;
