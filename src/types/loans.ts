export type Loan = {
  id: number;
  userId: number;
  bookId: number;
  status: 'BORROWED' | 'RETURNED' | 'LATE';
  borrowedAt: string;
  dueAt: string;
  returnedAt: string | null;
  Book?: {
    id: number;
    title: string;
    coverImage: string;
    Author?: {
      id: number;
      name: string;
    };
  };
  User?: {
    id: number;
    name: string;
    email: string;
  };
};
