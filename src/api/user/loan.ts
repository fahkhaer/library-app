import { useMutation } from '@tanstack/react-query';
import axios, { AxiosError } from 'axios';
import { baseUrl } from './booklist';

type PayloadLoan = {
  bookId: number;
  days: number;
};

export const AddLoan = () => {
  const token = localStorage.getItem('token');
 

  return useMutation({
    mutationFn: async (payload: PayloadLoan) => {
      try {
        const res = await axios.post(`${baseUrl}/api/loans`, payload, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        return res.data.data;
      } catch (err: unknown) {
        const error = err as AxiosError;

        console.log('ERROR RESPONSE:', error.response?.data);
        throw error;
      }
    },
  });
};
