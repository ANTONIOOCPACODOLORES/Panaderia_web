import React from "react";
import Footer from "../components/Footer";
import "../styles/servicios.css";

function Servicios() {
  return (
    <>
      <main>
        <section className="servicios">
          <h2>Nuestros Servicios</h2>
          <p>Descubre todo lo que ofrecemos para ti y tu familia.</p>

          <div className="servicios-list">
            <div className="servicio-card">
              <h3>Pedidos personalizados</h3>
              <p>Pasteles y panes a medida para cualquier ocasión.</p>
            </div>

            <div className="servicio-card">
              <h3>Entrega a domicilio</h3>
              <p>Llevamos tus productos frescos directamente a tu hogar.</p>
            </div>

            <div className="servicio-card">
              <h3>Clases de panadería</h3>
              <p>Aprende a preparar tus panes favoritos con nuestros expertos.</p>
            </div>

            {/* Agrega más servicios si quieres */}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Servicios;