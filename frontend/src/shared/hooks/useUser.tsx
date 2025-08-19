import { useContext } from "react";
import { UserContext } from "../../context/user-context";

export function useUser() {
  return useContext(UserContext);
}
