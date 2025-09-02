import { Link } from "react-router";
import { useEffect, useState } from "react";
import { fetchOrders } from "../utils/query";
import Bolt from "../assets/bolt.svg";
import ClientReq from "../components/client-req";
import type { Order } from "../shared/types/definitions";

export default function AdminConfig() {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const fetchInitialOrders = async () => {
      try {
        const initialOrders = await fetchOrders();
        setOrders(initialOrders);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchInitialOrders();
  }, []);

  useEffect(() => {
    const websocket = new WebSocket("ws://54.198.184.178:8000/ws/pedidos/");
    websocket.onmessage = (event) => {
      const data = JSON.parse(event.data);

      if (data.tipo === "NOVO_PEDIDO") {
        setOrders((prevOrders) => [...prevOrders, data.pedido]);
      }
    };

    return () => {
      websocket.close();
    };
  }, []);

  return (
    <>
      <div className="flex items-center justify-between bg-[#005C73] px-6 pt-27 pb-5 text-center text-[32px] font-bold text-white">
        <p className="grow">Lista de pedidos</p>

        <Link to="/admin/config">
          <img src={Bolt} alt="" />
        </Link>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-4 px-9.25">
        {orders.length > 0 ? (
          orders.map((order) => <ClientReq key={order.id} orders={order} />)
        ) : (
          <p className="text-center text-gray-500">Nenhum pedido encontrado.</p>
        )}
      </div>
    </>
  );
}
