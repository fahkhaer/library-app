import { Button } from '@/components/ui/button';
import { useFetchUser } from '@/api/auth';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

function Profile() {
  const { data: user, isLoading } = useFetchUser();

  console.log('ini', user);
  if (isLoading || !user) return <p> Loading...</p>;

  return (
    <section className='flex flex-col mt-6 gap-6 pb-[110px]'>
      <h1>Profile</h1>
      <div className='shadow-card p-5 md:w-[557px] rounded-2xl bg-white'>
        <div className='space-y-3'>
          <Avatar>
            <AvatarImage
              className='w-30 rounded-full'
              src='https://github.com/shadcn.png'
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <div className='flex justify-between'>
            <h4>Name</h4>
            <h3>{user.name}</h3>
          </div>

          <div className='flex justify-between'>
            <h4>Email</h4>
            <h3>{user.email}</h3>
          </div>

          <div className='flex justify-between'>
            <h4>Nomor Handphone</h4>
            <h3>{user.phone}</h3>
          </div>

          <Button variant='secondary' className='w-full'>
            Update Profile
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Profile;
