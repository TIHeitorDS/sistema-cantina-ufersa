// src/pages/AdminPage.tsx
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Pencil, Plus } from "lucide-react";

const items = [
  { id: 1, name: "Item", price: 8.0, img: "/hot-dog.png" },
  { id: 2, name: "Item", price: 8.0, img: "/hot-dog.png" },
  { id: 3, name: "Item", price: 8.0, img: "/hot-dog.png" },
  { id: 4, name: "Item", price: 8.0, img: "/hot-dog.png" },
];

export default function AdminPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F5F5F5] text-black">
      {/* Header */}
      <div className="bg-[#005C73] text-white py-5 px-6 rounded-b-xl text-center text-xl font-bold">
        Gerenciamento de itens
      </div>

      <div className="p-4 max-w-md mx-auto space-y-4">
        {/* Barra superior com voltar e botão "Voltar" */}
        <div className="flex items-center justify-between">
          <button
            onClick={() => navigate(-1)}
            className="bg-white border border-gray-300 p-2 rounded-lg shadow"
          >
            <ArrowLeft size={20} />
          </button>
          <button
            onClick={() => navigate("/")}
            className="bg-white border border-gray-300 px-4 py-1 rounded-lg text-sm shadow"
          >
            Voltar
          </button>
        </div>

        {/* Botão de adicionar */}
        <div className="flex items-center justify-between gap-2">
          <input
            type="text"
            placeholder="Adicionar item"
            disabled
            className="flex-1 bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm"
          />
          <button
            onClick={() => navigate("/add-item")}
            className="bg-[#FF6B00] text-white rounded-full p-2 hover:bg-orange-600 transition"
          >
            <Plus size={20} />
          </button>
        </div>

        {/* Grid de cards */}
        <div className="grid grid-cols-2 gap-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-white p-4 rounded-xl shadow-md flex flex-col items-center relative"
            >
              <img src={item.img} alt={item.name} className="h-16 mb-2" />
              <p className="font-semibold">{item.name}</p>
              <p className="text-gray-600">R$ {item.price.toFixed(2)}</p>

              <button
                onClick={() => navigate(`/edit-item/${item.id}`)}
                className="absolute bottom-2 right-2 bg-[#FF6B00] p-1 rounded-full"
              >
                <Pencil size={16} className="text-white" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
