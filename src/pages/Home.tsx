import { Bookrecomendation } from '@/api/booklist';
import { GetCategories } from '@/api/categories';
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

function Home() {
  const {
    data: categoriesData,
    isLoading: isLoadingCategories,
    error: errorCategories,
  } = GetCategories();

  const {
    data: booksData,
    isLoading: isLoadingBooks,
    error: errorBooks,
  } = Bookrecomendation();

  if (isLoadingCategories || isLoadingBooks) return <p>Loading...</p>;
  if (errorCategories) return <p>Error loading categories</p>;
  if (errorBooks) return <p>Error loading books</p>;

  const genres =
    categoriesData?.map((item) => ({
      name: item.name || 'Unknown',
      icon: item.name ? `/${item.name}.png` : '/cover-off.png',
    })) || [];

  return (
    <div className='pb-16 pt-6 md:pt-12 md:pb-[116px]'>
      {/* Carousel */}
      <Carousel>
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <img className='w-full' src='/hero.png' alt={`slide-${index}`} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      {/* Genres */}
      {genres.length > 0 && (
        <div className='flex flex-wrap gap-3 my-10'>
          {genres.map((item, index) => (
            <div
              key={index}
              className='shadow-card bg-white rounded-xl flex flex-col p-3 gap-3 flex-1 min-w-[7rem] max-w-[12rem]'
            >
              <div className='w-full bg-[#E0ECFF] rounded-xl p-3 grid place-items-center'>
                <img className='size-12' src={item.icon} alt={item.name} />
              </div>
              <p className='text-sm font-semibold text-center'>{item.name}</p>
            </div>
          ))}
        </div>
      )}

      {/* Recommendation */}
      <h1 className='text-lg font-bold mb-5'>Recommendation</h1>
      <div className='flex flex-wrap gap-2 md:gap-5 w-full max-w-screen-xl mx-auto'>
        {booksData?.map((item: Book) => (
          <Link
            key={item.id}
            to={`/detail/${item.id}`}
            className='flex-1 min-w-[9rem] max-w-[16rem]'
          >
            <Card
              name={item.title}
              author={item.author.name}
              image={item.coverImage}
              rating={item.rating}
            />
          </Link>
        ))}
      </div>

      <LoadMoreButton className='mt-8 mb-12' />

      <div className='border-t border-neutral-300'></div>

      {/* Popular Authors */}
      <h1 className='font-bold text-xl mt-10 mb-5 md:text-3xl md:mb-10'>
        Popular Authors
      </h1>

      <PopularAuthor />
    </div>
  );
}

export default Home;
