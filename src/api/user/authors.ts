import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { baseUrl } from '@/config/config';

export function GetAuthors() {
  return useQuery({
    queryKey: ['authors'],
    queryFn: async () => {
      const res = await axios.get(`${baseUrl}/api/authors`);
      return res.data.data.authors;
    },
  });
}

export function BooksByAuthor(id: number) {
  return useQuery({
    queryKey: ['booksbyauthor', id],
    queryFn: async () => {
      const res = await axios.get(`${baseUrl}/api/authors/${id}/books`);
      return res.data.data;
    },
  });
}
