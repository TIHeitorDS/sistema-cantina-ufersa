// src/pages/AddItemPage.tsx
import { useState } from "react";

export default function AddItemPage() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [available, setAvailable] = useState(true);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const newItem = {
      name,
      price: parseFloat(price),
      available,
      image, 
    };
    console.log("Salvar no backend:", newItem);
  }

  return (
    <form onSubmit={handleSubmit} className="p-4 space-y-4">
      <h2 className="text-xl font-bold">Adicionar novo item</h2>

      <input
        type="text"
        placeholder="Nome do item"
        className="border p-2 w-full"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <input
        type="number"
        placeholder="Preço"
        className="border p-2 w-full"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      />

      <input
        type="file"
        accept="image/*"
        className="w-full"
        onChange={(e) => setImage(e.target.files?.[0] || null)}
      />

      <label className="flex items-center space-x-2">
        <input
          type="checkbox"
          checked={available}
          onChange={(e) => setAvailable(e.target.checked)}
        />
        <span>Item disponível</span>
      </label>

      <button type="submit" className="bg-orange text-white px-4 py-2 rounded">
        Salvar Item
      </button>
    </form>
  );
}
