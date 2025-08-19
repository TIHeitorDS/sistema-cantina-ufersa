import ItemCard from "../components/item-card";
import { useUser } from "../shared/hooks/useUser";
import AppLayout from "../ui/app-layout";

export default function UserOrderList() {
  const { user, removeItemFromOrder } = useUser();

  return (
    <AppLayout title="Meus pedidos">
      <div className="mx-auto mt-6 grid grid-cols-2 gap-4 lg:grid-cols-5">
        {(user?.orders ?? []).length > 0 ? (
          (user?.orders ?? []).map((order) => (
            <ItemCard
              onHandleCart={removeItemFromOrder}
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
  );
}
