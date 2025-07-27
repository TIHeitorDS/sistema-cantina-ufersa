import { Link } from "react-router";
import { useEffect, useState } from "react";
import { fetchOrders } from "../utils/query";
import Bolt from "../assets/bolt.svg";
import ClientReq from "../components/client-req";
import type { Order } from "../utils/definitions";

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
      <div className="bg-[#005C73] text-white pt-27 pb-5 px-6 text-center text-[32px] font-bold flex items-center justify-between">
        <p className="grow">Lista de pedidos</p>

        <Link to="/admin/config">
          <img src={Bolt} alt="" />
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-4 mt-5 px-9.25">
        {orders.length > 0 ? (
          orders.map((order) => <ClientReq key={order.id} orders={order} />)
        ) : (
          <p className="text-center text-gray-500">Nenhum pedido encontrado.</p>
        )}
      </div>
    </>
  );
}
