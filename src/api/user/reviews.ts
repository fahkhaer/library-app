import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { baseUrl } from './booklist';

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
