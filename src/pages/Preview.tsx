import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Container from '@/components/layout/Container';
import { ArrowLeft, Share2, Star } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { Detailbook } from '@/api/user/booklist';

function Preview() {
  const { id } = useParams();
  const bookId = Number(id);

  const { data, isLoading, error } = Detailbook(bookId);

  if (!id) return <p>Invalid book ID!</p>;
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  return (
    <Container className='pb-6 md:pb-30'>
      <div className='flex gap-4 pb-9 items-center'>
        <Link to={'/admin'}>
          <ArrowLeft className='size-8' />
        </Link>
        <h1 className='text-xl font-semibold flex items-center gap-2'>
          Preview
        </h1>
      </div>
      <div className='md:flex gap-9'>
        <div className='flex justify-center md:block'>
          <img
            className='border-2 rounded-none bg-[#E9EAEB] p-2'
            style={{ width: 'clamp(13.25rem, 40.17vw, 30.13rem)' }}
            src={data.coverImage || '/cover-off.png'}
            alt='cover-image'
          />
        </div>

        <div className='flex flex-col py-6 md:py-[18px] flex-1 gap-5'>
          <div className='flex flex-col gap-0.5 items-start'>
            <Badge variant={'outline'} className='px-2 rounded-sm w-35'>
              {data.Category.name}
            </Badge>
            <h2>{data.title}</h2>
            <h4>{data.Author.name}</h4>

            <div className='flex gap-0.5 items-center'>
              <Star
                className='inline-block size-6 text-[#FFAB0D]'
                fill='#FFAB0D'
              />
              <span className='text-md-semibold ml-1'>{data.rating}</span>
            </div>

            <Statistics rating={data.rating} review={data.reviewCount} />
          </div>

          <div className='border-t border-neutral-300'></div>

          <div>
            <p className='text-xl font-bold'>Description</p>
            <p className='text-md-regular'>{data.description}</p>
          </div>

          <div className='flex gap-2 items-center h-12'>
            <Button className='w-full md:w-40' variant={'outline'}>
              <Link to={'/cart'}>Add to Cart</Link>
            </Button>
            <Link to={`/checkout/${bookId}`}>
              <Button className='w-40' variant={'secondary'}>
                Borrow Book
              </Button>
            </Link>
            <div
              className='rounded-full  p-2 border border-neutral-300 text-center'
              style={{ width: 'clamp(1.25rem, 55vw, 2.75rem)' }}
            >
              <Share2 />
            </div>
          </div>
        </div>
      </div>

      <div className='border-b my-6 md:my-16 border-neutral-300'></div>
    </Container>
  );
}

export default Preview;

type Statistic = {
  data: string | number;
  info: string;
};

type StatisticsProps = {
  review: number;
  rating: number;
};

const Statistics = ({ review, rating }: StatisticsProps) => {
  const statistics: Statistic[] = [
    { data: '320', info: 'Page' },
    { data: rating, info: 'Rating' },
    { data: review, info: 'Reviews' },
  ];
  return (
    <div className='md:mt-[22px] w-full md:w-[173px] flex  items-left divide-neutral-300 flex-row divide-x'>
      {statistics.map((statistic) => (
        <div
          key={statistic.data}
          className='flex-1 max-md:w-full md:mt-0 mt-4 md:py-5 max-md:last:pb-0 md:pr-9 px-5 first:pl-0'
        >
          <p className='text-left text-md-bold'>{statistic.data}</p>
          <p className='text-left text-md-medium'> {statistic.info}</p>
        </div>
      ))}
    </div>
  );
};
