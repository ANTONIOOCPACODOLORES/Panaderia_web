import React from "react";
import "../styles/contacto.css";

export default function Contacto() {
  return (
    <>
      {/* ================= BREADCRUMBS ================= */}
      <nav className="breadcrumbs">
        <a href="/">Inicio</a>
        <span>›</span>
        <span className="actual">Contacto</span>
      </nav>

      {/* ================= CONTACTO ================= */}
      <section id="contacto" className="contacto-page">
        <h2>Contáctanos</h2>
        <p>
          ¿Tienes alguna consulta sobre nuestros productos, pedidos especiales o
          quieres hacer un encargo? ¡Escríbenos! Estaremos felices de atenderte.
        </p>

        <form className="contacto-form">
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            id="nombre"
            placeholder="Tu nombre"
            required
          />

          <label htmlFor="correo">Correo electrónico</label>
          <input
            type="email"
            id="correo"
            placeholder="Tu correo"
            required
          />

          <label htmlFor="telefono">Teléfono</label>
          <input
            type="tel"
            id="telefono"
            placeholder="Tu teléfono"
          />

          <label htmlFor="mensaje">Mensaje</label>
          <textarea
            id="mensaje"
            placeholder="Escribe tu mensaje aquí..."
            required
          ></textarea>

          <button type="submit">Enviar mensaje</button>
        </form>

        <div className="info-contacto">
          <h3>Información de contacto</h3>
          <p><strong>📍 Dirección:</strong> Calle Principal #123, Ciudad</p>
          <p><strong>📞 Teléfono:</strong> +52 123 456 7890</p>
          <p><strong>✉️ Correo:</strong> contacto@panaderia.com</p>
          <p><strong>⏰ Horario:</strong> Lunes a Sábado · 7:00 a.m. – 8:00 p.m.</p>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="footer">
        <div className="footer-container">

          <div className="footer-brand">
            <h2>La casa del pan®</h2>
            <span>MX. 1975</span>
            <p>
              HORNEAMOS LOS 365 DÍAS DEL AÑO.
              <br />
              DELEITANDO TUS SENTIDOS.
            </p>
          </div>

          <div className="footer-col">
            <h4>INICIO</h4>
            <a href="#">Tienda</a>
            <a href="#">Sucursales</a>
            <a href="#">Blog</a>
            <a href="#">Facturación</a>
            <a href="#">Contáctanos</a>
          </div>

          <div className="footer-col">
            <h4>MIEMBROS</h4>
            <a href="#">Mi cuenta</a>
          </div>

          <div className="footer-col">
            <h4>LEGALES</h4>
            <a href="#">Aviso de Privacidad</a>
            <a href="#">Términos y Condiciones</a>
            <a href="#">Privacidad Facebook</a>
          </div>

          <div className="footer-social">
            <h4>SÍGUENOS</h4>
            <div className="icons">
              <i className="fab fa-facebook"></i>
              <i className="fab fa-pinterest"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-tiktok"></i>
            </div>

            <h4>DESCARGA NUESTRA APP</h4>
            <img src="/assets/codigo-qr.png" alt="QR App" />
          </div>

        </div>
      </footer>
    </>
  );
}