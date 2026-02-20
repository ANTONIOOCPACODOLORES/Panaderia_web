import { useState } from "react";

function Contacto() {
  const [nombre, setNombre] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Gracias por contactarnos " + nombre);
  };

  return (
    <div className="container">
      <h1>Contacto 📩</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Tu nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
        <br /><br />
        <button className="btn">Enviar</button>
      </form>
    </div>
  );
}

export default Contacto;
