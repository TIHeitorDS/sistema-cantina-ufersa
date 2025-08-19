import { createContext, useState } from "react";
import type { Item, User } from "../utils/definitions";

interface UserContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  addItemToOrder: (item: Item) => void;
  removeItemFromOrder: (item: Item) => void;
}

export const UserContext = createContext<UserContextType>({
  user: null,
  setUser: () => {},
  addItemToOrder: () => {},
  removeItemFromOrder: () => {},
});

export default function UserProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<User | null>(null);

  const addItemToOrder = (item: Item) => {
    if (user) {
      setUser({ ...user, orders: [...(user.orders || []), item] });
    }
  };

  const removeItemFromOrder = (item: Item) => {
    const response = confirm(
      "Do you want to remove this item from your order?",
    );

    if (response && user) {
      setUser({
        ...user,
        orders: user.orders.filter((order) => order.id !== item.id),
      });
    }
  };

  return (
    <UserContext.Provider
      value={{ user, setUser, addItemToOrder, removeItemFromOrder }}
    >
      {children}
    </UserContext.Provider>
  );
}
