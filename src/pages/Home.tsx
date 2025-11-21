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
// import { GetCategories } from '@/api/categories';

function Home() {
  // const {
  //   data: categoriesData,
  //   isLoading: isLoadingCategories,
  //   error: errorCategories,
  // } = GetCategories();

  // if (isLoadingCategories) return <p>Loading...</p>;
  // if (errorCategories) return <p>Error...</p>;

  const { data, isLoading, error } = Bookrecomendation();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  // const genres = categoriesData?.map((item) => ({
  //   name: item.name,
  //   icon: item.name ? `/${item.name}.png` : 'image-off.png',
  // }));

  return (
    <>
      <div className='pb-16 pt-6 md:pt-12 md:pb-[116px]'>
        <Carousel>
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <img className='w-full' src='/hero.png' />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        {/* {genres && (
          <div className="grid grid-cols-3 gap-3 my-10">
            {genres.map((item, index) => (
              <div
                key={index}
                className="shadow-card bg-white rounded-xl flex flex-col p-3 gap-3"
              >
                <div className="w-full bg-[#E0ECFF] rounded-xl p-3 grid place-items-center">
                  <img className="size-12" src={item.icon} />
                </div>
                <p className="text-sm font-semibold text-center">
                  {item.name}
                </p>
              </div>
            ))}
          </div>
        )} */}

        <h1 className='text-lg font-bold'>Recommendation</h1>

        <div className='flex flex-wrap gap-2 md:gap-5 w-full max-w-screen-xl justify-around mx-auto'>
          {data?.map((item: Book) => (
            <Link key={item.id} to={`/detail/${item.id}`}>
              <Card
                name={item.title}
                author={item.author.name}
                image={item.coverImage}
                rating={item.rating}
                className='basis-1/2 md:basis-1/4'
                style={{ width: 'clamp(9rem, 18vw, 16rem)' }}
              />
            </Link>
          ))}
        </div>

        <LoadMoreButton className='mt-8 mb-12' />

        <div className='border-t border-neutral-300'></div>

        <h1 className='font-bold text-xl mt-10 mb-5 md:text-3xl md:mb-10'>
          Popular Authors
        </h1>

        <Link to={'/authors-book/:id'}>
          <PopularAuthor />
        </Link>
      </div>
    </>
  );
}

export default Home;
