import minus from "../assets/minus.svg";
import type { Product } from "../shared/types/definitions";

export default function MyItemCart({
  items,
  removeItem,
}: {
  items: Product[];
  removeItem: (id: number) => void;
}) {
  return (
    <>
      {items.length > 0 &&
        items.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between rounded-lg bg-[#ffffff] px-4.5 py-3.75"
          >
            <img src={item.imagem} alt="" className="h-24 w-24" />

            <div className="ml-2 grow">
              <p className="text-2xl">{item.nome}</p>

              <div className="mt-2 flex items-center justify-between gap-4">
                <span className="font-lato">R${item.preco}</span>

                <button
                  type="button"
                  className="bg-orange flex h-7 w-7 items-center justify-center rounded-[10px]"
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
