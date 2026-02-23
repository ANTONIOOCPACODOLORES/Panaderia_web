import React from "react";
import "../styles/contacto.css";

export default function Contacto() {
  return (
    <>
      {/* ================= BREADCRUMBS (NO SE TOCAN) ================= */}
      <nav className="breadcrumbs">
        <a href="/">Inicio</a>
        <span>›</span>
        <span className="actual">Contacto</span>
      </nav>

      {/* ================= CONTACTO ================= */}
      <section id="contacto" className="contacto-page">

        {/* 🔥 CONTENEDOR INTERNO (CLAVE PARA EL FONDO BLANCO) */}
        <div className="contacto-container">

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

        </div>
      </section>
    </>
  );
}