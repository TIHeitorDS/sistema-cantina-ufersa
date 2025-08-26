import type { Item } from "../utils/definitions";
import { useLocation } from "react-router";
import plusIcon from "../assets/plus.svg";
import minosIcon from "../assets/minus.svg";
import xIcon from "../assets/x.svg";

export default function ItemCard({
  item,
  onHandleCart,
}: {
  item: Item;
  onHandleCart: (item: Item) => void;
}) {
  let { pathname } = useLocation();
  let icon;

  switch (pathname) {
    case "/":
      icon = plusIcon;
      break;
    case "/cart":
      icon = minosIcon;
      break;
    case "/list":
      icon = xIcon;
      break;
    default:
      icon = plusIcon; // fallback
  }

  return (
    <div className="flex max-h-fit flex-col justify-between rounded-[23px] bg-[#F9F9F9] px-4.5 py-3.75">
      <figure className="mx-auto h-36.25 w-full overflow-hidden rounded-2xl">
        <img
          src={item.image}
          alt={`Imagem de ${item.name}`}
          className="h-full w-full object-cover object-center"
        />
      </figure>

      <div className="mt-2 px-2">
        <p className="truncate text-xl">{item.name}</p>

        <div className="font-lato mt-2.5 flex w-full items-center justify-between">
          <span className="text-lg">R$ {item.price}</span>

          <button
            type="button"
            className="bg-orange flex h-10 w-10 items-center justify-center rounded-[10px]"
            onClick={() => onHandleCart(item)}
          >
            <img src={icon} alt="imagem de adição" />
          </button>
        </div>
      </div>
    </div>
  );
}
