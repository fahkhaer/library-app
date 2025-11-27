import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Star } from 'lucide-react';
import dayjs from 'dayjs';
import 'dayjs/locale/id';
import { Review } from '@/types/reviews';
dayjs.locale('id');

interface ReviewersCardProps {
  review: Review;
}
function ReviewersCard({ review }: ReviewersCardProps) {
  const star = review?.star ?? 0;
  console.log(review);

  return (
    <div
      className='
  bg-white flex flex-col rounded-2xl 
  basis-full 
  md:basis-[calc(50%-0.625rem)] 
  gap-4 p-4
'
    >
      {/* profile */}
      <div className='flex gap-3 h-16 items-center '>
        <Avatar className='size-16 '>
          <AvatarImage
            className='rounded-full'
            src='https://github.com/shadcn.png'
            alt='@shadcn'
          />
        </Avatar>
        <div>
          <h2>{review?.User?.name}</h2>
          <p className='text-[#0A0D12] text-md-medium'>
            {dayjs(review?.createdAt).format('DD MMMM YYYY, HH:mm')}
          </p>
        </div>
      </div>
      {/* review */}
      <div className='flex gap-0.5'>
        <div className='flex'>
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className='inline-block size-6 border-none text-[#FFAB0D]'
              stroke={i < star ? '#FFAB0D' : '#A4A7AE'}
              fill={i < star ? '#FFAB0D' : '#A4A7AE'}
            />
          ))}
        </div>
      </div>
      {/* comment */}
      <p className='text-md-semibold'>{review?.comment}</p>
    </div>
  );
}

export default ReviewersCard;
