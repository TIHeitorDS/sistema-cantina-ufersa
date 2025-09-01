import type { Product } from "../types/definitions";
import { api } from "./base";

export async function getProducts(): Promise<Product[]> {
  try {
    const response = await api.get<Product[]>("/products");

    if (response.status !== 200) {
      throw new Error(`Erro ao buscar itens: ${response.statusText}`);
    }

    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
}
