import { cn } from '@/lib/utils';
import { Star } from 'lucide-react';

type CardProps = {
  className?: string;
};

function Card({ className }: CardProps) {
  return (
    <div className={cn('rounded-xl', className)}>
      <img src='/cover.png' alt='' />
      <div className='p-4 space-y-1'>
        <h2>Book Name</h2>
        <h4>Author Name</h4>
        <div className='flex gap-0.5 items-center'>
          <Star className='inline-block size-6 text-[#FFAB0D]' fill='#FFAB0D' />
          <span className='text-md-semibold ml-1'>4.5</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
