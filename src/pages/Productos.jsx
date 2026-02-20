import { useContext } from "react";
import { CartContext } from "../context/CartContext";


function Productos() {
    const {addToCart} = useContext (CartContext)

  const productos = [
    { id: 1, nombre: "Conchas", precio: "$15" },
    { id: 2, nombre: "Bolillo", precio: "$5" },
    { id: 3, nombre: "Cuernito", precio: "$18" },
  ];

  return (
    <div className="container">
      <h1>Nuestros Productos 🥖</h1>

      <div className="productos">
        {productos.map((producto) => (
          <div key={producto.id} className="card">
            <h3>{producto.nombre}</h3>
            <p>{producto.precio}</p>
            <button className="btn" onClick={() => addToCart(producto)}>Agregar</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Productos;
