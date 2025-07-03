// src/pages/EditItemPage.tsx
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function EditItemPage() {
  const { id } = useParams(); // para uso futuro (carregar item pelo ID)
  const navigate = useNavigate();

  const [name, setName] = useState("Cachorro-quente");
  const [price, setPrice] = useState("8.00");
  const [available, setAvailable] = useState(true);
  const [image, setImage] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("available", String(available));
    if (image) formData.append("image", image);

    console.log("Item editado:", Object.fromEntries(formData.entries()));
    navigate("/admin");
  };

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Header */}
      <div className="bg-[#005C73] text-white py-4 px-6 flex items-center justify-between rounded-b-xl">
        <button onClick={() => navigate(-1)}>
          <ArrowLeft size={24} />
        </button>
        <span className="font-semibold">Editar item</span>
        <button onClick={() => navigate("/admin")} className="text-sm">
          Voltar
        </button>
      </div>

      {/* Formulário */}
      <form
        onSubmit={handleSubmit}
        className="p-6 flex flex-col gap-4 max-w-md mx-auto"
      >
        {/* Imagem */}
        <label className="flex flex-col items-center justify-center border border-dashed border-gray-400 rounded-lg h-40 cursor-pointer">
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => setImage(e.target.files?.[0] || null)}
          />
          {image ? (
            <img
              src={URL.createObjectURL(image)}
              alt="Preview"
              className="h-24 object-contain"
            />
          ) : (
            <img
              src="/hot-dog.png"
              alt="Item atual"
              className="h-24 object-contain"
            />
          )}
          <span className="text-sm text-gray-500 mt-1">
            Faça o upload da imagem
          </span>
        </label>

        {/* Nome */}
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2"
        />

        {/* Preço */}
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2"
        />

        {/* Disponível */}
        <div className="flex items-center justify-between">
          <span className="text-sm">Está disponível?</span>
          <input
            type="checkbox"
            checked={available}
            onChange={(e) => setAvailable(e.target.checked)}
            className="h-5 w-5 text-orange-500"
          />
        </div>

        {/* Botão */}
        <button
          type="submit"
          className="bg-[#FF6B00] text-white w-full py-3 rounded-lg text-lg font-semibold hover:bg-orange-600 transition"
        >
          Salvar item
        </button>
      </form>
    </div>
  );
}
