import { useState } from "react";
import { useCustomer } from "../shared/hooks/useCustomer";
import ItemCard from "../components/item-card";
import AppLayout from "../ui/app-layout";
import ConfirmDialog from "../ui/confirm-dialog";
import type { Product } from "../shared/types/definitions";

export default function UserOrderList() {
  const { customer: user, removeItemFromOrder } = useCustomer();
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [selectedItem, setSelectedItem] = useState<Product | null>(null);

  const handleRemoveItem = () => {
    if (!selectedItem) return;

    removeItemFromOrder(selectedItem);
    setShowConfirmDialog(false);
  };

  return (
    <>
      <AppLayout title="Meus pedidos">
        <div className="mx-auto mt-6 grid grid-cols-2 gap-4 lg:grid-cols-5">
          {(user?.orders ?? []).length > 0 ? (
            (user?.orders ?? []).map((order) => (
              <ItemCard
                onHandleCart={() => {
                  setShowConfirmDialog(true);
                  setSelectedItem(order);
                }}
                key={order.id}
                item={order}
              />
            ))
          ) : (
            <p className="col-span-2 text-center text-black/25">
              Nenhum pedido encontrado.
            </p>
          )}
        </div>
      </AppLayout>

      {showConfirmDialog && (
        <ConfirmDialog
          title="Deseja remover este pedido?"
          onConfirm={handleRemoveItem}
          onCancel={() => setShowConfirmDialog(false)}
        />
      )}
    </>
  );
}
