import { useCart } from "../shared/hooks/useCart";
import { items } from "../utils/data";
import ItemCard from "../components/item-card";
import AppLayout from "../ui/app-layout";
import SucessPopup from "../ui/sucess-popup";

export default function Menu() {
  const { addItemToCart, showPopup } = useCart();

  return (
    <>
      <AppLayout title="Menu">
        <div className="mx-auto mt-6 grid grid-cols-2 gap-4 lg:grid-cols-5">
          {items.map(
            (item) =>
              item.disponivel && (
                <ItemCard
                  key={item.id}
                  item={item}
                  onHandleCart={addItemToCart}
                />
              ),
          )}
        </div>
      </AppLayout>

      <div className="absolute bottom-24 left-1/2 w-4/5 -translate-x-1/2 space-y-3">
        {showPopup.map((popup) => (
          <SucessPopup key={popup.id} text={popup.text} />
        ))}
      </div>
    </>
  );
}
