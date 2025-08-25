import type { Item } from "../utils/definitions";
import { useEffect, useState } from "react";
import { getItems } from "../utils/query";
import { useCart } from "../shared/hooks/useCart";
import ItemCard from "../components/item-card";
import AppLayout from "../ui/app-layout";
import SucessPopup from "../ui/sucess-popup";

export default function Menu() {
  const [items, setItems] = useState<Item[]>([]);
  const { addItemToCart, showPopup } = useCart();
  const [value, setValue] = useState("");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const filteredItems = items.filter((item) =>
    item.nome.toLowerCase().includes(value.toLowerCase()),
  );

  useEffect(() => {
    getItems().then(setItems);
  }, []);

  return (
    <>
      <AppLayout title="Menu">
        <div className="relative mt-2 w-full">
          <span className="pointer-events-none absolute top-1/2 left-2 -translate-y-1/2 transform">
            <img src="/search.svg" alt="Buscar" className="h-6 w-6" />
          </span>

          <input
            type="text"
            name="name"
            id="name"
            value={value}
            onChange={handleSearch}
            placeholder="Pesquise por um produto"
            className="font-lato focus:ring-orange min-w-full rounded-[13px] border border-[#f9f9f9] py-2 pr-4 pl-10 transition-all duration-300 outline-none focus:ring-1 focus:outline-none"
            autoComplete="off"
          />
        </div>

        <div className="mx-auto mt-6 grid grid-cols-2 gap-4 lg:grid-cols-5">
          {filteredItems.length > 0 ? (
            filteredItems.map(
              (item) =>
                item.disponivel && (
                  <ItemCard
                    key={item.id}
                    item={item}
                    onHandleCart={addItemToCart}
                  />
                ),
            )
          ) : (
            <div className="col-span-2 text-center">
              <p className="text-black/25">Nenhum item encontrado</p>
            </div>
          )}
        </div>
      </AppLayout>

      {showPopup.map((popup) => (
        <SucessPopup key={popup.id} text={popup.text} />
      ))}
    </>
  );
}
