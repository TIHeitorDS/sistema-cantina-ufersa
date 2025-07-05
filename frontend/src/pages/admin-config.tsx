import { Link } from "react-router";
import { useEffect, useState } from "react";
import { fetchOrders } from "../utils/query";
import Bolt from "../assets/bolt.svg";
import ClientReq from "../components/client-req";
import type { Order } from "../utils/definitions";

export default function AdminConfig() {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const getOrders = async () => {
      try {
        const data = await fetchOrders();
        setOrders(data);
      } catch (error) {
        console.error("Erro ao buscar pedidos:", error);
      }
    };

    getOrders();
  }, []);
  return (
    <>
      <div className="bg-[#005C73] text-white pt-27 pb-5 px-6 text-center text-[32px] font-bold flex items-center justify-between">
        <p className="grow">Lista de pedidos</p>

        <Link to="/admin/config">
          <img src={Bolt} alt="" />
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-4 mt-5 px-9.25">
        {orders.length > 0 ? (
          orders.map((order) => <ClientReq key={order.id} order={order} />)
        ) : (
          <p className="text-center text-gray-500">Nenhum pedido encontrado.</p>
        )}
      </div>
    </>
  );
}
