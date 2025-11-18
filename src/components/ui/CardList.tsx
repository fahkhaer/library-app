import { Badge } from './badge';
import { Star } from 'lucide-react';

function CardList() {
  return (
    <div className='flex justify-end p-0 rounded-2xl  items-center space-y-4'>
      {/* left side */}
      <div className='flex w-full gap-4 '>
        <img className='h-[138px] w-auto' src='/cover.png' alt='' />
        <div className='flex flex-col gap-1'>
          <Badge variant={'outline'} className='px-2 rounded-sm'>
            Business & Economics{' '}
          </Badge>
          <h2>Book Name</h2>
          <h4>Author Name</h4>
          <div className='flex gap-0.5 items-center'>
            <Star
              className='inline-block size-6 text-[#FFAB0D]'
              fill='#FFAB0D'
            />
            <span className='text-md-semibold ml-1'>4.5</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardList;
