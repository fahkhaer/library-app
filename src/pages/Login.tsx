import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useLogin } from '@/api/auth';
import { useAppDispatch } from '@/redux/store';
import { setUser } from '@/redux/slices/authSlice';
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Eye, EyeOff } from 'lucide-react';
import Container from '@/components/layout/Container';

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});
type FormValues = z.infer<typeof formSchema>;

function Login() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { email: '', password: '' },
  });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const loginMutation = useLogin();

  const onSubmit = (values: FormValues) => {
    loginMutation.mutate(values, {
      onSuccess: (data) => {
        localStorage.setItem('token', data.token);
        dispatch(setUser(data.user));
        navigate('/user'); // redirect setelah login
      },
      onError: (err) => console.error(err),
    });
  };

  return (
    <Container className='h-screen flex items-center'>
      <div className='w-full mx-auto max-w-md space-y-5'>
        <img
          src='/logotext.png'
          alt='logo'
         className="h-9" 
        />
        <h1>Login</h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type='email' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='password'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <div className='relative'>
                      <Input
                        type={showPassword ? 'text' : 'password'}
                        {...field}
                        className='pr-10'
                      />
                      <button
                        type='button'
                        onClick={() => setShowPassword(!showPassword)}
                        className='absolute right-3 top-1/2 -translate-y-1/2'
                      >
                        {showPassword ? (
                          <EyeOff size={18} />
                        ) : (
                          <Eye size={18} />
                        )}
                      </button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button variant='secondary' type='submit' className='w-full'>
              Login
            </Button>
          </form>
        </Form>
      </div>
    </Container>
  );
}

export default Login;
