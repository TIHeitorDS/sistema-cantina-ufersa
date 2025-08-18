import type { Item } from "../utils/definitions";

export default function ItemCard({ item }: { item: Item }) {
  return (
    <div className="bg-[#F9F9F9] flex flex-col max-h-fit justify-between rounded-[23px] py-3.75 px-4.5">
      <figure className="h-36.25 w-full mx-auto rounded-2xl overflow-hidden">
        <img
          src={item.imagem}
          alt={`Imagem de ${item.nome}`}
          className="w-full h-full object-cover object-center"
        />
      </figure>

      <div className="px-2 mt-2">
        <p className="truncate text-xl">{item.nome}</p>

        <div className="flex font-lato justify-between items-center w-full mt-2.5">
          <span className="text-lg">R$ {item.preco}</span>

          <button
            type="button"
            className="bg-orange flex justify-center items-center w-10 h-10 rounded-[10px]"
          >
            <img src="/plus.svg" alt="imagem de adição" />
          </button>
        </div>
      </div>
    </div>
  );
}
