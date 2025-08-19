import { useCart } from "../shared/hooks/useCart";
import AppLayout from "../ui/app-layout";
import ItemCard from "../components/item-card";

export default function Cart() {
  const { cart, removeItemFromCart } = useCart();

  return (
    <AppLayout title="Carrinho de compras">
      {cart.length > 0 ? (
        <>
          <div className="mt-6 grid grid-cols-2 lg:grid-cols-5 mx-auto gap-4">
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
              className="bg-orange w-full rounded-[23px] h-fit py-2.75 text-white text-xl"
            >
              Realizar pedido
            </button>
          </div>
        </>
      ) : (
        <p className="h-full flex items-center justify-center text-xl text-black/25">
          Seu carrinho está vazio
        </p>
      )}
    </AppLayout>
  );
}
