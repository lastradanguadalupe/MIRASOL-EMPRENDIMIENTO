import React from 'react';
import styles from './Pago.module.css';

// Funciones mínimas
function volverAlCatalogo() {
  console.log("Volver al catálogo");
}
function irACatalogo() {
  console.log("Ir a catálogo");
}
function enviarPedidoFinal() {
  console.log("Enviar pedido a WhatsApp");
}

function Pago() {
  return (
    <div id="pantalla-pago" className={styles.pago}>
      <header className={styles.headerTienda}>
        <h2>Finalizar Pedido</h2>
        <button className={styles.btnVolver} onClick={() => volverAlCatalogo()}>
          ← Volver
        </button>
      </header>

      <div className={styles.contenedorLogoEsquina}>
        <img src="../assets/logo.png" className={styles.logoMarca} onClick={() => irACatalogo()} />
      </div>

      <section className={styles.formContainer}>
        <div className={styles.textoIntro}>
          <h1>¡Casi Listo!</h1>
          <p>Revisa tu pedido y completa tus datos para finalizar la compra.</p>
        </div>

        <div id="resumen-final-pago" className={styles.resumenFinal}>
          <h3>Resumen de tu compra:</h3>
          <ul id="resumen-lista-pago"></ul>
          <p>Total: $<span id="total-final-pago">0</span></p>
        </div>

        <form id="form-datos-pago">
          <h3>Datos para el envío</h3>
          <input type="text" id="pago-nombre" placeholder="Nombre y Apellido" required />
          <input type="text" id="pago-telefono" placeholder="Teléfono de contacto" required />
          <textarea id="pago-direccion" placeholder="Dirección de entrega (Salta Capital)" required></textarea>

          <h3>Método de Pago</h3>
          <select id="metodo-pago">
            <option value="Transferencia Bancaria">Transferencia (CBU / Alias)</option>
            <option value="Efectivo">Efectivo</option>
            <option value="Mercado Pago">Mercado Pago (Link)</option>
          </select>

          <div className={styles.iconosInfo}>
            <div>🚚<br />Envío a acordar</div>
            <div>🔒<br />Pedido Protegido</div>
            <div>🧉<br />Calidad Mirasol</div>
          </div>

          <button type="button" onClick={() => enviarPedidoFinal()}>
            Finalizar y Enviar a WhatsApp
          </button>
        </form>
      </section>
    </div>
  );
}

export default Pago;

