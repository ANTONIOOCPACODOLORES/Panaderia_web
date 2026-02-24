import "./styles/home.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Historia02 from "./pages/Historia02"
import Productos from "./pages/Productos";
import Servicios from "./screens/Servicios.jsx";
import Contacto from "./pages/Contacto.jsx"
import Error404 from "./pages/Error404.jsx"
import Login from "./pages/Login.jsx"
import Registro from "./pages/Registro.jsx";
import { Footer } from "./components/footer/index.jsx"


function App() {
  return (
    <BrowserRouter>
      <Navbar />

    <main className="app-content">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/productos" element={<Productos />} />
      <Route path="/Historia02" element={<Historia02 />} />
      <Route path="/servicios" element={<Servicios />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registro" element={<Registro />} />
      <Route path="/error" element={<Error404 />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
    </main>

  <Footer />
    </BrowserRouter>
  )
}

export default App