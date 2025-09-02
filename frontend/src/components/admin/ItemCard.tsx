import type { Product } from "../../shared/types/definitions";
import { useNavigate } from "react-router";
import pencil from "../../assets/pencil.svg";

export default function ItemCard({ item }: { item: Product }) {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-between rounded-[23px] bg-[#fff] py-[15px] shadow">
      <div>
        <img
          src={item.imagem}
          alt="imagem do cachorro-quente"
          className="mx-auto h-24 w-24 rounded-2xl object-fill"
        />
      </div>

      <div className="mt-4 flex flex-col items-start justify-between px-3">
        <p className="text-2xl">{item.nome}</p>

        <div className="mt-2 flex w-full items-center justify-between">
          <p className="font-lato text-gray">R$ {item.preco}</p>

          <button
            type="button"
            className="bg-orange flex h-7 w-7 items-center justify-center rounded-[10px]"
            onClick={() => navigate(`/admin/edit-item/${item.id}`)}
          >
            <img src={pencil} alt="imagem de adição" />
          </button>
        </div>
      </div>
    </div>
  );
}
