import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import BookList from './BookList';
import Borrowers from './Borrowers';
import UserList from './UserList';

function AdminTabs() {
  return (
    <section className='pt-12 pb-[45px]'>
      {/* tabs */}
      <Tabs defaultValue='booklist' className=' rounded-xl '>
        <TabsList className='bg-[#F5F5F5]'>
          <TabsTrigger value='borrowers'>Borrowed List</TabsTrigger>
          <TabsTrigger value='userlist'>User</TabsTrigger>
          <TabsTrigger value='booklist'>Book List</TabsTrigger>
        </TabsList>
        {/* content */}
        <TabsContent value='borrowers'>
          <Borrowers />
        </TabsContent>
        <TabsContent value='userlist'>
          <UserList />
        </TabsContent>
        <TabsContent value='booklist'>
          <BookList />
        </TabsContent>
      </Tabs>
    </section>
  );
}

export default AdminTabs;
