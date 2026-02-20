import React from "react";
import "../styles/productos.css";
import { Link } from "react-router-dom";

function Productos() {
  return (
    <>
      {/* ================= BREADCRUMB ================= */}
      <nav className="breadcrumbs">
        <Link to="/">Inicio</Link> <span>›</span> <span>Productos</span>
      </nav>

      {/* ================= HEADER PRODUCTOS ================= */}
      <header className="productos-header">
        <h1>Nuestros Productos 🥖</h1>

        <img
          src="/assets/CNP.jpg"
          alt="Pan artesanal horneado"
        />

        <p>
          Elaborados artesanalmente con ingredientes de calidad,
          tradición y amor por el buen pan.
        </p>
      </header>

      {/* ================= CONTENIDO ================= */}
      <main className="productos-container">

        {/* BUSCADOR */}
        <div className="buscador">
          <input
            type="text"
            placeholder="Buscar producto..."
          />
          <button>Buscar</button>
        </div>

        {/* ================= GRID DE PRODUCTOS ================= */}
        <div className="productos-grid">

          <div className="producto-card">
            <img src="/assets/Conchas_rellenas.jpg" alt="Conchas Rellenas" />
            <h3>Conchas Rellenas </h3>
            <p className="producto-precio">$15</p>
            <button>Agregar</button>
          </div>

          <div className="producto-card">
            <img src="/assets/bolillo_tradicional.jpg" alt="Bolillo" />
            <h3>Bolillo</h3>
            <p className="producto-precio">$5</p>
            <button>Agregar</button>
          </div>

          <div className="producto-card">
            <img src="/assets/cuernito_salado.jpg" alt="Cuernito" />
            <h3>Cuernito</h3>
            <p className="producto-precio">$18</p>
            <button>Agregar</button>
          </div>

        </div>

        {/* ================= SECCIONES INFORMATIVAS ================= */}
        <div class="categorias-grid">
  <section class="categoria">
      <img src="/assets/pan_sin_gluten.jpg" alt="Panadería Tradicional" />
    <h2>Panadería Tradicional</h2>
    <ul class="lista-productos">
      <li>Pan de Molde</li>
      <li>Pan Artesano</li>
      <li>Pan Especial (sin gluten, integral)</li>
    </ul>
  </section>

  <section class="categoria">
      <img src="/assets/Pastel_red_velvet_porción.jpg" alt="Pasteleria y Reposteria" />
    <h2>Pastelería y Repostería</h2>
    <ul class="lista-productos">
      <li>Pasteles por porciones</li>
      <li>Tartas enteras para eventos</li>
      <li>Postres individuales</li>
    </ul>
  </section>

  <section class="categoria">
    <img src="/assets/Croissant_Mantequilla.jpg" alt="Bolleria y Dulces" />
    <h2>Bollería y Dulces</h2>
    <p class="descripcion">
      Croissants, conchas, roles, donas y dulces tradicionales recién horneados.
    </p>
  </section>

  <section class="categoria">
      <img src="/assets/sandwich_clasico.jpg" alt="Productos Salados" />
    <h2>Productos Salados</h2>
    <p class="descripcion">
      Empanadas, sándwiches y opciones ideales para desayunos o comidas rápidas.
    </p>
  </section>
</div>

{/* Pedidos especiales queda solo */}
<section class="categoria categoria-especial">
  <h2>Pedidos Especiales</h2>
  <ul class="lista-productos">
    <li>Tartas de cumpleaños personalizadas</li>
    <li>Desayunos y boxes empresariales</li>
    <li>Bodas y eventos especiales</li>
  </ul>
  <p class="nota">
    📌 Todos los pedidos especiales se realizan bajo aviso previo.
  </p>
</section>

      </main>
    </>
  );
}

export default Productos;