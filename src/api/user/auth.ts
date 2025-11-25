import axios, { AxiosError } from 'axios';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useAppDispatch } from '@/redux/store';
import { setUser, setToken } from '@/redux/slices/authSlice';
import { baseUrl } from './booklist';
import { User, RegisterPayload, RegisterResponse } from '@/types/auth';

// ------------------- LOGIN -------------------
export function useLogin() {
  const dispatch = useAppDispatch();

  return useMutation({
    mutationFn: async (payload: { email: string; password: string }) => {
      const res = await axios.post(`${baseUrl}/api/auth/login`, payload);
      return res.data.data as { token: string; user: User };
    },

    onSuccess: (data) => {
      dispatch(setToken(data.token));
      dispatch(setUser(data.user));
    },
  });
}

// ------------------- REGISTER -------------------
export function useRegister() {
  return useMutation<RegisterResponse, unknown, RegisterPayload>({
    mutationFn: async (payload) => {
      const res = await axios.post(`${baseUrl}/api/auth/register`, payload);
      return res.data.data;
    },
  });
}

// ------------------- FETCH USER -------------------
export function useFetchUser() {
  const token = localStorage.getItem('token');
  const dispatch = useAppDispatch();

  const query = useQuery({
    queryKey: ['me'],
    queryFn: async () => {
      if (!token) throw new Error('No token');

      const res = await axios.get(`${baseUrl}/api/me`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      return res.data.data.profile;
    },
    refetchOnWindowFocus: true,
    refetchOnReconnect: true,
  });

  useEffect(() => {
    if (query.data) {
      dispatch(setUser(query.data));
    }
  }, [query.data, dispatch]);

  return query;
}

// ------------------- UPDATE USER -------------------
type userProps = {
  name: string;
};

export function UpdateUser() {
  const token = localStorage.getItem('token');
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (payload: userProps) => {
      try {
        const res = await axios.patch(`${baseUrl}/api/me`, payload, {
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

    onSuccess: () => {
      queryClient.invalidateQueries();
    },
  });
}
