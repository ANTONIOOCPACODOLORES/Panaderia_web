import "./styles/home.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Historia02 from "./pages/Historia02"
import Productos from "./pages/Productos";
import Servicios from "./screens/Servicios.jsx";
import Contacto from "./pages/Contacto.jsx"
import Error404 from "./pages/Error404.jsx"


function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/Historia02" element={<Historia02 />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/contacto" element={<Contacto />} />

        {/* ERROR */}
      <Route path="/error" element={<Error404 />} />
      <Route path="*" element={<Error404 />} />


      </Routes>
    </BrowserRouter>
  )
}

export default App