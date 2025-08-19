import { createContext, useState, useMemo } from "react";
import type { Item } from "../utils/definitions";

type CartContextType = {
  cart: Item[];
  showPopup: { id: number; text: string }[];
  addItemToCart: (item: Item) => void;
  removeItemFromCart: (item: Item) => void;
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
  const [cart, setCart] = useState<Item[]>([]);

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

  const addItemToCart = (item: Item) => {
    setCart((prevCart) => [...prevCart, item]);
    handleShowPopup();
  };

  const removeItemFromCart = (item: Item) => {
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
