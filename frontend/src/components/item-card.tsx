import type { Item } from "../utils/definitions";

export default function ItemCard({
  item,
  addItemToCart,
}: {
  item: Item;
  addItemToCart: (item: Item) => void;
}) {
  return (
    <div className="bg-[#fff] h-full flex flex-col justify-between shadow rounded-[23px] py-[15px]">
      <figure>
        <img
          src={item.imagem}
          alt={`Imagem de ${item.nome}`}
          className="w-24 h-24 mx-auto object-fill rounded-2xl"
        />
      </figure>

      <div className="px-2 mt-2">
        <p className="text-balance">{item.nome}</p>

        <div className="flex justify-between items-center w-full mt-3">
          <span>R$ {item.preco}</span>

          <button
            type="button"
            className="bg-orange flex justify-center items-center w-7 h-7 rounded-[10px]"
            onClick={() => addItemToCart(item)}
          >
            <img src="/plus.svg" alt="imagem de adição" />
          </button>
        </div>
      </div>
    </div>
  );
}
