import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../api/products";

export const useProductsData = () => {
  const query = useQuery({
    queryKey: ["products"],
    queryFn: getProducts
  })

  return query;
};
