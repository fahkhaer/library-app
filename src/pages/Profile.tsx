import { Button } from '@/components/ui/button';
import { UpdateUser, useFetchUser } from '@/api/user/auth';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useEffect, useState } from 'react';
import { Input } from '@/components/ui/input';

function Profile() {
  const updateProfile = UpdateUser();
  const { data: user, isLoading } = useFetchUser();
  const [isEdit, setIsEdit] = useState(false);

  const [form, setForm] = useState({
    name: '',
  });
  const handleEdit = () => {
    updateProfile.mutate(
      { name: form.name },
      {
        onSuccess: (data) => {
          setForm({ name: data.name });
        },
      }
    );
  };

  useEffect(() => {
    if (user) {
      setForm({ name: user.name });
    }
  }, [user]);
  if (isLoading || !user) return <p> Loading...</p>;

  return (
    <section className='flex flex-col mt-4 md:mt-6 gap-6 pb-[110px]'>
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

          <div className='flex justify-between items-center'>
            <h4>Name</h4>
            {isEdit ? (
              <Input
                className='w-[250px]'
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            ) : (
              <h3>{user.name}</h3>
            )}
          </div>

          <div className='flex justify-between'>
            <h4>Email</h4>
            <h3>{user.email}</h3>
          </div>

          <div className='flex justify-between'>
            <h4>Nomor Handphone</h4>
            <h3>{user.phone}</h3>
          </div>
          <Button
            onClick={() => {
              if (isEdit) {
                handleEdit();
              }
              setIsEdit(!isEdit);
            }}
            variant='secondary'
            className='w-full'
          >
            {isEdit ? 'Save Changes' : 'Update Profile'}
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Profile;
