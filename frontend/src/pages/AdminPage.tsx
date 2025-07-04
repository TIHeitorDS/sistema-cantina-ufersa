import { useNavigate } from "react-router";
import ItemCard from "../components/admin/ItemCard";
import type { Item } from "../utils/definitions";
import BackButton from "../components/back-button";

const items: Item[] = [
  { id: 1, name: "Item", price: 8.0, img: "/hot-dog.png", isAvailable: true },
  { id: 2, name: "Item", price: 8.0, img: "/hot-dog.png", isAvailable: true },
  { id: 3, name: "Item", price: 9.0, img: "/hot-dog.png", isAvailable: true },
  { id: 4, name: "Item", price: 8.0, img: "/hot-dog.png", isAvailable: true },
];

export default function AdminPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F5F5F5] text-black">
      <div className="bg-[#005C73] text-white pt-27 pb-5 px-6 text-center text-[32px] font-bold">
        Gerenciamento de itens
      </div>

      <div className="p-4 max-w-md mx-auto space-y-4">
        <BackButton />

        <div className="flex items-center justify-between gap-2">
          <button
            onClick={() => navigate("add-item")}
            className="p-2 flex justify-between items-center gap-2 bg-white rounded-lg shadow border border-[#f2f2f2] w-full"
          >
            <span className="font-lato text-[#000000]/25">Adicionar item</span>

            <div className="bg-orange rounded-[10px] p-2 flex items-center justify-center w-8 h-8">
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
