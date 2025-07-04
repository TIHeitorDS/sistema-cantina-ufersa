import { Link } from "react-router";
import arrowLeft from "../assets/arrow-left.svg";
import MyItemCart from "../components/my-item-cart";

export default function Cart() {
  return (
    <>
      <div className="bg-blue">
        <div className="px-5 pb-5 pt-27 flex items-center justify-between gap-0.5">
          <Link
            to={"/"}
            className="flex items-center justify-center cursor-pointer"
          >
            <img
              src={arrowLeft}
              alt="ícone do botão para voltar à página anterior"
              className="w-6 h-6 object-cover"
            />
          </Link>

          <p className="grow text-white text-4xl text-center">
            Carrinho de compras
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-9 pt-5 px-9.25">
        <MyItemCart />

        <div className="w-full">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Seu nome completo"
            className="bg-[#ffffff] border border-gray/50 p-[10px] rounded-xl w-full outline-none transition-all focus:ring-1 focus:ring-orange"
          />

          <textarea
            name="observacao"
            id="observacao"
            placeholder="Observação"
            className="bg-[#ffffff] border border-gray/50 p-[10px] rounded-xl w-full mt-4 outline-none transition-all focus:ring-1 focus:ring-orange h-[100px] resize-none"
          ></textarea>

          <button
            type="button"
            className="bg-orange text-white w-full rounded-xl py-[10px] mt-4"
          >
            Relizar pedido
          </button>
        </div>
      </div>
    </>
  );
}
