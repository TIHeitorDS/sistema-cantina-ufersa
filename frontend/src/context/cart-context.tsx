import { createContext, useState, useMemo } from "react";
import type { Item } from "../utils/definitions";

type CartContextType = {
  cart: Item[];
  addItemToCart: (item: Item) => void;
  removeItemFromCart: (item: Item) => void;
};

export const CartContext = createContext<CartContextType>({
  cart: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
});

export default function CartProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cart, setCart] = useState<Item[]>([]);

  const addItemToCart = (item: Item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const removeItemFromCart = (item: Item) => {
    setCart((prevCart) =>
      prevCart.filter((cartItem) => cartItem.id !== item.id)
    );
  };

  const value = useMemo(
    () => ({
      cart,
      addItemToCart,
      removeItemFromCart,
    }),
    [cart]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
