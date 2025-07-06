import { Link } from "react-router";

export default function Footer({ itemsQty }: { itemsQty: number }) {
  return (
    <footer className="bg-blue fixed inset-x-0 bottom-0 rounded-tl-[50%] rounded-tr-[50%] h-16">
      <div className="flex items-center justify-center bg-white w-fit p-2 mx-auto rounded-[50%] relative -top-12">
        <Link
          to={"carrinho-de-compras"}
          className="bg-orange rounded-full p-4 flex items-center relative justify-center w-fit"
        >
          <p className="absolute bg-white w-6 h-6 rounded-full left-12 top-4 text-center leading-tight">
            {itemsQty}
          </p>
          <img
            src="/shopping-cart.svg"
            alt="imagem de carrinho de compras"
            className="w-12 h-12"
          />
        </Link>
      </div>
    </footer>
  );
}
