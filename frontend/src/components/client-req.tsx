import Check from "../assets/check.svg";

export default function ClientReq() {
  return (
    <div className="bg-[#ffffff] divide-y p-3.5 rounded-lg shadow-md">
      <div>
        <p className="font-medium pb-3.5 text-[24px]">Nome do cliente</p>
      </div>

      <div className="py-3.5">
        <p>
          Pedido <span className="italic">nº</span> 01
        </p>

        <ul className="list-disc list-inside">
          <li>cachorro-quente</li>
          <li>cachorro-quente</li>
          <li>cachorro-quente</li>
        </ul>
      </div>

      <div className="pt-3.5 flex items-center justify-between">
        <p>
          Total a pagar: <span className="font-bold">R$ 10,00</span>
        </p>

        <button
          type="button"
          className="bg-orange rounded-[10px] w-9 h-9 flex items-center justify-center"
        >
          <img src={Check} alt="" />
        </button>
      </div>
    </div>
  );
}
