import AuthorCard from '@/components/ui/AuthorCard';
import Card from '@/components/ui/Card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import LoadMoreButton from '@/components/ui/LoadMoreButton';

function Home() {
  const genres = [
    { name: 'Fiction', icon: '/fiction.png' },
    { name: 'Non-Fiction', icon: '/non-fiction.png' },
    { name: 'Self-Improvement', icon: '/self-improvement.png' },
    { name: 'Finance ', icon: '/finance.png' },
    { name: 'Science', icon: '/science.png' },
  ];
  return (
    <>
      <div className=' md:pb-[116px] md:pt-12'>
        <Carousel className=''>
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <div>
                  <img src='/hero.png'></img>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        {/* genres */}
        <div className='flex justify-around gap-3'>
          {genres.map((item, index) => (
            <div
              key={index}
              className='shadow-card my-12 bg-white rounded-xl w-full  flex flex-col p-3 gap-3'
            >
              <div className='w-[163px] place-items-center bg-[#E0ECFF] center rounded-xl p-[6.4px] gap-3'>
                <img className='size-[51.2px]' src={item.icon}></img>
              </div>
              <p className='text-md-semibold leading-8'>{item.name}</p>
            </div>
          ))}
        </div>

        {/* recomendation */}

        <h1>Recomendation</h1>
        <Card className='md:w-1/5' />
        <LoadMoreButton className='md:mt-10 md:mb-12' />

        <div className='border-t border-neutral-300'></div>
        {/* Popular Authors */}
        <h1 className='md:font-bold md:text-3xl md:mb-10 md:mt-12'>
          Popular Authors
        </h1>
        {/* author card */}
        <div className='md:w-1/4'>
          <AuthorCard />
        </div>
      </div>
    </>
  );
}

export default Home;
