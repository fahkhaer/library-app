import { Badge } from '@/components/ui/badge';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Button } from '@/components/ui/button';
import Container from '@/components/layout/Container';

import { Share2, Star } from 'lucide-react';
import LoadMoreButton from '@/components/ui/LoadMoreButton';
import Card from '@/components/ui/Card';
import { Detailbook, GetBooklist } from '@/api/user/booklist';
import ReviewersCard from '@/components/ui/ReviewersCard';
import { Review } from '@/types/reviews';
import { Book } from '@/types/books';
import { Link, useParams } from 'react-router-dom';

function DetailPage() {
  const { id } = useParams();
  const bookId = Number(id);

  const { data, isLoading, error } = Detailbook(bookId);
  const { data: allBooks } = GetBooklist();

  if (!id) return <p>Invalid book ID!</p>;
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  const relatedBooks = (allBooks || []).filter(
    (book: Book) => book.categoryId === data.categoryId && book.id !== data.id
  );

  return (
    <Container className='pb-6 md:pb-30'>
      <Breadcrumb className='md:pb-6 pb-4 text-sm-semibold'>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <a className='text-sm-semibold font-[#1C65DA]' href='/'>
                Home
              </a>
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbSeparator />

          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <a href='/category'>Category</a>
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbSeparator />

          <BreadcrumbItem>
            <BreadcrumbPage>{data.title}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className='md:flex gap-9'>
        <div className='flex justify-center md:block'>
          <img
            className='border-2 rounded-none bg-[#E9EAEB] p-2'
            style={{ width: 'clamp(13.25rem, 40.17vw, 30.13rem)' }}
            src={data.coverImage || '/cover.png'}
            alt='cover-book'
          />
        </div>

        <div className='flex flex-col py-6 md:py-[18px] flex-1 gap-5'>
          <div className='flex flex-col gap-0.5 items-start'>
            <Badge variant={'outline'} className='px-2 rounded-sm w-35'>
              {data.category.name}
            </Badge>
            <h2>{data.title}</h2>
            <h4>{data.author.name}</h4>

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
            <Button className='w-40' variant={'outline'}>
              <Link to={'/cart'}>Add to Cart</Link>
            </Button>
            <Link to={`/checkout/${bookId}`}>
              <Button className='w-40' variant={'secondary'}>
                Borrow Book
              </Button>
            </Link>
            <div className='rounded-full size-11 p-2 border border-neutral-300 text-center'>
              <Share2 />
            </div>
          </div>
        </div>
      </div>

      <div className='border-b my-6 md:my-16 border-neutral-300'></div>

      <section className='space-y-[18px]'>
        <div>
          <h1>Review</h1>
          <div className='flex gap-0.5 items-center'>
            <Star
              className='inline-block size-6 text-[#FFAB0D]'
              fill='#FFAB0D'
            />
            <span className='text-md-semibold ml-1'>
              ( {data.reviewCount} Ulasan)
            </span>
          </div>
        </div>

        <div className='flex flex-wrap gap-5'>
          {data.reviews.map((review: Review) => (
            <ReviewersCard key={review.id} review={review} />
          ))}
        </div>

        <LoadMoreButton />
      </section>

      <div className='border-b my-6 md:my-16 border-neutral-300'></div>

      <section>
        <h1 className='mb-5 md:mb-10'>Related Books</h1>

        {relatedBooks.length === 0 ? (
          <h4>No related books found!</h4>
        ) : (
          <div className='flex flex-wrap gap-5'>
            {relatedBooks.map((book: Book) => (
              <Link
                key={book.id}
                to={`/detail/${book.id}`}
                className='w-1/2 md:w-1/4'
              >
                <Card
                  className='w-full'
                  name={book.title}
                  author={book.author?.name || 'Unknown'}
                  image={book.coverImage || '/cover-off.png'}
                  rating={book.rating}
                />
              </Link>
            ))}
          </div>
        )}
      </section>
    </Container>
  );
}

export default DetailPage;

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
    <div className='mt-[22px] w-full md:w-[173px] flex  items-left divide-neutral-300 flex-row divide-x'>
      {statistics.map((statistic) => (
        <div
          key={statistic.data}
          className='flex-1 max-md:w-full max-md:py-5 max-md:last:pb-0 md:pr-9 px-5 first:pl-0'
        >
          <p className='text-left text-md-bold'>{statistic.data}</p>
          <p className='text-left text-md-medium'> {statistic.info}</p>
        </div>
      ))}
    </div>
  );
};
