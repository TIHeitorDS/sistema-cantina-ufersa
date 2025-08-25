import type { Item } from "./definitions";

export async function getItems(): Promise<Item[]> {
  try {
    const response = await fetch("http://localhost:8000/api/items/");

    if (!response.ok) {
      throw new Error(`Erro ao buscar itens: ${response.statusText}`);
    }

    const data: Item[] = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
}
