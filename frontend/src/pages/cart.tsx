import { useCart } from "../shared/hooks/useCart";
import { useCustomer } from "../shared/hooks/useCustomer";
import { useState } from "react";
import AppLayout from "../ui/app-layout";
import clsx from "clsx";
import ConfirmDialog from "../ui/confirm-dialog";
import CartCard from "../components/cart-card";

export default function Cart() {
  const { cart, handleRemoveProduct, removeAllItemsFromCart } = useCart();
  const { customer: user } = useCustomer();
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);

  const onHandleOrder = () => {
    removeAllItemsFromCart();
    setShowConfirmDialog(false);
  };

  return (
    <>
      <AppLayout title="Carrinho de compras">
        {cart.length > 0 ? (
          <>
            <div className="mx-auto mt-6 grid grid-cols-2 gap-4 lg:grid-cols-5">
              {cart.map((item) => (
                <CartCard
                  key={item.id}
                  product={item}
                  onHandleCart={handleRemoveProduct}
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
                onClick={() => setShowConfirmDialog(true)}
              >
                Realizar pedido
              </button>
            </div>
          </>
        ) : (
          <p className="text-center text-black/25">Seu carrinho está vazio</p>
        )}

        {showConfirmDialog && (
          <ConfirmDialog
            title="Deseja confirmar seu pedidio?"
            onConfirm={() => onHandleOrder()}
            onCancel={() => setShowConfirmDialog(false)}
          />
        )}
      </AppLayout>
    </>
  );
}
