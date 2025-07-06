import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { registerSW } from "virtual:pwa-register";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import "./App.css";
import Menu from "./pages/menu.tsx";
import Cart from "./pages/cart.tsx";
import AdminPage from "./pages/AdminPage.tsx";
import AddItemPage from "./pages/AddItemPage.tsx";
import EditItemPage from "./pages/EditItemPage.tsx";
import AdminConfig from "./pages/admin-config.tsx";

if ("serviceWorker" in navigator) {
  registerSW();
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/carrinho-de-compras" element={<Cart />} />
        <Route path="/admin" element={<AdminConfig />} />
        <Route path="/admin/config" element={<AdminPage />} />
        <Route path="/admin/add-item" element={<AddItemPage />} />
        <Route path="/admin/edit-item/:id" element={<EditItemPage />} />
      </Routes>
    </Router>
  </StrictMode>
);
