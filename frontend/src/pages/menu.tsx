import { items } from "../utils/data";
import ItemCard from "../components/item-card";
import AppLayout from "../ui/app-layout";

export default function Menu() {
  return (
    <AppLayout title="Menu">
      <div className="mt-6 grid grid-cols-2 lg:grid-cols-5 mx-auto gap-4">
        {items.map(
          (item) => item.disponivel && <ItemCard key={item.id} item={item} />
        )}
      </div>
    </AppLayout>
  );
}
