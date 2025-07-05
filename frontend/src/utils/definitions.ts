export interface Item {
  id: number; // Optional for new items
  nome: string;
  preco: number;
  imagem: string;
  disponivel: boolean;
}

export interface Order {
  id: number;
  nome_cliente: string;
  observacao: string;
  produto: Item[];
}
