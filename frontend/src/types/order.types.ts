export interface OrderCustomer {
  name: string;
  phone: string;
  email?: string;
}

export interface Order {
  id: number;
  customer: OrderCustomer;
  totalPrice: number;
  status: "new" | "processing" | "completed" | "cancelled";
  createdAt: string;
}