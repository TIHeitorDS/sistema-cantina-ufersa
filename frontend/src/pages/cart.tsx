import type { Product } from "../shared/types/definitions";
import { useCart } from "../shared/hooks/useCart";
import { useCustomer } from "../shared/hooks/useCustomer";
import { useState } from "react";
import AppLayout from "../ui/app-layout";
import ItemCard from "../components/item-card";
import clsx from "clsx";
import ConfirmDialog from "../ui/confirm-dialog";
import SucessPopup from "../ui/sucess-popup";

export default function Cart() {
  const { cart, removeItemFromCart, removeAllItemsFromCart } = useCart();
  const { customer: user, addItemToOrder } = useCustomer();
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const onHandleOrder = (cart: Product[]) => {
    cart.forEach((item) => {
      addItemToOrder(item);
    });

    removeAllItemsFromCart();
    setShowConfirmDialog(false);
    setShowSuccessPopup(true);

    setTimeout(() => {
      setShowSuccessPopup(false);
    }, 2000);
  };

  return (
    <>
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
            onConfirm={() => onHandleOrder(cart)}
            onCancel={() => setShowConfirmDialog(false)}
          />
        )}
      </AppLayout>

      {showSuccessPopup && <SucessPopup text="Pedido realizado com sucesso!" />}
    </>
  );
}
