import minus from "../assets/minus.svg";
import type { Item } from "../utils/definitions";

export default function MyItemCart({ items, removeItem }: { items: Item[], removeItem: (id: number) => void }) {
  return (
    <>
      {items.length > 0 &&
        items.map((item) => (
          <div
            key={item.id}
            className="bg-[#ffffff] flex justify-between items-center px-4.5 py-3.75 rounded-lg"
          >
            <img src={item.imagem} alt="" className="w-24 h-24" />

            <div className="grow ml-2">
              <p className="text-2xl">{item.nome}</p>

              <div className="flex items-center justify-between mt-2 gap-4">
                <span className="font-lato">R${item.preco}</span>

                <button
                  type="button"
                  className="bg-orange rounded-[10px] w-7 h-7 flex items-center justify-center"
                  onClick={() => removeItem(item.id)}
                >
                  <img src={minus} alt="" />
                </button>
              </div>
            </div>
          </div>
        ))}
    </>
  );
}
