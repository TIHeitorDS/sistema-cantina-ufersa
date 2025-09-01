import type { Product, Customer } from "./definitions";

export async function getProducts(): Promise<Product[]> {
  try {
    const response = await fetch("http://localhost:8000/api/items/");

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

export async function getCustomer(id: number): Promise<Customer | null> {
  try {
    const response = await fetch(`http://localhost:8000/api/customers/${id}/`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    const customer = await response.json();

    return customer;
  } catch (error) {
    return null;
  }
}

export async function createCustomer(data: Customer) {
  try {
    const reponse = await fetch("http://localhost:8000/api/customers/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const newCostumer: Customer = await reponse.json();

    return newCostumer;
  } catch (error) {
    console.error(error);
    return null;
  }
}
