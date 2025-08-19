export interface User {
  nome: string | undefined;
  telefone: string | undefined;
  orders: Item[];
}

export interface Item {
  id: number; // Optional for new items
  nome: string;
  preco: string;
  imagem: string;
  disponivel: boolean;
}

export interface Order {
  id: number;
  nomeCliente: string;
  pedidos: Item[];
}

export interface CurrentOrder {
  id: number;
  nome_cliente: string;
  observacao: string;
  produtos: String[];
}
