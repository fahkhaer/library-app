import Container from '@/components/layout/Container';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

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
import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});
type FormValues = z.infer<typeof formSchema>;

function Login() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  function onSubmit(values: FormValues) {
    console.log(values);
  }

  const [showPassword, setShowPassword] = useState(false);

  return (
    <Container className='h-screen flex items-center'>
      <div className='w-full mx-auto max-w-md space-y-5'>
        <img className='h-9' src='/logotext.png' alt='Logo-text' />

        <div>
          <h1>Login</h1>
          <p className='text-md-semibold leading-7'>
            Sign in to manage your library account.
          </p>
        </div>

        {/* FORM*/}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
            {/* EMAIL FIELD */}
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-sm-bold leading-7'>
                    Email
                  </FormLabel>
                  <FormControl>
                    <Input type='email' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* PASSWORD FIELD */}
            <FormField
              control={form.control}
              name='password'
              render={({ field }) => (
                <FormItem className=''>
                  <FormLabel className='text-sm-bold leading-7'>
                    Password
                  </FormLabel>
                  <FormControl>
                    <div className='relative'>
                      <Input type='password' {...field} className='pr-10' />

                      <button
                        type='button'
                        onClick={() => setShowPassword(!showPassword)}
                        className='absolute right-3 top-1/2 -translate-y-1/2 text-gray-500'
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

            <Button variant={'secondary'} type='submit' className='w-full'>
              Login
            </Button>
            <div className='flex items-center gap-1 justify-center '>
              <span className=' text-md-semibold'>
                Don&apos;t have an account?{' '}
              </span>{' '}
              <Button variant='link' className='p-0'>
                <h3 className=' text-[#1C65DA]'>Register</h3>
              </Button>{' '}
            </div>
          </form>
        </Form>
      </div>
    </Container>
  );
}

export default Login;
