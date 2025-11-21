import Container from '@/components/layout/Container';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import CardList from '@/components/ui/CardList';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Calendar as CalendarIcon } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

function Checkout() {
  const [date, setDate] = React.useState<Date | undefined>(undefined);

  return (
    <Container className='pb-[100px]'>
      <h1 className='pb-8 text-display-lg'>Checkout</h1>

      <div className='md:flex gap-10'>
        {/* left side */}
        <div className='flex-1 space-y-8 divide-y divide-neutral-300 '>
          <div className='flex flex-col gap-4'>
            <p className='text-display-xs font-bold'>User Information</p>

            <div className='flex justify-between'>
              <h4>Name</h4>
              <h3>JohnDoe</h3>
            </div>

            <div className='flex justify-between'>
              <h4>Email</h4>
              <h3>johndoe@email.com</h3>
            </div>

            <div className='flex justify-between'>
              <h4>Nomor Handphone</h4>
              <h3>081234567890</h3>
            </div>
          </div>

          {/* cards */}
          <div>
            <p className='text-display-xs pt-8 font-bold'>Book List</p>

            <div className='flex py-6 w-full gap-4'>
              <Checkbox id='b1' />
              <CardList />
            </div>

            <div className='flex py-6 w-full gap-4'>
              <Checkbox id='b2' />
              <CardList />
            </div>
          </div>
        </div>

        {/* right */}
        <div className='flex-1 space-y-6 md:w-[318px] p-4 shadow-card bg-white rounded-2xl'>
          <p className='text-xl font-bold'>Complete Your Borrow Request</p>

          {/* Borrow Date */}
          <div className='flex flex-col space-y-2'>
            <h3>Borrow Date</h3>

            <Popover>
              <PopoverTrigger>
                <div className='bg-[#F5F5F5] border border-[#D5D7DA] w-full h-12 rounded-xl py-2 px-4 flex items-center justify-between cursor-pointer'>
                  <p className='text-md font-semibold'>
                    {date ? date.toLocaleDateString() : 'Select date'}
                  </p>
                  <CalendarIcon />
                </div>
              </PopoverTrigger>

              <PopoverContent className='w-auto p-0 bg-white rounded-xl'>
                <Calendar mode='single' selected={date} onSelect={setDate} />
              </PopoverContent>
            </Popover>
          </div>

          {/* Borrow Duration */}
          <div className='space-y-3'>
            <h3>Borrow Duration</h3>

            <RadioGroup defaultValue='3' className='space-y-2'>
              <div className='flex items-center space-x-2'>
                <RadioGroupItem value='3' id='r3' />
                <label className='text-md font-semibold' htmlFor='r3'>
                  3 Days
                </label>
              </div>

              <div className='flex items-center space-x-2'>
                <RadioGroupItem value='5' id='r5' />
                <label className='text-md font-semibold' htmlFor='r5'>
                  5 Days
                </label>
              </div>

              <div className='flex items-center space-x-2'>
                <RadioGroupItem value='10' id='r10' />
                <label className='text-md font-semibold' htmlFor='r10'>
                  10 Days
                </label>
              </div>
            </RadioGroup>
          </div>

          {/* Return Date */}
          <div className='p-4 rounded-xl bg-[#F6F9FE] space-y-1'>
            <h3>Return Date</h3>
            <p className='text-md-medium text-neutral-950'>
              Please return the book no later than
              <span className='text-[#EE1D52]'> 31 August 2025</span>
            </p>
          </div>

          {/* Agreements */}
          <div className='space-y-2'>
            <div className='flex items-center space-x-2'>
              <Checkbox id='c1' />
              <label className='text-md font-semibold' htmlFor='c1'>
                I agree to return the book(s) before the due date.
              </label>
            </div>

            <div className='flex items-center space-x-2'>
              <Checkbox id='c2' />
              <label className='text-md font-semibold' htmlFor='c2'>
                I accept the library borrowing policy.
              </label>
            </div>
          </div>

          {/* Button */}
          <Button className='w-full' variant='secondary'>
            <Link to={'/success'}>Confirm & Borrow</Link>
          </Button>
        </div>
      </div>
    </Container>
  );
}

export default Checkout;
