import { Badge } from '@/components/ui/badge';
import CardListBorrowed from '@/components/ui/CardListBorrowed';
import { Command, CommandInput } from '@/components/ui/command';
import LoadMoreButton from '@/components/ui/LoadMoreButton';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

function BorrowedList() {
  return (
    <section className='flex flex-col mt-4 md:mt-6 gap-6 pb-[110px]'>
      <h1>Borrowed List</h1>

      {/* search bar */}
      <div className='w-full md:w-[600px]'>
        <Command className='h-12 rounded-full justify-center border border-neutral-300 gap-2 px-4 md:min-w-[500px]'>
          <CommandInput
            className='text-neutral-600 text-sm'
            placeholder='Search book'
          />
        </Command>
      </div>

      {/* tabs and content */}
      <Tabs defaultValue='all'>
        {/* mobile */}
        <ScrollArea className='w-full whitespace-nowrap md:hidden'>
          <TabsList className='flex w-max gap-3'>
            <TabsTrigger variant='secondary' value='all'>All</TabsTrigger>
            <TabsTrigger variant='secondary' value='active'>Active</TabsTrigger>
            <TabsTrigger variant='secondary' value='returned'>Returned</TabsTrigger>
            <TabsTrigger variant='secondary' value='overdue'>Overdue</TabsTrigger>
          </TabsList>
        </ScrollArea>

        {/* desktop */}
        <TabsList className='hidden md:flex md:w-fit gap-3'>
          <TabsTrigger variant='secondary' value='all'>All</TabsTrigger>
          <TabsTrigger variant='secondary' value='active'>Active</TabsTrigger>
          <TabsTrigger variant='secondary' value='returned'>Returned</TabsTrigger>
          <TabsTrigger variant='secondary' value='overdue'>Overdue</TabsTrigger>
        </TabsList>

        {/* Card book list */}
        <TabsContent
          className='flex mt-6 flex-col divide-neutral-300 bg-white p-5 gap-5 rounded-2xl'
          value='all'
        >
          {/* status */}
          <div className='flex justify-between items-center gap-3'>
            <div className='flex justify-between items-center gap-3'>
              <h3>Status</h3>
              <Badge variant='secondary'>Active</Badge>
            </div>
            {/* due date */}
            <div className='flex items-center gap-3'>
              <h3>Due Date</h3>
              <Badge variant='destructive'>31 August 2025</Badge>
            </div>
          </div>

          {/* line border */}
          <div className='border-t-2 border-neutral-300 w-full'></div>

          {/* as User */}
          <CardListBorrowed variant='asUser' />
          <CardListBorrowed variant='asUser' />
        </TabsContent>
      </Tabs>

      <LoadMoreButton />
    </section>
  );
}

export default BorrowedList;
