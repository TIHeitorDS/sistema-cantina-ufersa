import { useEffect, useState } from "react";
import Check from "../assets/check.svg";
import type { Item, Order } from "../utils/definitions";
import { fetchItem } from "../utils/query";

export default function ClientReq({ order }: { order: Order }) {
  const [products, setProducts] = useState<Item[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productIds = Array.isArray(order.produto)
          ? order.produto.map((p) => (typeof p === "number" ? p : p.id))
          : [];
        const productPromises = productIds.map((productId) =>
          fetchItem(productId)
        );

        const productsData = await Promise.all(productPromises);

        setProducts(productsData);
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="bg-[#ffffff] divide-y p-3.5 rounded-lg shadow-md">
      <div>
        <p className="font-medium pb-3.5 text-[24px]">{order.nome_cliente}</p>
      </div>

      <div className="py-3.5">
        <p>
          Pedido <span className="italic">nº</span> {order.id}
        </p>

        <ul className="list-disc list-inside">
          {products.map((product) => (
            <li key={product.id} className="py-1">
              <span>{product.nome}</span>
            </li>
          ))}
        </ul>

        {order.observacao && (
          <p className="text-gray-500 mt-2 font-lato">
            Observação: <span className="italic">{order.observacao}</span>
          </p>
        )}
      </div>

      <div className="pt-3.5 flex items-center justify-between">
        <p>
          Total a pagar:{" "}
          <span className="font-bold">
            R${" "}
            {products.reduce(
              (total, product) => total + Number(product.preco),
              0
            )}
          </span>
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
