import { useState, useMemo } from 'react';
import { Book } from '@/types/books';

export function useBooksWithGenre(books: Book[]) {
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(4);

  const displayedBooks = useMemo(() => {
    let filtered = books;

    if (selectedGenre) {
      filtered = books.filter(
        (book: Book) => book.Category?.name === selectedGenre
      );
    }

    return filtered.slice(0, visibleCount);
  }, [books, selectedGenre, visibleCount]);

  const handleLoadMore = () => setVisibleCount((prev) => prev + 4);

  return {
    displayedBooks,
    selectedGenre,
    setSelectedGenre,
    handleLoadMore,
  };
}
