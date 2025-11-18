import { AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Avatar } from '@radix-ui/react-avatar';

function Profile() {
  return (
    <section className='flex flex-col mt-6 gap-6 pb-[110px]'>
      <h1 className=''>Profile</h1>
      <div className=' shadow-card p-5 md:w-[557px] rounded-2xl  bg-white'>
        {/* identity */}
        <div className='space-y-3'>
          <Avatar>
            <AvatarImage
              className='w-30 rounded-full'
              src='https://github.com/shadcn.png'
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>{' '}
          <div className='flex justify-between'>
            <h4>Name</h4>
            <h3>JohnDoe</h3>
          </div>
          <div className='flex justify-between'>
            <h4>Email</h4>
            <h3>johndoe@email.com</h3>
          </div>
          <div className='flex justify-between'>
            <h4>Nomor Handphone</h4>
            <h3>081234567890s</h3>
          </div>
          <Button variant={'secondary'} className='w-full'>
            Update Profile
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Profile;
