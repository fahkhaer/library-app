import { cn } from '@/lib/utils';
import { Star } from 'lucide-react';

type CardProps = {
  className?: string;
  name?: string;
  author?: string;
  image?: string | null;
  rating?: number;
  style?: React.CSSProperties;
};

function Card({ className, name, author, image, rating, style }: CardProps) {
  return (
    <div className={cn('rounded-xl', className)} style={style}>
      <img src={image || '/cover.png'} alt='book-cover' />
      <div className='p-3 md:p-4 space-y-0.5 md:space-y-1'>
        <h2>{name}</h2>
        <h4>{author}</h4>
        <div className='flex gap-0.5 items-center'>
          <Star
            className='inline-block size-4 md:size-6 text-[#FFAB0D]'
            fill='#FFAB0D'
          />
          <span className='text-sm-semibold md:text-md-semibold ml-1'>
            {rating}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Card;
