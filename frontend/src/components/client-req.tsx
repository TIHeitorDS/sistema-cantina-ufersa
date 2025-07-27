import { useEffect, useState } from "react";
import Check from "../assets/check.svg";
import type { Item, Order } from "../utils/definitions";
import { fetchItem, deleteOrder } from "../utils/query";

export default function ClientReq({ orders }: { orders: Order }) {
  const [products, setProducts] = useState<Item[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productIds = Array.isArray(orders.produto)
          ? orders.produto.map((p) => (typeof p === "number" ? p : p.id))
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
  }, [deleteOrder]);

  return (
    <div className="bg-[#ffffff] divide-y p-3.5 rounded-lg shadow-md">
      <div>
        <p className="font-medium pb-3.5 text-[24px]">{orders.nome_cliente}</p>
      </div>

      <div className="py-3.5">
        <p>
          Pedido <span className="italic">nº</span> {orders.id}
        </p>

        <ul className="list-disc list-inside">
          {products.length > 0 &&
            products.map((product) => (
              <li key={product.id} className="py-1">
                <span>{product.nome}</span>
              </li>
            ))}

          {orders.produtos &&
            orders.produtos.map((prod, key) => (
              <li key={key} className="py-1">
                <span>{prod}</span>
              </li>
            ))}
        </ul>

        <p className="pt-3.5 font-bold">
          {orders.observacao && orders.observacao.length > 0
            ? `Observação: ${orders.observacao}`
            : ""}
        </p>
      </div>

      <div className="pt-3.5 flex items-center justify-between">
        <p>
          Total a pagar:{" "}
          <span className="font-bold">
            R${" "}
            {products.length > 0 &&
              products.reduce(
                (total, product) => total + Number(product.preco),
                0
              )}
            {orders.preco &&
            orders.preco.reduce((total, price) => total + price, 0)
              ? ` ${orders.preco.reduce((total, price) => total + price, 0)}`
              : ""}
          </span>
        </p>

        <button
          type="button"
          className="bg-orange rounded-[10px] w-9 h-9 flex items-center justify-center"
          onClick={() => deleteOrder(orders.id)}
        >
          <img src={Check} alt="" />
        </button>
      </div>
    </div>
  );
}
