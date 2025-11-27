import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { baseUrl } from '../user/booklist';

export function GetUsers() {
  const token = localStorage.getItem('token');

  return useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await axios.get(`${baseUrl}/api/admin/users`, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      return res.data.data.users;
    },
    refetchOnWindowFocus: true,
    refetchOnReconnect: true,
  });
}

export function GetUsersPage() {
  const token = localStorage.getItem('token');

  return useQuery({
    queryKey: ['userspage'],
    queryFn: async () => {
      const res = await axios.get(`${baseUrl}/api/admin/users`, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      return res.data.data.pagination;
    },
    refetchOnWindowFocus: true,
    refetchOnReconnect: true,
  });
}
