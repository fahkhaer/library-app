import { Star } from 'lucide-react';
import { Badge } from './badge';
import { Button } from './button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Textarea } from './textarea';
import { AddReview } from '@/api/user/reviews';
import { useState } from 'react';

interface CardListBorrowedProps {
  variant: 'asUser' | 'asAdmin';
}

function CardListBorrowed({ variant }: CardListBorrowedProps) {
  const addReview = AddReview();
  const [star, setStar] = useState(0);
  const [comment, setComment] = useState('');

  const handleSubmit = () => {
    addReview.mutate(
      {
        bookId: 1,
        star: star,
        comment: comment,
      },
      {
        onSuccess: (data) => {
          console.log('Berhasil:', data);
        },
        onError: (err) => {
          console.log('Error:', err);
        },
      }
    );
  };

  return (
    <div className='flex flex-col md:flex-row justify-between pb-3 md:pb-5 rounded-2xl bg-white items-start md:items-center gap-4'>
      {/* left side */}
      <div className='flex gap-4'>
        <img className='h-[138px] w-auto' src='/cover.png' alt='' />
        <div className='flex flex-col gap-1'>
          <Badge variant={'outline'} className='px-2 rounded-sm'>
            Business & Economics
          </Badge>
          <h2>Book Name</h2>
          <h4>Author Name</h4>
          <span className='md:text-md-bold text-sm-bold'>
            29 Aug 2025 • Duration 3 Days
          </span>
        </div>
      </div>

      {/* right side */}
      <div className='w-full md:w-auto flex flex-col md:block gap-[13px]'>
        {variant === 'asUser' && (
          <Dialog>
            <DialogTrigger>
              <Button variant={'secondary'} className='w-full md:w-[182px]'>
                <h3>Give Review</h3>
              </Button>
            </DialogTrigger>

            <DialogContent
              className='bg-white rounded-2xl '
              style={{ width: 'clamp(21.56rem, 43.17vw, 32.38rem)' }}
            >
              <DialogHeader>
                <DialogTitle>
                  <p className='text-display-xs font-extrabold font-quicksand'>
                    Give Review
                  </p>
                </DialogTitle>

                <DialogDescription className='text-center place-items-center'>
                  <p className='text-md leading-8 font-extrabold font-quicksand'>
                    Give Rating
                  </p>

                  <div className='flex gap-1'>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        onClick={() => setStar(i + 1)}
                        className='inline-block size-[49px] cursor-pointer'
                        stroke={i < star ? '#FFAB0D' : '#A4A7AE'}
                        fill={i < star ? '#FFAB0D' : '#A4A7AE'}
                      />
                    ))}
                  </div>

                  <Textarea
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    className='mt-6 md:h-[235px] resize-none border border-neutral-300 rounded-xl py-2 px-3 text-neutral-300'
                    placeholder='Please share your thoughts about this book'
                  />
                </DialogDescription>
              </DialogHeader>

              <Button
                onClick={handleSubmit}
                variant={'secondary'}
                type='submit'
                className='w-full'
              >
                <h3>Send</h3>
              </Button>
            </DialogContent>
          </Dialog>
        )}

        {variant === 'asAdmin' && (
          <div>
            <p className='text-sm-semibold md:text-md-semibold'>
              borrower&apos;s name
            </p>
            <p className='md:text-xl md:font-bold text-md-semibold'>John Doe</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default CardListBorrowed;
