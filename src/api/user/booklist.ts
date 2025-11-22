import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

export const baseUrl = 'https://be-library-api-xh3x6c5iiq-et.a.run.app';

export function GetBooklist() {
  return useQuery({
    queryKey: ['books'],
    queryFn: async () => {
      const res = await axios.get(`${baseUrl}/api/books`);

      return res.data.data.books;
    },
      refetchOnWindowFocus: true,
  refetchOnReconnect: true,
  });
}

export function Bookrecomendation() {
  return useQuery({
    queryKey: ['bookrecomendation'],
    queryFn: async () => {
      const res = await axios.get(`${baseUrl}/api/books/recommend`);
      return res.data.data.books;
    },
  });
}

export function Detailbook(id: number) {
  return useQuery({
    queryKey: ['detailbook', id],
    queryFn: async () => {
      const res = await axios.get(`${baseUrl}/api/books/${id}`);

      return res.data.data;
    },
  });
}

