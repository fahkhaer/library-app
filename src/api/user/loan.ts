import { baseUrl } from '@/config/config';
import { useMutation, useQuery } from '@tanstack/react-query';
import axios, { AxiosError } from 'axios';
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

export function GetMyLoan() {
  return useQuery({
    queryKey: ['loan'],
    queryFn: async () => {
      const token = localStorage.getItem('token');

      const res = await axios.get(`${baseUrl}/api/me/loans`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return res.data.data.loans;
    },
    refetchOnWindowFocus: true,
    refetchOnReconnect: true,
  });
}
