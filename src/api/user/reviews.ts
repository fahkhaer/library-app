import { baseUrl } from '@/config/config';
import { useMutation, useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const AddReview = () => {
  const token = localStorage.getItem('token');

  return useMutation({
    mutationFn: async (payload: {
      bookId: number;
      star: number;
      comment: string;
    }) => {
      const res = await axios.post(`${baseUrl}/api/reviews`, payload, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      return res.data;
    },
  });
};

export function GetMyReview() {
  return useQuery({
    queryKey: ['reviews'],
    queryFn: async () => {
      const token = localStorage.getItem('token');
      const res = await axios.get(`${baseUrl}/api/me/reviews`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return res.data.data;
    },
  });
}
