import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import BookList from './BookList';
import Borrowers from './Borrowers';
import UserList from './UserList';
import { useSearchParams } from 'react-router-dom';

interface AdminTabsProps {
  defaultTab?: 'borrowers' | 'userlist' | 'booklist';
}

function AdminTabs({ defaultTab = 'borrowers' }: AdminTabsProps) {
  const [searchParams] = useSearchParams();
  const tabFromQuery = searchParams.get('tab') as
    | 'borrowers'
    | 'userlist'
    | 'booklist'
    | null;
  return (
    <section className='pt-12 pb-[45px]'>
      {/* tabs */}
      <Tabs defaultValue={tabFromQuery || defaultTab} className=' rounded-xl '>
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
