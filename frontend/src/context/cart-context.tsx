import { createContext, useState, useMemo } from "react";
import type { Product } from "../shared/types/definitions";

type CartContextType = {
  cart: Product[];
  addItemToCart: (item: Product) => void;
  removeItemFromCart: (item: Product) => void;
  removeAllItemsFromCart: () => void;
};

export const CartContext = createContext<CartContextType>({
  cart: [],
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

  const addItemToCart = (item: Product) => {
    setCart((prevCart) => [...prevCart, item]);
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
      removeAllItemsFromCart,
      addItemToCart,
      removeItemFromCart,
    }),
    [cart],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
