import { useCart } from "../shared/hooks/useCart";
import AppLayout from "../ui/app-layout";
import ItemCard from "../components/item-card";

export default function Cart() {
  const { cart, removeItemFromCart } = useCart();

  return (
    <AppLayout title="Carrinho de compras">
      <div className="mt-6 grid grid-cols-2 lg:grid-cols-5 mx-auto gap-4">
        {cart.map((item) => (
          <ItemCard
            key={item.id}
            item={item}
            onHandleCart={removeItemFromCart}
          />
        ))}
      </div>
    </AppLayout>
  );
}
