import { Badge } from './badge';
import { Button } from './button';

interface CardListBorrowedProps {
  variant: 'asUser' | 'asAdmin';
}

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
      <div className=' w-[182px] gap-[13px]'>
        {variant === 'asUser' && (
          <Button variant={'secondary'} className='w-full'>
            <h3>Give Review</h3>
          </Button>
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
