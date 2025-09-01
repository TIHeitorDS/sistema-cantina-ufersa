import type { Order } from "../shared/types/definitions";

export default function ClientReq({ orders }: { orders: Order }) {
  return (
    <div className="divide-y rounded-lg bg-[#ffffff] p-3.5 shadow-md">
      <h3 className="font-bold">Pedido #{orders.id}</h3>
    </div>
  );
}
