import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { baseUrl } from './booklist';
import axios from 'axios';

export function GetCart() {
  return useQuery({
    queryKey: ['cart'],
    queryFn: async () => {
      const res = await axios.get(`${baseUrl}/api/cart`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });

      return res.data.data;
    },
    refetchOnWindowFocus: true,
    refetchOnReconnect: true,
  });
}

export const useAddCart = () => {
  const token = localStorage.getItem('token');
  try {
    return useMutation({
      mutationFn: async (payload: { bookId: number; qty: number }) => {
        const res = await axios.post(`${baseUrl}/api/cart/items`, payload, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });
        if (!res) {
          throw new Error('out of stock');
        }

        return res.data.data;
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const useDeleteCart = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () => {
      const res = await axios.delete(`${baseUrl}/api/cart`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cart'] });
    },
  });
};