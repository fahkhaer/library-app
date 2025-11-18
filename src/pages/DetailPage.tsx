import { Avatar, AvatarImage } from '@/components/ui/avatar';
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

const rating = 4;

function DetailPage() {
  return (
    <Container className='md:pb-30'>
      <Breadcrumb className='pb-6 text-sm-semibold'>
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
              <a href='/docs/components'>Category</a>
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbSeparator />

          <BreadcrumbItem>
            <BreadcrumbPage>The Psychology of Money</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* CardListUser for Detail Page */}
      <div className='flex gap-9'>
        {/* image */}
        <div>
          <img
            className='border-2 rounded-none md:h-[498px]  bg-[#E9EAEB] p-2 '
            src='/cover.png'
            alt=''
          />
        </div>
        {/* right side */}
        <div className='flex flex-col py-[18px] flex-1 gap-5'>
          <div className='flex flex-col gap-0.5 items-start'>
            <Badge variant={'outline'} className='px-2 rounded-sm w-35'>
              Business & Economics{' '}
            </Badge>
            <h2>Book Name</h2>
            <h4>Author Name</h4>
            {/* rating */}
            <div className='flex gap-0.5 items-center'>
              <Star
                className='inline-block size-6 text-[#FFAB0D]'
                fill='#FFAB0D'
              />
              <span className='text-md-semibold ml-1'>4.5</span>
            </div>
            <Statistics />
          </div>
          {/* page divider */}
          <div className='border-t border-neutral-300'></div>

          {/* description */}
          <div>
            <p className='text-xl font-bold'>Description</p>
            <p className='text-md-regular'>
              The Psychology of Money” explores how emotions, biases, and human
              behavior shape the way we think about money, investing, and
              financial decisions. Morgan Housel shares timeless lessons on
              wealth, greed, and happiness, showing that financial success is
              not about knowledge, but about behavior.
            </p>
          </div>
          {/* buttons */}
          <div className='flex  gap-2 items-center h-12'>
            <Button className='w-40' variant={'outline'}>
              {' '}
              Add to Cart
            </Button>
            <Button className='w-40' variant={'secondary'}>
              {' '}
              Borrow Book
            </Button>
            <div className='rounded-full size-11 aspect-square p-2  border border-neutral-300 text-center'>
              <Share2 />
            </div>
          </div>
        </div>
      </div>
      {/* page divider */}
      <div className='border-b my-16 border-neutral-300'></div>
      {/* review */}
      <section className='space-y-[18px]'>
        <div>
          <h1>Review</h1>
          <div className='flex gap-0.5 items-center'>
            <Star
              className='inline-block size-6 text-[#FFAB0D]'
              fill='#FFAB0D'
            />
            <span className='text-md-semibold ml-1'>4.5 (24 Ulasan)</span>
          </div>
        </div>
        {/* author card */}
        <div className='bg-white flex flex-col rounded-2xl md:w-1/2 gap-4 p-4 '>
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
              <h2>Author Name</h2>
              <p className='text-[#0A0D12] text-md-medium'>
                25 August 2025, 13:38
              </p>
            </div>
          </div>
          {/* review */}
          <div className='flex gap-0.5'>
            <div className='flex'>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className='inline-block size-6 text-[#FFAB0D]'
                  fill={i < rating ? '#FFAB0D' : 'none'}
                />
              ))}
            </div>
          </div>
          {/* comment */}
          <p className='text-md-semibold'>
            Lorem ipsum dolor sit amet consectetur. Pulvinar porttitor aliquam
            viverra nunc sed facilisis. Integer tristique nullam morbi mauris
            ante.
          </p>
        </div>
        <LoadMoreButton />
      </section>
      {/* page divider */}
      <div className='border-b my-16 border-neutral-300'></div>
      {/* Related books */}
      <section className=''>
        <h1 className='md:mb-10'>Related Books</h1>
        <div className='flex flex-wrap gap-5 '>
          <Card className='w-1/4' />
        </div>
      </section>
    </Container>
  );
}

export default DetailPage;

type Statistic = {
  data: string;
  info: string;
};

const statistics: Statistic[] = [
  {
    data: '320',
    info: 'Page',
  },
  {
    data: '212',
    info: 'Rating',
  },
  {
    data: '179',
    info: 'Reviews',
  },
];

const Statistics = () => {
  return (
    <div className='mt-[22px] md:w-[173px]  flex flex-col items-left divide-neutral-300 max-md:divide-y md:flex-row md:divide-x'>
      {statistics.map((statistic) => (
        <div
          key={statistic.data}
          className=' flex-1 max-md:w-full max-md:py-5  max-md:last:pb-0 md:pr-9 px-5 first:pl-0 '
        >
          <p className='text-left  display-md-bold md:text-md-bold '>
            {statistic.data}
          </p>
          <p className='text-left text-sm-regular md:text-md-medium'>
            {statistic.info}
          </p>
        </div>
      ))}
    </div>
  );
};
