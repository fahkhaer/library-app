import { GetMyReview } from '@/api/user/reviews';
import CardListBorrowed from '@/components/ui/CardListBorrowed';
import { Command, CommandInput } from '@/components/ui/command';
import { Review } from '@/types/reviews';
import dayjs from 'dayjs';
import { Star } from 'lucide-react';

function Reviews() {
  const { data: reviews, isLoading } = GetMyReview();

  if (isLoading) return <p> Loading...</p>;

  return (
    <section className='flex flex-col mt-4 md:mt-6 gap-6 md:pb-[110px]'>
      <h1>Book List</h1>

      {/* search bar */}
      <div className='w-full md:w-[600px]'>
        <Command className='h-12 rounded-full justify-center border border-neutral-300 gap-2 px-4 md:min-w-[500px]'>
          <CommandInput
            className='text-neutral-600 text-sm '
            placeholder='Search book '
          />
        </Command>
      </div>
      {/* tabs and content */}

      {reviews.reviews.map((review: Review) => (
        <div
          key={review.id}
          className='shadow-card divide-neutral-300 divide-y bg-white rounded-2xl p-5 space-y-5'
        >
          <p className='text-sm-semibold md:text-md-semibold'>
            {dayjs(review.createdAt).format('DD MMM YYYY, h:mm')}
          </p>
          <div className='pt-5'>
            <CardListBorrowed
              bookId={review?.bookId}
              title={review.Book.title}
              rating={review.star}
              image={review.Book.coverImage || '/cover-off.png'}
            />
          </div>
          <div className='flex flex-col gap-2 pt-5'>
            <div className='flex'>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className='inline-block size-6 border-none text-[#FFAB0D]'
                  stroke={i < review.star ? '#FFAB0D' : '#A4A7AE'}
                  fill={i < review.star ? '#FFAB0D' : '#A4A7AE'}
                />
              ))}
            </div>
            {/* comment */}
            <p className='text-sm-semibold md:text-md-semibold'>
              {review.comment}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Reviews;
