import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import "./App.css";
import Menu from "./pages/menu.tsx";
import Cart from "./pages/cart.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/carrinho-de-compras" element={<Cart />} />
      </Routes>
    </Router>
  </StrictMode>
);
