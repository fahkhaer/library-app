import { GetAuthors, } from '@/api/authors';
import { Author } from '@/types/books';
import { Icon } from '@iconify/react';
import { Avatar, AvatarImage } from '@radix-ui/react-avatar';

function AuthorCard() {
  const { data: authors, isLoading, error } = GetAuthors();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  return (
    <div className='flex gap-4'>
      {authors?.map((author: Author) => (
        <div
          key={author.id}
          className='bg-white rounded-xl flex items-center gap-4 p-4'
        >
          <Avatar>
            <AvatarImage
              className='size-20 rounded-full'
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
              <p className='text-[#0A0D12]'>5 books</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AuthorCard;
