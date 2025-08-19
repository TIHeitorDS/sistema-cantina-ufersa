import { useCart } from "../shared/hooks/useCart";
import { useUser } from "../shared/hooks/useUser";
import AppLayout from "../ui/app-layout";
import ItemCard from "../components/item-card";
import clsx from "clsx";

export default function Cart() {
  const { cart, removeItemFromCart, removeAllItemsFromCart } = useCart();
  const { user, addItemToOrder } = useUser();

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
              className={clsx(
                "bg-orange h-fit w-full rounded-[23px] py-2.75 text-xl text-white",
                !user && "disabled:opacity-50",
              )}
              disabled={!user}
              onClick={() => {
                if (user) {
                  const confirm = window.confirm(
                    "Do you want to place the order?",
                  );
                  if (confirm) {
                    cart.forEach((item) => addItemToOrder(item));
                    removeAllItemsFromCart();
                  }
                }
              }}
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
