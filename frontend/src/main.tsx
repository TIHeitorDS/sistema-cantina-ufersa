import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import "./App.css";
import Menu from "./pages/menu.tsx";
import Cart from "./pages/cart.tsx";
import AdminPage from "./pages/AdminPage.tsx";
import AddItemPage from "./pages/AddItemPage.tsx";
import EditItemPage from "./pages/EditItemPage.tsx";
import AddItemMenu from "./pages/AddItemMenu.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/carrinho-de-compras" element={<Cart />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/admin/add-item" element={<AddItemPage />} />
        <Route path="/edit-item/:id" element={<EditItemPage />} />
        <Route path="/add-item-menu" element={<AddItemMenu />} />
      </Routes>
    </Router>
  </StrictMode>
);