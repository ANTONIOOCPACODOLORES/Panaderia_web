function Navbar() {
  return (
    <header className="navbar">
      <div className="logo">La casa del Pan 🍞</div>

      <nav className="nav-links">
        <a href="#">Inicio</a>
        <a href="#">Productos</a>
        <a href="#">Historia</a>
        <a href="#">Servicios</a>
        <a href="#">Contacto</a>
      </nav>

      <div className="nav-right">
        <button className="call-btn">Llamar</button>
        <span>🛒</span>
        <span>👤</span>
      </div>
    </header>
  )
}

export default Navbar
