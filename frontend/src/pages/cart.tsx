import { useCart } from "../shared/hooks/useCart";
import AppLayout from "../ui/app-layout";
import ItemCard from "../components/item-card";

export default function Cart() {
  const { cart, removeItemFromCart } = useCart();

  return (
    <AppLayout title="Carrinho de compras">
      {cart.length > 0 ? (
        <>
          <div className="mx-auto mt-6 grid grid-cols-2 gap-4 lg:grid-cols-5">
            {cart.map((item) => (
              <ItemCard
                key={item.id}
                item={item}
                onHandleCart={removeItemFromCart}
              />
            ))}
          </div>

          <div className="p-8">
            <button
              type="button"
              className="bg-orange h-fit w-full rounded-[23px] py-2.75 text-xl text-white"
            >
              Realizar pedido
            </button>
          </div>
        </>
      ) : (
        <p className="text-center text-black/25">Seu carrinho está vazio</p>
      )}
    </AppLayout>
  );
}
