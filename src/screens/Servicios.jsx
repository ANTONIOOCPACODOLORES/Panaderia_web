import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/servicios.css";

const serviciosData = [
  {
    id: 1,
    titulo: "Pan Blanco Artesanal",
    descripcion:
      "Pan recién horneado todos los días, elaborado con recetas tradicionales e ingredientes de calidad.",
    imagen: "/assets/pan_blanco_artesanal.jpg",
  },
  {
    id: 2,
    titulo: "Pastelería",
    descripcion:
      "Pasteles, conchas, roles y postres ideales para acompañar tus momentos especiales.",
    imagen: "/assets/Pasteleria.jpg",
  },
  {
    id: 3,
    titulo: "Pedidos especiales",
    descripcion:
      "Realizamos pedidos personalizados para eventos, cumpleaños y reuniones familiares.",
    imagen: "/assets/Pedidos_especiales.jpg",
  },
  {
    id: 4,
    titulo: "Horneado diario",
    descripcion:
      "Nuestro pan se hornea cada mañana para garantizar frescura y sabor en cada pieza.",
    imagen: "/assets/Pan_Diario.png",
  },
];

export default function Servicios() {
  const [search, setSearch] = useState("");

  const filtered = serviciosData.filter((s) =>
    s.titulo.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="servicios-page">
      {/* ================= BREADCRUMB + BUSCADOR ================= */}
      <div className="servicios-top">
        <nav className="breadcrumbs">
          <Link to="/">Inicio</Link>
          <span>›</span>
          <span className="actual">Servicios</span>
        </nav>

        <div className="buscador">
          <input
            type="text"
            placeholder="Buscar servicio..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button>Buscar</button>
        </div>
      </div>

      {/* ================= TITULO ================= */}
      <section className="servicios-header">
        <h1>Nuestros Servicios</h1>
        <p>
          En nuestra panadería ofrecemos más que pan: brindamos experiencias
          llenas de sabor, tradición y calidad para cada ocasión.
        </p>
      </section>

      {/* ================= GRID ================= */}
      <section className="servicios-grid">
        {filtered.map((servicio) => (
          <article key={servicio.id} className="servicio-card">
            <img src={servicio.imagen} alt={servicio.titulo} />
            <h3>{servicio.titulo}</h3>
            <p>{servicio.descripcion}</p>
          </article>
        ))}
      </section>
    </main>
  );
}