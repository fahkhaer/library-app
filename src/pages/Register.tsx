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
import { Link, useNavigate } from 'react-router-dom';
import { useRegister } from '@/api/auth';

// FORM SCHEMA
const formSchema = z
  .object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Invalid email'),
    phone: z.string().min(10, 'Too short').max(14, 'Too long'),
    password: z.string().min(6, 'Min 6 characters'),
    passwordconfirmation: z.string().min(6, 'Min 6 characters'),
  })
  .refine((data) => data.password === data.passwordconfirmation, {
    message: 'Passwords do not match',
    path: ['passwordconfirmation'],
  });

type FormValues = z.infer<typeof formSchema>;

// REGISTER COMPONENT
function Register() {
  const navigate = useNavigate();
  const registerMutation = useRegister();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      password: '',
      passwordconfirmation: '',
    },
  });

  // SUBMIT HANDLER
  function onSubmit(values: FormValues) {
    const payload = {
      name: values.name,
      email: values.email,
      phone: values.phone,
      password: values.password,
    };

    registerMutation.mutate(payload, {
      onSuccess: () => {
        navigate('/login');
      },
      onError: (err) => {
        console.error('REGISTER ERROR:', err);
      },
    });
  }

  return (
    <Container className='h-screen flex items-center'>
      <div className='w-full mx-auto max-w-md space-y-5'>
        <img className='h-9' src='/logotext.png' alt='Logo-text' />

        <div>
          <h1 className='text-xl font-bold'>Register</h1>
          <p className='text-md-semibold leading-7 text-gray-600'>
            Create your account to start borrowing books.
          </p>
        </div>

        {/* FORM*/}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
            {/* NAME */}
            <FormField
              control={form.control}
              name='name'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder='Your name' />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* EMAIL FIELD */}
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type='email'
                      {...field}
                      placeholder='your@mail.com'
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* PHONE FIELD */}
            <FormField
              control={form.control}
              name='phone'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nomor Handphone</FormLabel>
                  <FormControl>
                    <Input type='text' {...field} placeholder='0812xxxxxx' />
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
            {/* PASSWORD CONFIRMATION */}
            <FormField
              control={form.control}
              name='passwordconfirmation'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <div className='relative'>
                      <Input
                        type={showConfirm ? 'text' : 'password'}
                        {...field}
                        className='pr-10'
                      />
                      <button
                        type='button'
                        onClick={() => setShowConfirm(!showConfirm)}
                        className='absolute right-3 top-1/2 -translate-y-1/2 text-gray-500'
                      >
                        {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
                      </button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* SUBMIT BUTTON */}
            <Button
              variant='secondary'
              type='submit'
              className='w-full'
              disabled={registerMutation.isPending}
            >
              {registerMutation.isPending ? 'Loading...' : 'Submit'}
            </Button>

            {/* LOGIN LINK */}
            <div className='flex items-center gap-1 justify-center'>
              <span>Already have an account?</span>
              <Button variant='link' className='p-0'>
                <Link to='/login'>
                  <span className='text-[#1C65DA]'>Log In</span>
                </Link>
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </Container>
  );
}

export default Register;
