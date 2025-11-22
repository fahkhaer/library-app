import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios, { AxiosError } from 'axios';
import { baseUrl } from '../user/booklist';
import { AddBookForm } from '@/types/books';

export const AddApiBook = () => {
  const token = localStorage.getItem('token');

  return useMutation({
    mutationFn: async (payload: AddBookForm) => {
      try {
        const res = await axios.post(`${baseUrl}/api/books`, payload, {
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

export const useDeleteBook = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: number) => {
      const res = await axios.delete(`${baseUrl}/api/books/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });

      return res.data;
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['books'] });
    },
  });
};

export const EditBook = () => {
  const token = localStorage.getItem('token');

  return useMutation({
    mutationFn: async ({
      payload,
      id,
    }: {
      payload: AddBookForm;
      id: number;
    }) => {
      try {
        const res = await axios.put(`${baseUrl}/api/books/${id}`, payload, {
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
