import React from "react";
import "../styles/historia02.css";
import Footer from "../components/Footer";

function Historia02() {
  return (
    <>
    
      {/* ================= HISTORIA 1 ================= */}
      <section className="historia">
        <div className="historia-container">
          
          {/* TEXTO */}
          <div className="historia-card">
            <h2>Nuestra Historia</h2>

            <p>
              Nuestra panadería nació del amor por el pan artesanal y las recetas
              tradicionales que han pasado de generación en generación.
            </p>

            <p>
              Desde nuestros inicios, cada amanecer encendemos el horno con la misma
              pasión: ofrecer pan fresco y delicioso.
            </p>

            <p>
              Con el paso del tiempo, nos hemos convertido en un lugar de encuentro
              para familias y amigos.
            </p>

            <p>
              Gracias por confiar en nosotros y ser parte de nuestra historia.
            </p>
          </div>

          {/* IMAGEN */}
          <div className="historia-img">
            <img src="/assets/HRP01.jpg" alt="Panadería artesanal" />
          </div>

        </div>
      </section>

      {/* ================= HISTORIA 2 ================= */}
      <section className="historia historia-secundaria">
        <div className="historia-container reverse">

          {/* TEXTO */}
          <div className="historia-card">
            <h2>Desde Nuestra Cocina, con Todo Nuestro Cariño</h2>

            <p>
              Todavía recuerdo cuando empecé a hornear pan en mi cocina.
            </p>

            <p className="destacado">Sólo lo hice.</p>

            <p>
              Hoy, <strong>La Casa del Pan</strong> es mucho más que ese inicio.
            </p>

            <p>
              Nuestra misión sigue siendo la misma:
              <strong> verte sonreír en cada bocado</strong>.
            </p>
          </div>

          {/* IMAGEN */}
          <div className="historia-img">
            <img src="/assets/Historia02.jpg" alt="Pan tradicional" />
          </div>

        </div>
      </section>

      {/* ================= HISTORIA 3 ================= */}
      <section className="historia historia-oscura">
        <div className="historia-container">

          {/* TEXTO */}
          <div className="historia-card">
            <h2>En 1985</h2>

            <p>
              Se amplió el giro de "La Universal" con una línea completa de pastelería, lo cual tuvo una gran aceptación por la calidad de sus materias primas, su presentación y los precios competitivos, dando así oportunidad de vender a diferentes restaurantes, banquetes y eventos.
            </p>

            <p>
              La primera sucursal de la matriz con nombre de "La Universal" fue la tienda ubicada en Churubusco, donde se logró tener presencia de la marca en el sur de la Ciudad.
            </p>
          </div>

          {/* IMAGEN */}
          <div className="historia-img">
            <img src="/assets/123.jpg" alt="Escena 1985" />
          </div>

        </div>
      </section>
    </>
  );
}

export default Historia02;