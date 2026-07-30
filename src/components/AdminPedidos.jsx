import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './AdminPedidos.module.css';
import { supabase } from './lib/supabaseClient';

function AdminPedidos() {
  const navigate = useNavigate();
  const [pedidos, setPedidos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  const [expandido, setExpandido] = useState(null);

  useEffect(() => {
    async function verificarSesionYCargar() {
      const { data: { session } } = await supabase.auth.getSession();

      if (!session) {
        navigate('/admin/login');
        return;
      }

      const { data, error } = await supabase
        .from('pedidos')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        setError(error.message);
      } else {
        setPedidos(data);
      }
      setCargando(false);
    }

    verificarSesionYCargar();
  }, [navigate]);

  const cerrarSesion = async () => {
    await supabase.auth.signOut();
    navigate('/admin/login');
  };

  const toggleExpandir = (id) => {
    setExpandido(expandido === id ? null : id);
  };

  const formatearFecha = (fecha) => {
    return new Date(fecha).toLocaleString('es-AR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  if (cargando) {
    return <p className={styles.mensajeCentro}>Cargando pedidos...</p>;
  }

  if (error) {
    return <p className={styles.mensajeCentro}>Error al cargar pedidos: {error}</p>;
  }

  return (
    <div className={styles.contenedor}>
      <header className={styles.header}>
        <h2>Pedidos ({pedidos.length})</h2>
        <button className={styles.btnSalir} onClick={cerrarSesion}>Cerrar sesión</button>
      </header>

      {pedidos.length === 0 ? (
        <p className={styles.mensajeCentro}>Todavía no hay pedidos.</p>
      ) : (
        <div className={styles.listaPedidos}>
          {pedidos.map((pedido) => (
            <div key={pedido.id} className={styles.tarjetaPedido}>
              <div
                className={styles.resumenPedido}
                onClick={() => toggleExpandir(pedido.id)}
              >
                <div>
                  <strong>{pedido.nombre_cliente}</strong>
                  <span className={styles.fecha}>{formatearFecha(pedido.created_at)}</span>
                </div>
                <div className={styles.derechaResumen}>
                  <span className={styles.estado}>{pedido.estado}</span>
                  <span className={styles.total}>
                    ${Number(pedido.total).toLocaleString('es-AR')}
                  </span>
                </div>
              </div>

              {expandido === pedido.id && (
                <div className={styles.detalle}>
                  <p><strong>Teléfono:</strong> {pedido.telefono}</p>
                  <p><strong>Dirección:</strong> {pedido.direccion}</p>
                  <p><strong>Método de pago:</strong> {pedido.metodo_pago}</p>
                  <div className={styles.items}>
                    <strong>Productos:</strong>
                    <ul>
                      {pedido.items.map((item, idx) => (
                        <li key={idx}>
                          {item.cantidad}x {item.titulo} — $
                          {(item.precio * item.cantidad).toLocaleString('es-AR')}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default AdminPedidos;