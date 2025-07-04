import type { Item } from "./definitions";

export async function fetchItems(): Promise<any[]> {
  const response = await fetch("http://54.226.9.223:8000/api/produtos/");
  if (!response.ok) {
    throw new Error("Erro ao buscar produtos");
  }
  const data: Item[] = await response.json();
  return Array.isArray(data) ? data : [];
}
