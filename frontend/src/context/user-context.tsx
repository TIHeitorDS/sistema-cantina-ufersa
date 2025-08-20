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
    setUser((prev) => {
      if (!prev) return prev;
      return { ...prev, orders: [...(prev.orders || []), item] };
    });
  };

  const removeItemFromOrder = (item: Item) => {
    setUser((prev) => {
      if (!prev) return prev;
      return {
        ...prev,
        orders: (prev.orders ?? []).filter((order) => order.id !== item.id),
      };
    });
  };

  return (
    <UserContext.Provider
      value={{ user, setUser, addItemToOrder, removeItemFromOrder }}
    >
      {children}
    </UserContext.Provider>
  );
}
