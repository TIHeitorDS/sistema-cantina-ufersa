// src/pages/AdminPage.tsx
import ItemCard from "../components/admin/ItemCard";
import { useNavigate } from "react-router-dom";

export default function AdminPage() {
  const navigate = useNavigate();

  const items = [ // SIMULADO ATÉ CONCLUIR O BECK
    { id: "1", name: "Cachorro-quente", price: 5.5, image: "/hot-dog.png" },
    { id: "2", name: "Coxinha", price: 4.0, image: "/coxinha.png" },
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Gerenciar Itens</h1>
      <button
        className="bg-orange text-white px-4 py-2 rounded mb-4"
        onClick={() => navigate("/admin/add-item")}
      >
        Adicionar Item
      </button>
      <div className="grid grid-cols-2 gap-4">
        {items.map(item => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
