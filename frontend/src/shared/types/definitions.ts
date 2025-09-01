export interface Customer {
  id?: number;
  name: string | undefined;
  phone: string | undefined;
}

export interface Product {
  id: number; // Optional for new items
  name: string;
  price: string;
  image: string;
  isAvailable: boolean;
}

export interface Order {
  id: number;
  nomeCliente: string;
  pedidos: Product[];
}

export interface CurrentOrder {
  id: number;
  nome_cliente: string;
  observacao: string;
  produtos: String[];
}
