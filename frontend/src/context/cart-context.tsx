import { createContext, useState, useMemo } from "react";
import type { Product } from "../shared/types/definitions";

type CartContextType = {
  cart: Product[];
  handleAddProduct: (item: Product) => void;
  removeItemFromCart: (item: Product) => void;
  removeAllItemsFromCart: () => void;
};

export const CartContext = createContext<CartContextType>({
  cart: [],
  handleAddProduct: () => {},
  removeItemFromCart: () => {},
  removeAllItemsFromCart: () => {},
});

export default function CartProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cart, setCart] = useState<Product[]>([]);

  const handleAddProduct = (product: Product) => {
    setCart((prevCart) => {
      const isProductInCart = prevCart.find((item) => item.id === product.id);

      if (isProductInCart) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantityInCart: item.quantityInCart + 1 }
            : item,
        );
      }

      return [...prevCart, { ...product, quantityInCart: 1 }];
    });
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
      handleAddProduct,
      removeItemFromCart,
    }),
    [cart],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
