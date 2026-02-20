function Navbar() {
  return (
    <header className="navbar">
      <div className="logo">La casa del Pan 🍞</div>

      <nav className="nav-links">
        <a href="/">Inicio</a>
        <a href="/productos">Productos</a>
        <a href="/Historia02">Historia</a>
        <a href="/servicios">Servicios</a>
        <a href="/contacto">Contacto</a>
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
