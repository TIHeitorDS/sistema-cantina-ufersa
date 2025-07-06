import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import BackButton from "../components/back-button";
import type { Item } from "../utils/definitions";
import { fetchItem, updateItem } from "../utils/query";

export default function EditItemPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [image, setImage] = useState<File | null>(null);

  const [item, setItem] = useState<Item>({
    id: 0,
    nome: "",
    preco: 0,
    disponivel: false,
    imagem: "",
  });

  useEffect(() => {
    if (!id) return;

    const loadItem = async () => {
      try {
        const data = await fetchItem(Number(id));
        setItem(data);
      } catch (error) {
        console.error("Erro ao buscar item:", error);
      }
    };

    loadItem();
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("id", String(item.id));
      formData.append("nome", item.nome);
      formData.append("preco", String(item.preco));
      formData.append("disponivel", String(item.disponivel));

      if (image) {
        formData.append("imagem", image); // 📸 arquivo mesmo!
      }

      await updateItem(formData);
      navigate("/admin");
    } catch (error) {
      console.error("Erro ao atualizar item:", error);
    }
  };

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Header */}
      <div className="bg-[#005C73] text-white pt-27 pb-5 px-6 text-center text-[32px] font-bold">
        Editar item do menu
      </div>

      <div className="p-4 max-w-md mx-auto space-y-4">
        <BackButton />
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
            item.imagem && (
              <img
                src={item.imagem}
                alt="Item atual"
                className="h-24 object-contain"
              />
            )
          )}
          <span className="text-sm text-gray-500 mt-1">
            Faça o upload da imagem
          </span>
        </label>

        {/* Nome */}
        <input
          type="text"
          value={item.nome}
          onChange={(e) =>
            setItem((prev) => ({ ...prev, nome: e.target.value }))
          }
          className="w-full border border-gray-300 rounded px-3 py-2"
        />

        {/* Preço */}
        <input
          type="number"
          value={item.preco}
          onChange={(e) =>
            setItem((prev) => ({
              ...prev,
              preco: parseFloat(e.target.value) || 0,
            }))
          }
          className="w-full border border-gray-300 rounded px-3 py-2"
        />

        {/* Disponível */}
        <div className="flex items-center justify-between mt-2">
          <span className="text-sm">Está disponível?</span>
          <input
            type="checkbox"
            checked={item.disponivel}
            onChange={(e) =>
              setItem((prev) => ({ ...prev, disponivel: e.target.checked }))
            }
            className="h-5 w-5 text-orange-500"
          />
        </div>

        {/* Botão */}
        <button
          type="submit"
          className="bg-[#FF6B00] mt-17.5 text-white w-full py-3 rounded-lg text-lg font-semibold hover:bg-orange-600 transition"
        >
          Salvar item
        </button>
      </form>
    </div>
  );
}
