import { Book } from './books';

interface User {
  id: number;
  name: string;
}

export interface Review {
  id: number;
  star: number;
  comment: string;
  userId: number;
  bookId: number;
  createdAt: string;
  user: User;
  Book: Pick<Book, 'id' | 'title' | 'coverImage'>;
  title: string;
  coverImage: string | null;
}
