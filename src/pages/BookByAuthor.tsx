import Container from '@/components/layout/Container';
import { BooksByAuthor } from '@/api/user/authors';
import Card from '@/components/ui/Card';
import { Book } from '@/types/books';
import { Icon } from '@iconify/react';
import { Avatar, AvatarImage } from '@radix-ui/react-avatar';
import { Link, useParams } from 'react-router-dom';

function BookByAuthor() {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, error } = BooksByAuthor(Number(id));

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;
  return (
    <Container>
      <div>
        {/* AuthorCard */}
        <div>
          <div className='bg-white rounded-xl flex items-center gap-4 p-4'>
            <Avatar>
              <AvatarImage
                className='size-20 rounded-full'
                src='https://github.com/shadcn.png'
                alt=''
              />
            </Avatar>
            <div>
              <h2>{data.author.name}</h2>
              <div className='flex gap-1.5 items-center'>
                <Icon
                  icon='material-symbols:book'
                  width='16'
                  height='20'
                  style={{ color: '#1C65DA' }}
                />
                <p className='text-[#0A0D12] text-sm-medium md:text-md-medium'>
                  {data.books.length} books
                </p>
              </div>
            </div>
          </div>
        </div>
        <h1 className='md:pb-8 md:pt-10'>Book List</h1>
      </div>
      <div className='flex gap-4 md:gap-5'>
        {data.books?.map((item: Book) => (
          <Link
            key={item.id}
            to={`/detail/${item.id}`}
            className='basis-1/2 md:basis-1/4 max-w-full'
          >
            <Card
              author={data.author?.name}
              rating={item.rating}
              name={item.title}
              image={item.coverImage}
              className='w-full'
              style={{ width: 'clamp(10.75rem, 28vw, 21rem)' }}
            />
          </Link>
        ))}
      </div>
    </Container>
  );
}

export default BookByAuthor;
