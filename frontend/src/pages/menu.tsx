import { useState, useEffect } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import ItemCard from "../components/item-card";
import { fetchItems } from "../utils/query";
import type { Item } from "../utils/definitions";

export default function Menu() {
  const [itemsQty, setItemsQty] = useState<number>(localStorage.length);
  const [items, setItems] = useState<Item[]>([]); // Ajuste o tipo conforme necessário

  useEffect(() => {
    fetchItems().then((data) => {
      setItems(data);
    });
  }, []);

  function addItemToCart(item: Item) {
    setItemsQty((prevQty) => prevQty + 1);

    localStorage.setItem(`cart-${item.id}`, JSON.stringify(item));
  }

  return (
    <div className="h-svh overflow-hidden">
      <Header />

      <div className="mt-6 px-9 grid grid-cols-2 lg:grid-cols-5 mx-auto gap-6 overflow-scroll h-[450px] pb-24">
        {items.map(
          (item) =>
            item.disponivel && (
              <ItemCard
                key={item.id}
                item={item}
                addItemToCart={addItemToCart}
              />
            )
        )}
      </div>

      <Footer itemsQty={itemsQty} />
    </div>
  );
}
