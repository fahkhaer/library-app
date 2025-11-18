import { Icon } from '@iconify/react';
import { Avatar, AvatarImage } from '@radix-ui/react-avatar';

function AuthorCard() {
  return (
    <div className='bg-white rounded-xl flex items-center  gap-4 p-4'>
      <Avatar className=''>
        <AvatarImage
          className='size-20 rounded-full'
          src='https://github.com/shadcn.png'
          alt='@shadcn'
        />
      </Avatar>
      <div>
        <h2>Author Name</h2>
        <div className='flex gap-1.5 items-center'>
          <Icon
            icon='material-symbols:book'
            width='16'
            height='20'
            style={{ color: '#1C65DA' }}
          />
          <p className='text-[#0A0D12['>5 books</p>
        </div>
      </div>
    </div>
  );
}

export default AuthorCard;
