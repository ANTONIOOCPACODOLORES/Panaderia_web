import "../styles/error.css";

export default function Error404() {
  return (
    <>
      {/* BREADCRUMBS */}
      <nav className="breadcrumbs">
        <a href="/">Inicio</a>
        <span>›</span>
        <span className="actual">Error 404</span>
      </nav>

      {/* CONTENIDO */}
      <main className="error-page container">

        {/* ANIMACIÓN HORNO */}
        <div className="oven-animation">
          <svg
            width="180"
            height="180"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* HORNO */}
            <rect x="20" y="40" width="160" height="120" rx="12" fill="#3b2f2f" />

            {/* INTERIOR */}
            <rect x="40" y="70" width="120" height="60" rx="6" fill="#1e1a17" />

            {/* PAN */}
            <rect
              className="bread"
              x="70"
              y="90"
              width="60"
              height="30"
              rx="15"
              fill="#d8a15d"
            />

            {/* PUERTA */}
            <rect
              className="oven-door"
              x="40"
              y="70"
              width="120"
              height="60"
              rx="6"
              fill="#5a3b24"
            />

            {/* VAPOR */}
            <circle className="steam s1" cx="90" cy="80" r="6" />
            <circle className="steam s2" cx="110" cy="75" r="5" />
            <circle className="steam s3" cx="100" cy="70" r="4" />
          </svg>
        </div>

        <h1 className="error-code">
            <span>4</span>
            <span>0</span>
            <span>4</span>
        </h1>
        
        <h2>¡Ups! Página no encontrada</h2>
        <p>
          Parece que la página que buscas se fue al horno equivocado 🍞
          <br />
          o no existe.
        </p>
        <a href="/" className="btn">Volver al inicio</a>
      </main>

    </>
  );
}