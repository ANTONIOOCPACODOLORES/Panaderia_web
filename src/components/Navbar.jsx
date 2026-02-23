import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function Navbar() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  // Revisar si hay sesión
  useEffect(() => {
    const usuario = localStorage.getItem("usuario");
    if (usuario) {
      setUser(JSON.parse(usuario));
    }
  }, []);

  const cerrarSesion = () => {
    localStorage.removeItem("usuario");
    setUser(null);
    navigate("/");
  };

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

        <Link to="/Error404" style={{ textDecoration: "none" }}>
          <span style={{ cursor: "pointer" }}>🛒</span>
        </Link>

        {/* 👤 LOGIN / REGISTRO */}
        {!user ? (
          <div className="auth-links">
            <button onClick={() => navigate("/login")} className="auth-btn">
              Inicia sesión
            </button>
            <button onClick={() => navigate("/registro")} className="auth-btn secondary">
              Regístrate
            </button>
          </div>
        ) : (
          <div className="user-menu">
            <span>👤 {user.nombre}</span>
            <button onClick={cerrarSesion} className="logout-btn">
              Salir
            </button>
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;