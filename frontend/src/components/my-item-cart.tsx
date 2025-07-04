import { useEffect, useState } from "react";
import minus from "../assets/minus.svg";
import type { Item } from "../utils/definitions";

export default function MyItemCart() {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    const cartItems: Item[] = [];

    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith("cart-")) {
        const item = localStorage.getItem(key);
        if (item) {
          cartItems.push(JSON.parse(item));
        }
      }
    }
    setItems(cartItems);
  }, []);

  const removeItemFromCart = (itemId: number) => {
    localStorage.removeItem(`cart-${itemId}`);
    setItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  return (
    <>
      {items.length > 0 &&
        items.map((item) => (
          <div
            key={item.id}
            className="bg-[#ffffff] flex justify-between items-center px-4.5 py-3.75 rounded-lg"
          >
            <img src="/hot-dog.png" alt="" />

            <div className="grow ml-2">
              <p className="text-2xl">{item.nome}</p>

              <div className="flex items-center justify-between mt-2 gap-4">
                <span className="font-lato">R${item.preco}</span>

                <button
                  type="button"
                  className="bg-orange rounded-[10px] w-7 h-7 flex items-center justify-center"
                  onClick={() => removeItemFromCart(item.id)}
                >
                  <img src={minus} alt="" />
                </button>
              </div>
            </div>
          </div>
        ))}
    </>
  );
}
