import { createContext, useState } from "react";
import type { Customer } from "../utils/definitions";

interface CustomerContextType {
  customer: Customer | null;
  setCustomer: (user: Customer | null) => void;
}

export const CustomerContext = createContext<CustomerContextType>({
  customer: null,
  setCustomer: () => {},
});

export default function UserProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [customer, setCustomer] = useState<Customer | null>(null);

  return (
    <CustomerContext.Provider
      value={{ customer: customer, setCustomer: setCustomer }}
    >
      {children}
    </CustomerContext.Provider>
  );
}
