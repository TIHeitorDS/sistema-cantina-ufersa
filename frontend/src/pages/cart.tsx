import { Link } from "react-router";
import arrowLeft from "../assets/arrow-left.svg";
import MyItemCart from "../components/my-item-cart";
import { useEffect, useState } from "react";
import type { Item } from "../utils/definitions";
import { makeOrder } from "../utils/query";

export default function Cart() {
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

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget as HTMLFormElement);
    const name = formData.get("name") as string;
    const observation = formData.get("observacao") as string;

    try {
      await makeOrder(name, observation, items.map((item) => item.id));
      localStorage.clear();
      setItems([]);
    } catch (error) {
      console.error("Erro ao realizar pedido:", error);
    }
  };

  return (
    <>
      <div className="bg-blue">
        <div className="px-5 pb-5 pt-27 flex items-center justify-between gap-0.5">
          <Link
            to={"/"}
            className="flex items-center justify-center cursor-pointer"
          >
            <img
              src={arrowLeft}
              alt="ícone do botão para voltar à página anterior"
              className="w-6 h-6 object-cover"
            />
          </Link>

          <p className="grow text-white text-4xl text-center">
            Carrinho de compras
          </p>
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-9 pt-5 px-9.25"
      >
        <MyItemCart items={items} removeItem={removeItemFromCart} />

        <div className="w-full">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Seu nome completo"
            className="bg-[#ffffff] border border-gray/50 p-[10px] rounded-xl w-full outline-none transition-all focus:ring-1 focus:ring-orange"
          />

          <textarea
            name="observacao"
            id="observacao"
            placeholder="Observação"
            className="bg-[#ffffff] border border-gray/50 p-[10px] rounded-xl w-full mt-4 outline-none transition-all focus:ring-1 focus:ring-orange h-[100px] resize-none"
          ></textarea>

          <button
            type="submit"
            className="bg-orange text-white w-full rounded-xl py-[10px] mt-4"
          >
            Relizar pedido
          </button>
        </div>
      </form>
    </>
  );
}
