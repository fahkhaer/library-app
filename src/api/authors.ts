import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { baseUrl } from './booklist';

export function GetAuthors() {
  return useQuery({
    queryKey: ['authors'],
    queryFn: async () => {
      const res = await axios.get(`${baseUrl}/api/authors`);
      return res.data.data.authors;
    },
  });
}
