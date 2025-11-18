import { Button } from '@/components/ui/button';
import CardListUser from '@/components/ui/CardListUser';
import { Command, CommandInput } from '@/components/ui/command';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

function BookList() {
  return (
    <section className='flex flex-col mt-6 gap-6 pb-[110px]'>
      <h1>Book List</h1>
      <Button
        variant='default'
        className='bg-[#1C65DA] hover:bg-blue-900 text-neutral-25 w-60 rounded-full p-2'
      >
        <h3>Add Book </h3>{' '}
      </Button>
      {/* search bar */}
      <div className='w-[600px]'>
        <Command className='h-12 rounded-full justify-center border border-neutral-300 gap-2 px-4 md:min-w-[500px]'>
          <CommandInput
            className='text-neutral-600 text-sm '
            placeholder='Search book '
          />
        </Command>
      </div>
      {/* tabs and content */}
      <Tabs defaultValue='all'>
        <TabsList className='w-fit justify-start gap-3'>
          <TabsTrigger variant='secondary' value='all'>
            All
          </TabsTrigger>
          <TabsTrigger variant='secondary' value='available'>
            Available
          </TabsTrigger>
          <TabsTrigger variant='secondary' value='borrowed'>
            Borrowed
          </TabsTrigger>
          <TabsTrigger variant='secondary' value='returned'>
            Returned
          </TabsTrigger>
          <TabsTrigger variant='secondary' value='damaged'>
            Damaged
          </TabsTrigger>
        </TabsList>

        {/* Card book list */}
        <TabsContent value='all'>
          <CardListUser />{' '}
        </TabsContent>
      </Tabs>
    </section>
  );
}

export default BookList;
