import { Detailbook } from '@/api/user/booklist';
import { AddLoan } from '@/api/user/loan';
import Container from '@/components/layout/Container';
import { Alert, AlertTitle } from '@/components/ui/alert';
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
import { RootState } from '@/redux/store';
import { ApiError } from '@/types/apierror';
import dayjs from 'dayjs';
import { Calendar as CalendarIcon, X } from 'lucide-react';
import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

function Checkout() {
  const { id } = useParams();
  const addLoan = AddLoan();
  const [date, setDate] = React.useState<Date | undefined>(undefined);
  const [duration, setDuration] = React.useState<number>(3);
  const user = useSelector((state: RootState) => state.auth.user);
  const navigate = useNavigate();

  const { data: detailBook, isLoading: isLoadingDetail } = Detailbook(
    Number(id)
  );

  const [errorMsg, setErrorMsg] = React.useState<ApiError | null>(null);
  const [showAlert, setShowAlert] = React.useState(false);

  const calculateReturnDate = () => {
    if (!date) return null;
    return dayjs(date).add(duration, 'day').format('DD MMMM YYYY');
  };

  const handleClick = () => {
    if (!date) {
      alert('Please select borrow date first!');
      return;
    }

    addLoan.mutate(
      {
        bookId: Number(id),
        days: duration,
      },
      {
        onSuccess: () => {
          const returnDate = calculateReturnDate();
          navigate('/success', { state: { returnDate } });
        },
        onError: (err: unknown) => {
          const apiErr: ApiError | undefined = (
            err as { response?: { data?: ApiError } }
          )?.response?.data;

          if (apiErr) {
            setErrorMsg(apiErr);
          } else {
            setErrorMsg({ message: 'Something went wrong', success: false });
          }
          setShowAlert(true);
        },
      }
    );
  };

  if (isLoadingDetail && id) return <p> Loading detail...</p>;

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
              <h3>{user?.name}</h3>
            </div>

            <div className='flex justify-between'>
              <h4>Email</h4>
              <h3>{user?.email}</h3>
            </div>

            <div className='flex justify-between'>
              <h4>Nomor Handphone</h4>
              <h3>-</h3>
            </div>
          </div>

          {/* cards */}
          <div>
            <p className='text-display-xs pt-8 font-bold'>Book List</p>

            <div className='flex py-6 w-full gap-4'>
              <Checkbox id='b1' />

              <CardList
                bookId={Number(id)}
                genre={detailBook.Category.name}
                title={detailBook.title}
                rating={detailBook.rating}
                author={detailBook.Author.name}
                image={detailBook.coverImage}
              />
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

            <RadioGroup
              defaultValue='3'
              onValueChange={(value) => setDuration(Number(value))}
              className='space-y-2'
            >
              {[3, 5, 10].map((d) => (
                <div key={d} className='flex items-center space-x-2'>
                  <RadioGroupItem value={d.toString()} id={`r${d}`} />
                  <label className='text-md font-semibold' htmlFor={`r${d}`}>
                    {d} Days
                  </label>
                </div>
              ))}
            </RadioGroup>
          </div>

          {/* Return Date */}
          <div className='p-4 rounded-xl bg-[#F6F9FE] space-y-1'>
            <h3>Return Date</h3>
            <p className='text-md-medium text-neutral-950'>
              Please return the book no later than
              <span className='text-[#EE1D52]'>
                {' '}
                {calculateReturnDate() || 'Please select date'}
              </span>
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
          <Button onClick={handleClick} className='w-full' variant='secondary'>
            Confirm & Borrow
          </Button>
        </div>
        {showAlert && errorMsg && (
          <Alert className='fixed bg-red-700 rounded-md top-20 w-[291px] text-white right-[120px] z-50'>
            <AlertTitle className='flex justify-between items-center w-full'>
              <p className='text-sm-semibold'>{errorMsg.message}</p>
              <X
                onClick={() => setShowAlert(false)}
                className='cursor-pointer size-4'
              />
            </AlertTitle>
          </Alert>
        )}
      </div>
    </Container>
  );
}

export default Checkout;
