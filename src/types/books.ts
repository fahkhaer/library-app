export type Author = {
  id: number;
  name: string;
  bio: string;
  createdAt: string;
  updatedAt: string;
};

export type Category = {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export type Book = {
  id: number;
  title: string;
  description: string;
  isbn: string;
  publishedYear: number;
  coverImage: string | null;
  rating: number;
  reviewCount: number;
  totalCopies: number;
  availableCopies: number;
  borrowCount: number;
  authorId: number;
  categoryId: number;
  createdAt: string;
  updatedAt: string;
  Author: Author;
  Category: Category;
  isActive: boolean;
};

export type AddBookForm = {
  title: string;
  description: string;
  isbn: string;
  publishedYear: number;
  coverImage: string;
  authorId: number;
  categoryId: number;
  totalCopies: number;
  availableCopies: number;
};
