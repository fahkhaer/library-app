import { BooksByAuthor } from '@/api/authors';
import { Author } from '@/types/books';
import { Icon } from '@iconify/react';
import { Avatar, AvatarImage } from '@radix-ui/react-avatar';
import { Link } from 'react-router-dom';

interface AuthorCardProps {
  author: Author;
}

export default function AuthorCard({ author }: AuthorCardProps) {
  const { data: booksData, isLoading } = BooksByAuthor(author.id);

  return (
    <Link to={`/authors-book/${author.id}`} className='w-full md:w-auto'>
      <div className='bg-white rounded-xl flex items-center gap-4 p-4 cursor-pointer hover:shadow-md transition'>
        <Avatar>
          <AvatarImage
            className='md:size-20 size-16 aspect-square rounded-full'
            src='https://github.com/shadcn.png'
            alt={author.name}
          />
        </Avatar>
        <div>
          <h2>{author.name}</h2>
          <div className='flex gap-1.5 items-center'>
            <Icon
              icon='material-symbols:book'
              width='16'
              height='20'
              style={{ color: '#1C65DA' }}
            />
            <p className='text-[#0A0D12] text-sm-medium md:text-md-medium'>
              {isLoading ? '...' : booksData?.books?.length || 0} books
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
