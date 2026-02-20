import "../styles/ofrecemos.css"
import { Link } from "react-router-dom"

function Ofrecemos() {
  return (
    <section className="ofrecemos">
      <h2>UNA ESPECIALIDAD PARA CADA GUSTO</h2>
      <p>La mejor manera de experimentar el especial toque de nuestra panadería es visitar nuestras tiendas. Déjate consentir con nuestras deliciosas especialidades.</p>

      <div className="ofrecemos-grid">
        <img src="/assets/barquillo.jpg" alt="Producto 1" />
        <img src="./assets/Pedidos_especiales.jpg" alt="Producto 2" />
        <img src="./assets/cuernos.jpg" alt="Producto 3" />
      </div>

      <Link to="/productos" className="secondary-btn">
      Más productos
      </Link>
    </section>
  )
}

export default Ofrecemos
