import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { baseUrl } from './booklist';
import { Category } from '@/types/books';

export function GetCategories() {
  return useQuery<Category[]>({
    queryKey: ['categories'],
    queryFn: async () => {
      const res = await axios.get(`${baseUrl}/api/categories`);

      return res.data.data.categories;
    },
  });
}
