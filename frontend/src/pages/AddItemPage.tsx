// src/pages/AddItemPage.tsx
import { useState } from "react";
import { useNavigate } from "react-router";
import BackButton from "../components/back-button";

export default function AddItemPage() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [available, setAvailable] = useState(true);
  const [image, setImage] = useState<File | null>(null);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("available", String(available));
    if (image) formData.append("image", image);

    console.log("Item enviado:", Object.fromEntries(formData.entries()));
    // Aqui você pode salvar no localStorage ou enviar pro backend

    // Redireciona de volta ao painel admin
    navigate("/admin");
  };

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Header */}
      <div className="bg-[#005C73] text-white pt-27 pb-5 px-6 text-center text-[32px] font-bold">
        Adicionar item ao menu
      </div>

      <div className="p-4 max-w-md mx-auto space-y-4">
        <BackButton />
      </div>

      <form
        onSubmit={handleSubmit}
        className="p-4 flex flex-col gap-4 max-w-md mx-auto"
      >
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
            <>
              <img src="/upload-icon.png" alt="Upload" className="h-10 mb-2" />
              <span className="text-sm text-gray-500">
                Faça o upload da imagem
              </span>
            </>
          )}
        </label>

        <input
          type="text"
          placeholder="Nome *"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none"
        />

        <input
          type="number"
          placeholder="Preço *"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none"
        />

        <div className="flex items-center mt-2 justify-between">
          <label htmlFor="available" className="text-sm">
            Está disponível?
          </label>

          <input
            type="checkbox"
            id="available"
            checked={available}
            onChange={(e) => setAvailable(e.target.checked)}
            className="h-5 w-5 text-orange-500"
          />
        </div>

        <button
          type="submit"
          className="bg-orange mt-17.5 text-white w-full py-3 rounded-lg text-lg font-semibold hover:bg-orange-600 transition"
        >
          Salvar item
        </button>
      </form>
    </div>
  );
}
