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
import { useEffect, useState } from 'react';
import { Detailbook } from '@/api/user/booklist';

interface CardListBorrowedProps {
  variant?: 'asUser' | 'asAdmin';
  className?: string;
  title?: string | null;
  date?: string | null;
  duration?: string | null;
  rating?: number;
  bookId?: number;
  borrowers?: string | undefined;
}

function CardListBorrowed({
  variant,
  title,
  rating,
  date,
  duration,
  bookId,
  borrowers,
}: CardListBorrowedProps) {
  const { data, isLoading, error } = Detailbook(Number(bookId));

  const addReview = AddReview();
  const [star, setStar] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (rating !== undefined && rating !== null) {
      setStar(rating);
    }
  }, [rating]);
  const [comment, setComment] = useState('');
  if (isLoading && bookId) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  const handleSubmit = () => {
    addReview.mutate(
      {
        bookId: Number(bookId),
        star: star,
        comment: comment,
      },
      {
        onSuccess: (data) => {
          console.log('Berhasil:', data);
          setOpen(false);
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
        <img
          className='h-[138px] w-auto'
          src={data?.coverImage || '/cover-off.png'}
          alt=''
        />
        <div className='flex justify-center flex-col gap-1'>
          <Badge variant={'outline'} className='px-2 rounded-sm'>
            {data?.Category?.name}{' '}
          </Badge>
          <h2>{title}</h2>
          <h4>{data?.Author?.name}</h4>
          {variant === 'asUser' ||
            (variant === 'asAdmin' && (
              <span className='md:text-md-bold text-sm-bold'>
                {date} • {duration}
              </span>
            ))}
        </div>
      </div>

      {/* right side */}
      <div className='w-full md:w-auto flex flex-col md:block gap-[13px]'>
        {variant === 'asUser' && (
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger onClick={() => setOpen(true)}>
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
            <p className='md:text-xl md:font-bold text-md-semibold'>
              {borrowers}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default CardListBorrowed;
