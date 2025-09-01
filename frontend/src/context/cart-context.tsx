import { createContext, useState, useMemo } from "react";
import type { Product } from "../shared/types/definitions";

type CartContextType = {
  cart: Product[];
  showPopup: { id: number; text: string }[];
  addItemToCart: (item: Product) => void;
  removeItemFromCart: (item: Product) => void;
  removeAllItemsFromCart: () => void;
};

export const CartContext = createContext<CartContextType>({
  cart: [],
  showPopup: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  removeAllItemsFromCart: () => {},
});

export default function CartProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cart, setCart] = useState<Product[]>([]);

  const [showPopup, setShowPopup] = useState<{ id: number; text: string }[]>(
    [],
  );

  const handleShowPopup = () => {
    const newPopup = {
      id: Date.now(),
      text: "Item adicionado ao carrinho",
    };

    setShowPopup((prev) => [...prev, newPopup]);

    setTimeout(() => {
      setShowPopup((prev) => prev.filter((popup) => popup.id !== newPopup.id));
    }, 2000);
  };

  const addItemToCart = (item: Product) => {
    setCart((prevCart) => [...prevCart, item]);
    handleShowPopup();
  };

  const removeItemFromCart = (item: Product) => {
    setCart((prevCart) =>
      prevCart.filter((cartItem) => cartItem.id !== item.id),
    );
  };

  const removeAllItemsFromCart = () => {
    setCart([]);
  };

  const value = useMemo(
    () => ({
      cart,
      showPopup,
      removeAllItemsFromCart,
      addItemToCart,
      removeItemFromCart,
    }),
    [cart, showPopup],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
