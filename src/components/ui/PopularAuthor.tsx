import { GetAuthors } from '@/api/user/authors';
import { Author } from '@/types/books';
import AuthorCard from './AuthorCard';

function PopularAuthor() {
  const { data: authors, isLoading, error } = GetAuthors();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  return (
    <div className='flex flex-col md:flex-row gap-4 flex-wrap'>
      {authors?.map((author: Author) => (
        <AuthorCard key={author.id} author={author} />
      ))}
    </div>
  );
}

export default PopularAuthor;
