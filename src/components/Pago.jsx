import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Pago.module.css';

function Pago({ carrito }) {
  const navigate = useNavigate();
  
  // Estado para el formulario
  const [datos, setDatos] = useState({
    nombre: '',
    telefono: '',
    direccion: '',
    metodo: 'Transferencia Bancaria'
  });

  
  const total = carrito.reduce((acc, item) => acc + (item.precio * item.cantidad), 0);

  const handleChange = (e) => {
    setDatos({ ...datos, [e.target.name]: e.target.value });
  };

  // FUNCIÓN MÁGICA: Arma el mensaje y abre WhatsApp
  const enviarPedidoFinal = () => {
    if (!datos.nombre || !datos.telefono || !datos.direccion) {
      alert("Por favor, completa todos los datos para el envío.");
      return;
    }

    // Armamos la lista de productos para el mensaje
    const listaProductos = carrito.map(item => `- ${item.cantidad}x ${item.titulo} ($${(item.precio * item.cantidad).toLocaleString('es-AR')})`).join('\n');
    
    const mensaje = `¡Hola Mirasol! 👋
Mi nombre es *${datos.nombre}*. Quisiera finalizar la siguiente compra:

*Detalle del pedido:*
${listaProductos}

*Total:* $${total.toLocaleString('es-AR')}
*Método de Pago:* ${datos.metodo}
*Dirección de entrega:* ${datos.direccion}
*Teléfono:* ${datos.telefono}`;

    const url = `https://wa.me/543875032696?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
  };

  return (
    <div className={styles.pagoContenedor}>
      <header className={styles.headerSimplificado}>
        <button className={styles.btnVolver} onClick={() => navigate('/catalogo')}>
          ← Volver al catálogo
        </button>
               
        
      </header>

    
    
      <main className={styles.cuerpoPago}>
        <div className={styles.cardPago}>
          
          
          <section className={styles.seccionFormulario}>
            <h2>Datos de Entrega</h2>
            <form className={styles.formulario}>
              <div className={styles.grupoInput}>
                <label>Nombre y Apellido</label>
                <input type="text" name="nombre" placeholder="Ej: Juan Pérez" onChange={handleChange} required />
              </div>
              <div className={styles.grupoInput}>
                <label>Teléfono</label>
                <input type="text" name="telefono" placeholder="Ej: 3875000000" onChange={handleChange} required />
              </div>
              <div className={styles.grupoInput}>
                <label>Dirección (Salta Capital)</label>
                <textarea name="direccion" placeholder="Calle, número, barrio y referencias" onChange={handleChange} required></textarea>
              </div>
              <div className={styles.grupoInput}>
                <label>Método de Pago</label>
                <select name="metodo" onChange={handleChange}>
                  <option value="Transferencia Bancaria">Transferencia (CBU / Alias)</option>
                  <option value="Efectivo al recibir">Efectivo</option>
                  <option value="Mercado Pago">Mercado Pago</option>
                </select>
              </div>
            </form>
          </section>

          
          <section className={styles.seccionResumen}>
            <h3>Resumen de Compra</h3>
            <div className={styles.listaResumen}>
              {carrito.map(item => (
                <div key={item.id} className={styles.itemResumen}>
                  <span>{item.cantidad}x {item.titulo}</span>
                  <span className={styles.precioItem}>${(item.precio * item.cantidad).toLocaleString('es-AR')}</span>
                </div>
              ))}
            </div>
            
            <div className={styles.divisor}></div>
            
            <div className={styles.totalFinal}>
              <span>Total a pagar:</span>
              <span>${total.toLocaleString('es-AR')}</span>
            </div>

            <div className={styles.iconosConfianza}>
              <span>🚚 Envío acordado</span>
              <span>🔒 Pago Seguro</span>
            </div>

            <button className={styles.btnFinalizar} onClick={enviarPedidoFinal}>
              Finalizar por WhatsApp
            </button>
          </section>

        </div>
      </main>
    </div>
  );
}

export default Pago;