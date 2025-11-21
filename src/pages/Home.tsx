import { Bookrecomendation } from '@/api/booklist';
import Card from '@/components/ui/Card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import LoadMoreButton from '@/components/ui/LoadMoreButton';
import { Book } from '@/types/books';
import PopularAuthor from '@/components/ui/PopularAuthor';
import { Link } from 'react-router-dom';
import { GetCategories } from '@/api/categories';

function Home() {

  const {
    data: categoriesData,
    isLoading: isLoadingCategories,
    error: errorCategories,
  } = GetCategories();

  if (isLoadingCategories) return <p>Loading...</p>;
  if (errorCategories) return <p>Error...</p>;

  const { data, isLoading, error } = Bookrecomendation();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  const genres = categoriesData?.map((item) => ({
    name: item.name,
    icon: item.name ? `/${item.name}.png` : 'image-off.png',
  }));

  return (
    <>
      <div className=' md:pb-[116px] md:pt-12'>
        <Carousel>
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <div>
                  <img
                    style={{ width: 'clamp(22.56rem, 100vw, 75rem)' }}
                    src='/hero.png'
                  ></img>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        {/* genres */}
        <div className='flex  justify-around gap-3'>
          {genres?.map((item, index) => (
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
        <div className='flex pt-5 gap-5'>
          {data.map((item: Book) => (
            <Link key={item.id} to={`/detail/${item.id}`} className='md:w-1/5'>
              <Card
                className='w-full'
                name={item.title}
                author={item.author.name}
                image={item.coverImage}
                rating={item.rating}
              />
            </Link>
          ))}
        </div>

        <LoadMoreButton className='md:mt-10 md:mb-12' />

        <div className='border-t border-neutral-300'></div>
        {/* Popular Authors */}
        <h1 className='md:font-bold md:text-3xl md:mb-10 md:mt-12'>
          Popular Authors
        </h1>
        {/* author card */}
        <Link to={'/authors-book/:id'}>
          <PopularAuthor />
        </Link>
      </div>
    </>
  );
}

export default Home;
