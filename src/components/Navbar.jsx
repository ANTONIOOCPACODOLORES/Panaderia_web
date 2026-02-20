import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">
      <div className="logo">La casa del Pan 🍞</div>

      <nav className="nav-links">
        <Link to="/">Inicio</Link>
        <Link to="/productos">Productos</Link>
        <Link to="/historia02">Historia</Link>
        <Link to="/servicios">Servicios</Link>
        <Link to="/contacto">Contacto</Link>
      </nav>

      <div className="nav-right">
        <button className="call-btn">Llamar</button>

        {/* SOLO ESTO SE AGREGA */}
        <Link to="/Error404" style={{ textDecoration: "none" }}>
          <span style={{ cursor: "pointer" }}>🛒</span>
        </Link>

        <span>👤</span>
      </div>
    </header>
  );
}

export default Navbar;