import { useCart } from "../shared/hooks/useCart";
import AppLayout from "../ui/app-layout";

export default function UserOrderList() {
  const { cart } = useCart();

  return (
    <AppLayout title="Meus pedidos">
      <div className="mx-auto mt-6 grid grid-cols-2 gap-4 lg:grid-cols-5"></div>
    </AppLayout>
  );
}
