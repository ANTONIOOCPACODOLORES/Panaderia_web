import "../styles/footer.css"

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Marca */}
        <div className="footer-brand">
          <h2>La Casa del Pan®</h2>
          <span>MX. 1975</span>
          <p>
            HORNEAMOS LOS 365 DÍAS DEL AÑO.<br />
            DELEITANDO TUS SENTIDOS.
          </p>
        </div>

        {/* Inicio */}
        <div className="footer-col">
          <h4>INICIO</h4>
          <a href="#">Tienda</a>
          <a href="#">Sucursales</a>
          <a href="#">Blog</a>
          <a href="#">Facturación</a>
          <a href="#">Contáctanos</a>
        </div>

        {/* Miembros */}
        <div className="footer-col">
          <h4>MIEMBROS</h4>
          <a href="#">Mi cuenta</a>
        </div>

        {/* Legales */}
        <div className="footer-col">
          <h4>LEGALES</h4>
          <a href="#">Aviso de Privacidad</a>
          <a href="#">Términos y Condiciones</a>
          <a href="#">Privacidad Facebook</a>
        </div>

        {/* Redes */}
        <div className="footer-social">
          <h4>SÍGUENOS</h4>
          <div className="icons">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-pinterest"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-tiktok"></i>
          </div>

          <h4>DESCARGA NUESTRA APP</h4>
          <img src="/assets/codigo-qr.png" alt="Aplicación Qr" />
        </div>

      </div>
    </footer>
  )
}

export default Footer