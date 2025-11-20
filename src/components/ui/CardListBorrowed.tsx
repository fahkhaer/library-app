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

interface CardListBorrowedProps {
  variant: 'asUser' | 'asAdmin';
}

const star = 3;

function CardListBorrowed({ variant }: CardListBorrowedProps) {
  return (
    <div className='flex justify-between pb-5 rounded-2xl bg-white items-center space-y-4'>
      {/* left side */}
      <div className='flex gap-4 '>
        <img className='h-[138px] w-auto' src='/cover.png' alt='' />
        <div className='flex flex-col gap-1'>
          <Badge variant={'outline'} className='px-2 rounded-sm'>
            Business & Economics{' '}
          </Badge>
          <h2>Book Name</h2>
          <h4>Author Name</h4>
          <span className='text-md-bold'>29 Aug 2025 • Duration 3 Days </span>
        </div>
      </div>
      {/* right side */}
      <div className='  gap-[13px]'>
        {variant === 'asUser' && (
          <Dialog>
            <DialogTrigger>
              <Button variant={'secondary'} className='w-[182px]'>
                <h3>Give Review</h3>
              </Button>
            </DialogTrigger>
            <DialogContent className='bg-white w-[439px]  '>
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
                        className='inline-block size-[49px] border-none text-[#FFAB0D]'
                        stroke={i < star ? '#FFAB0D' : '#A4A7AE'}
                        fill={i < star ? '#FFAB0D' : '#A4A7AE'}
                      />
                    ))}
                  </div>
                  <Textarea
                    className='mt-6 md:h-[235px] resize-none border border-neutral-300 rounded-xl py-2 px-3 text-neutral-300'
                    placeholder='Please share your thoughts about this book'
                  />
                </DialogDescription>
              </DialogHeader>
              <Button variant={'secondary'} type='submit' className=' w-full'>
                <h3>Send</h3>
              </Button>{' '}
            </DialogContent>
          </Dialog>
        )}

        {variant === 'asAdmin' && (
          <div>
            <p className='text-md-semibold '>borrower&apos;s name</p>
            <p className='text-xl font-bold'>John Doe</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default CardListBorrowed;
