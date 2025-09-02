import { useContext } from "react";
import { CustomerContext } from "../../context/customer-context";

export function useCustomer() {
  return useContext(CustomerContext);
}
