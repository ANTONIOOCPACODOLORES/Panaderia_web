import "../styles/historia.css";

function Historia() {
  return (
    <section id="historia" className="historia">
      <div className="historia-grid">

        <div className="historia-col title">
          <h2>
            DESDE NUESTRA COCINA,<br />
            CON TODO NUESTRO CARIÑO
          </h2>
        </div>

        <div className="historia-col">
          <p>
            Todavía recuerdo cuando empecé a hornear pan en mi cocina y a venderlo
            desde casa. Entonces ni siquiera me pregunté si era una buena idea.
          </p>
        </div>

        <div className="historia-col destacado">
          <p>Sólo lo hice.</p>
        </div>

        <div className="historia-col">
          <p>
            Lo hice porque descubrí el poder de una buena receta para hacer sonreír
            a las personas, y supe que quería dedicar mi vida a eso.
          </p>
        </div>

        <div className="historia-col">
          <p>
            Hoy, <strong>La Casa del Pan</strong> es más que ese inicio.
            Es un sueño que compartimos con todo nuestro equipo.
          </p>
        </div>

        <div className="historia-col strong">
          <p>
            Nuestra misión sigue siendo la misma:
            <strong> verte sonreír en cada bocado.</strong>
          </p>
        </div>

      </div>
    </section>
  );
}

export default Historia;