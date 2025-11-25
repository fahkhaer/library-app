export type Loan = {
  id: number;
  userId: number;
  bookId: number;
  status: 'BORROWED' | 'RETURNED';
  borrowedAt: string;
  dueAt: string;
  returnedAt: string | null;
  Book: {
    id: number;
    title: string;
    coverImage: string;
  };
};
