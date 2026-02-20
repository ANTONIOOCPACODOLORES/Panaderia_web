import React  from "react";
import ReactDom from "react-dom/client"
import App from "./App";
import "./styles.css";
import { CartProvider } from "./context/CartContext";

ReactDom.createRoot(document.getElementById("root")).render(
  
  <CartProvider>
    <App />
  </CartProvider>,
)
