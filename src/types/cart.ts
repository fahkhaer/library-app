import { AddBookForm } from './books';

export type OrderItem = {
  id: number;
  bookId: number;
  qty: number;
  priceSnapshot: number;
  subtotal: number;
  book: AddBookForm;
};

export type OrderItemList = OrderItem[];


