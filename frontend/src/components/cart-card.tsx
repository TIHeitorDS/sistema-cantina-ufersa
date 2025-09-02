import type { Product } from "../shared/types/definitions";
import minosIcon from "../assets/minus.svg";

export default function CartCard({
  product,
  onHandleCart,
}: {
  product: Product;
  onHandleCart: (product: Product) => void;
}) {
  return (
    <div className="flex max-h-fit flex-col justify-between rounded-[23px] bg-[#F9F9F9] px-4.5 py-3.75">
      <figure className="mx-auto h-36.25 w-full overflow-hidden rounded-2xl">
        <img
          src={product.image}
          alt={`Imagem de ${product.name}`}
          className="h-full w-full object-cover object-center"
        />
      </figure>

      <div className="mt-2 px-2">
        <p className="inline truncate text-xl">{product.name}</p>
        <span className="ml-2">({product.quantityInCart}x)</span>

        <div className="font-lato mt-2.5 flex w-full items-center justify-between">
          <span className="text-lg">R$ {product.price}</span>

          <button
            type="button"
            className="bg-orange flex h-10 w-10 items-center justify-center rounded-[10px]"
            onClick={() => onHandleCart(product)}
          >
            <img src={minosIcon} alt="imagem de subtração" />
          </button>
        </div>
      </div>
    </div>
  );
}
