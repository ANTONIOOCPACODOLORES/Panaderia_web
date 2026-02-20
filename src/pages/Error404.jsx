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

      {/* FOOTER */}
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