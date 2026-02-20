import React from "react";
import "../styles/historia.css";

function Historia02() {
  return (
    <main>
      {/* ================= HISTORIA ================= */}
      <section className="historia">
        <div className="historia-container">
          <div className="historia-img">
            <img src="/img/Historia.avif" alt="Panadería artesanal" />
          </div>
          <div className="historia-card">
            <h2>Nuestra Historia</h2>
            <p>
              Nuestra panadería nació del amor por el pan artesanal y las recetas
              tradicionales que han pasado de generación en generación.
            </p>
            <p>
              Desde nuestros inicios, cada amanecer encendemos el horno con la misma
              pasión: ofrecer pan fresco, delicioso y hecho con ingredientes de la
              mejor calidad.
            </p>
            <p>
              Con el paso del tiempo, nos hemos convertido en un lugar de encuentro
              para familias y amigos, donde el aroma del pan recién horneado nos
              recuerda que los mejores momentos se comparten alrededor de la mesa.
            </p>
            <p>
              Gracias por confiar en nosotros y ser parte de nuestra historia.
            </p>
          </div>
        </div>
      </section>

      {/* ================= SECCIONES ADICIONALES ================= */}
      <section className="historia historia-secundaria">
        <div className="historia-container">
          <div className="historia-card">
            <h2>Desde Nuestra Cocina, con Todo Nuestro Cariño</h2>
            <p>
              Todavía recuerdo cuando empecé a hornear pan en mi cocina y a venderlo desde casa. Entonces ni siquiera me pregunté si era una buena idea.
            </p>
            <p className="destacado">Sólo lo hice.</p>
            <p>
              Lo hice porque descubrí el poder de una buena receta para hacer sonreír a las personas, y supe que quería dedicar mi vida a eso.
            </p>
            <p>
              Hoy, <strong>La Casa del Pan</strong> es más que ese inicio. Es un sueño que compartimos con todo nuestro equipo.
            </p>
            <p>
              Si tuviera que empezar desde cero, lo haría todo otra vez. Porque nuestra misión sigue siendo la misma: <strong>verte sonreír en cada bocado</strong>.
            </p>
          </div>
          <div className="historia-img">
            <img src="/img/panaderiatonys.jpg" alt="Pastel tradicional" />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Historia02;