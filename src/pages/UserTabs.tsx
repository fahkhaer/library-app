import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import BorrowedList from './BorrowedList';
import Profile from './Profile';
import BookList from './BookList';

function UserTabs() {
  return (
    <section className='pt-12 pb-[45px]'>
      {/* tabs */}
      <Tabs defaultValue='profile' className=' rounded-xl '>
        <TabsList className='bg-[#F5F5F5]'>
          <TabsTrigger value='profile'>Profile</TabsTrigger>
          <TabsTrigger value='borrowedlist'>Borrowed List</TabsTrigger>
          <TabsTrigger value='booklist'>Book List</TabsTrigger>
        </TabsList>
        {/* content */}
        <TabsContent value='profile'>
          <Profile />
        </TabsContent>
        <TabsContent value='borrowedlist'>
          <BorrowedList />
        </TabsContent>
        <TabsContent value='booklist'>
          <BookList />
        </TabsContent>
      </Tabs>
    </section>
  );
}

export default UserTabs;
