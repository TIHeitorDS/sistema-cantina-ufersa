import { useState } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import ItemCard from "../components/item-card";

export default function Menu() {
  const [itemsQty, setItemsQty] = useState<number>(0);

  function addItemToCart() {
    setItemsQty((prevQty) => prevQty + 1);
  }

  return (
    <div className="h-svh overflow-hidden">
      <Header />

      <div className="mt-6 px-9 grid grid-cols-2 lg:grid-cols-5 mx-auto gap-6 overflow-scroll h-[450px] pb-24">
        <ItemCard addItemToCart={addItemToCart} />
        <ItemCard addItemToCart={addItemToCart} />
        <ItemCard addItemToCart={addItemToCart} />
        <ItemCard addItemToCart={addItemToCart} />
        <ItemCard addItemToCart={addItemToCart} />
      </div>

      <Footer itemsQty={itemsQty} />
    </div>
  );
}
