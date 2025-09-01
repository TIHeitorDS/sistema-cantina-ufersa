import type { Product } from "../definitions";
export async function getProducts(): Promise<Product[]> {
  try {
    const response = await fetch("http://localhost:8000/api/products/");

    if (!response.ok) {
      throw new Error(`Erro ao buscar itens: ${response.statusText}`);
    }

    const data: Product[] = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
}
