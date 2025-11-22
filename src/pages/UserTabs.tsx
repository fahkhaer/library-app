import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import BorrowedList from './BorrowedList';
import Profile from './Profile';
import Reviews from './Reviews';
import { useSearchParams } from 'react-router-dom';

interface UserTabsProps {
  defaultTab?: 'profile' | 'borrowedlist' | 'reviews';
}

function UserTabs({ defaultTab = 'borrowedlist' }: UserTabsProps) {
  const [searchParams] = useSearchParams();
  const tabFromQuery = searchParams.get('tab') as 'profile' | 'borrowedlist' | 'reviews' | null;

  return (
    <section className='pt-12 pb-[45px]'>
      <Tabs defaultValue={tabFromQuery || defaultTab} className='rounded-xl'>
        <TabsList className='bg-[#F5F5F5]'>
          <TabsTrigger value='profile'>Profile</TabsTrigger>
          <TabsTrigger value='borrowedlist'>Borrowed List</TabsTrigger>
          <TabsTrigger value='reviews'>Reviews</TabsTrigger>
        </TabsList>
        <TabsContent value='profile'>
          <Profile />
        </TabsContent>
        <TabsContent value='borrowedlist'>
          <BorrowedList />
        </TabsContent>
        <TabsContent value='reviews'>
          <Reviews />
        </TabsContent>
      </Tabs>
    </section>
  );
}


export default UserTabs;
