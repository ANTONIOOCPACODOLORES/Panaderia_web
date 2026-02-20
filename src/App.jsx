import "./styles/home.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Historia02 from "./pages/Historia02"
import Productos from "./pages/Productos";


function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/Historia02" element={<Historia02 />} />
        
      </Routes>
    </BrowserRouter>
  )
}

export default App