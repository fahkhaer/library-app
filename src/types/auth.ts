export type User = {
  id: number;
  name: string;
  email: string;
  phone: string;
  role: string;
};

export type LoginResponse = {
  token: string;
  user: User;
};

export type RegisterPayload = {
  name: string;
  email: string;
  phone: string;
  password: string;
};

export type RegisterResponse = {
  message: string;
  user: User;
};
