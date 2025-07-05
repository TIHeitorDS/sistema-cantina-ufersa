import type { Item } from "../../utils/definitions";
import { useNavigate } from "react-router";
import pencil from "../../assets/pencil.svg";

export default function ItemCard({ item }: { item: Item }) {
  const navigate = useNavigate();

  return (
    <div className="bg-[#fff] shadow rounded-[23px] py-[15px]">
      <div>
        <img
          src={item.imagem}
          alt="imagem do cachorro-quente"
          className="w-24 h-24 mx-auto object-fill rounded-2xl"
        />
      </div>

      <div className="flex flex-col justify-between items-start mt-4 px-3">
        <p className="text-2xl">{item.nome}</p>

        <div className="flex justify-between items-center w-full mt-2">
          <p className="font-lato text-gray">R$ {item.preco}</p>

          <button
            type="button"
            className="bg-orange flex justify-center items-center w-7 h-7 rounded-[10px]"
            onClick={() => navigate(`edit-item/${item.id}`)}
          >
            <img src={pencil} alt="imagem de adição" />
          </button>
        </div>
      </div>
    </div>
  );
}
