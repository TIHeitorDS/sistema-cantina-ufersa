export interface Item {
  id: number; // Optional for new items
  nome: string;
  preco: string;
  imagem: string;
  disponivel: boolean;
}

export interface Order {
  id: number;
  nome_cliente: string;
  observacao: string;
  produto: Item[];
  produtos?: string[]; // Optional, used for displaying product names
  preco?: number[]; // Optional, used for displaying product prices
}

export interface CurrentOrder {
  id: number;
  nome_cliente: string;
  observacao: string;
  produtos: String[];
}