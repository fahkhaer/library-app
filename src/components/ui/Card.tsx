import { cn } from '@/lib/utils';
import { Star } from 'lucide-react';

type CardProps = {
  className?: string;
  name?: string;
  author?: string;
  image?: string | null;
  rating?: number;
};

function Card({ className, name, author, image, rating }: CardProps) {
  return (
    <div className={cn('rounded-xl', className)}>
      <img src={image||'/cover.png'} alt='book-cover' />
      <div className='p-4 space-y-1'>
        <h2>{name}</h2>
        <h4>{author}</h4>
        <div className='flex gap-0.5 items-center'>
          <Star className='inline-block size-6 text-[#FFAB0D]' fill='#FFAB0D' />
          <span className='text-md-semibold ml-1'>{rating}</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
