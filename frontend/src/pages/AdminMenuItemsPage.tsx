import { useNavigate } from "react-router";
import ItemCard from "../components/admin/ItemCard";
import BackButton from "../components/back-button";
import type { Product } from "../utils/definitions";
import { useEffect, useState } from "react";
import { fetchItems } from "../utils/query";

export default function AdminPage() {
  const navigate = useNavigate();
  const [items, setItems] = useState<Product[]>([]);

  useEffect(() => {
    const loadItems = async () => {
      try {
        const fetchedItems = await fetchItems();
        setItems(fetchedItems);
      } catch (error) {
        console.error("Erro ao buscar itens:", error);
      }
    };

    loadItems();
  }, []);

  return (
    <div className="min-h-screen bg-[#F5F5F5] text-black">
      <div className="bg-[#005C73] px-6 pt-27 pb-5 text-center text-[32px] font-bold text-white">
        Gerenciamento de itens
      </div>

      <div className="mx-auto max-w-md space-y-4 p-4">
        <BackButton />

        <div className="flex items-center justify-between gap-2">
          <button
            onClick={() => navigate("/admin/add-item")}
            className="flex w-full items-center justify-between gap-2 rounded-lg border border-[#f2f2f2] bg-white p-2 shadow"
          >
            <span className="font-lato text-[#000000]/25">Adicionar item</span>

            <div className="bg-orange flex h-8 w-8 items-center justify-center rounded-[10px] p-2">
              <img src="/plus.svg" alt="ícone para voltar à página anterior" />
            </div>
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {items.map((item, index) => (
            <ItemCard item={item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
