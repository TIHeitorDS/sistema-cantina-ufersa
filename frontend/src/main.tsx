import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import "./App.css";
import Menu from "./pages/menu.tsx";
import Notification from "./pages/notification.tsx";
import Cart from "./pages/cart.tsx";
import UserOrderList from "./pages/customer-order-list.tsx";
import UserProfile from "./pages/customer-profile.tsx";
import CartProvider from "./context/cart-context.tsx";
import UserProvider from "./context/customer-context.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <UserProvider>
      <CartProvider>
        <Router>
          <Routes>
            <Route path="/cart" element={<Cart />} />
            <Route path="/list" element={<UserOrderList />} />
            <Route path="/" element={<Menu />} />
            <Route path="/notifications" element={<Notification />} />
            <Route path="/profile" element={<UserProfile />} />
            {/* <Route path="/admin" element={<AdminConfig />} />
        <Route path="/admin/config" element={<AdminPage />} />
        <Route path="/admin/add-item" element={<AddItemPage />} />
        <Route path="/admin/edit-item/:id" element={<EditItemPage />} /> */}
          </Routes>
        </Router>
      </CartProvider>
    </UserProvider>
  </StrictMode>,
);
