import type { Item } from "./definitions";

export async function fetchItems(): Promise<any[]> {
  const response = await fetch("https://cantina-api.heitor.grupo-02.dependabilidade.ufersa.dev.br/api/produtos/");
  if (!response.ok) {
    throw new Error("Erro ao buscar produtos");
  }
  const data: Item[] = await response.json();
  return Array.isArray(data) ? data : [];
}

export async function fetchItem(id: number): Promise<Item> {
  const response = await fetch(`https://cantina-api.heitor.grupo-02.dependabilidade.ufersa.dev.br/api/produtos/${id}/`);
  if (!response.ok) {
    throw new Error("Erro ao buscar produto");
  }
  const item: Item = await response.json();
  return item;
}

export async function createItem(
  nome: string,
  preco: number,
  disponivel: boolean,
  imagem: File
): Promise<Item> {
  const formData = new FormData();
  formData.append("nome", nome);
  formData.append("preco", preco.toString());
  formData.append("disponivel", String(disponivel));
  formData.append("imagem", imagem);

  const response = await fetch("https://cantina-api.heitor.grupo-02.dependabilidade.ufersa.dev.br/api/produtos/", {
    method: "POST",
    body: formData,
  });
  if (!response.ok) {
    throw new Error("Erro ao cadastrar produto");
  }
  return await response.json();
}

export async function deleteItem(id: number): Promise<void> {
  const response = await fetch(`https://cantina-api.heitor.grupo-02.dependabilidade.ufersa.dev.br/api/produtos/${id}/`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Erro ao excluir produto");
  }
  return;
}

export async function updateItem(item: Item): Promise<Item> {
  const formData = new FormData();
  formData.append("nome", item.nome);
  formData.append("preco", item.preco.toString());
  formData.append("disponivel", String(item.disponivel));
  if (item.imagem) {
    formData.append("imagem", item.imagem);
  }

  const response = await fetch(
    `https://cantina-api.heitor.grupo-02.dependabilidade.ufersa.dev.br/api/produtos/${item.id}/`,
    {
      method: "PUT",
      body: formData,
    }
  );
  if (!response.ok) {
    throw new Error("Erro ao atualizar produto");
  }
  return await response.json();
}

export async function fetchOrders(): Promise<any[]> {
  const response = await fetch("https://cantina-api.heitor.grupo-02.dependabilidade.ufersa.dev.br/api/pedidos/");
  if (!response.ok) {
    throw new Error("Erro ao buscar pedidos");
  }
  const data: any[] = await response.json();
  return Array.isArray(data) ? data : [];
}

export async function makeOrder(
  nome: string,
  observacao: string,
  itens: number[]
): Promise<any> {
  const response = await fetch("https://cantina-api.heitor.grupo-02.dependabilidade.ufersa.dev.br/api/pedidos/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      produto: itens,
      nome_cliente: nome,
      obersarvacao: observacao,
    }),
  });
  if (!response.ok) {
    throw new Error("Erro ao realizar pedido");
  }
  return await response.json();
}

export async function deleteOrder(id: number): Promise<void> {
  const response = await fetch(`https://cantina-api.heitor.grupo-02.dependabilidade.ufersa.dev.br/api/pedidos/${id}/`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Erro ao excluir pedido");
  }
  return;
}
