import { useMutation } from '@tanstack/react-query';
import axios, { AxiosError } from 'axios';
import { baseUrl } from '../user/booklist';
import { AddBookForm } from '@/types/books';

export const AddApiBook = () => {
  const token = localStorage.getItem('token');
  console.log('ayo udah add book');

  return useMutation({
    mutationFn: async (payload: AddBookForm) => {
      try {
        const res = await axios.post(`${baseUrl}/api/books`, payload, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        console.log(res);

        return res.data.data;
      } catch (err: unknown) {
        const error = err as AxiosError;

        console.log('ERROR RESPONSE:', error.response?.data);
        throw error;
      }
    },
  });
};
