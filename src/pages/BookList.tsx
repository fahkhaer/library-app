import { GetBooklist } from '@/api/user/booklist';
import { Button } from '@/components/ui/button';
import CardListUser from '@/components/ui/CardListUser';
import { Command, CommandInput } from '@/components/ui/command';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useSearchStore } from '@/store/searchStore';
import { Book } from '@/types/books';
import { Link } from 'react-router-dom';

function BookList() {
  const { query, setQuery } = useSearchStore();

  const {
    data: booklist,
    isLoading: isLoadingBooks,
    error: errorBooks,
  } = GetBooklist();

  const filteredBooks = (booklist || []).filter(
    (book: Book) =>
      book.title.toLowerCase().includes(query.toLowerCase()) ||
      book.Author.name.toLowerCase().includes(query.toLowerCase()) ||
      book.Category.name.toLowerCase().includes(query.toLowerCase())
  );

  if (isLoadingBooks) return <p>Loading...</p>;
  if (errorBooks) return <p>Error loading data</p>;
  return (
    <section className='flex flex-col mt-6 gap-6 pb-[110px]'>
      <h1>Book List</h1>
      <Link to={'/add-book'}>
        <Button
          variant='default'
          className='bg-[#1C65DA] hover:bg-blue-900 text-neutral-25 w-60 rounded-full p-2'
        >
          <h3>Add Book </h3>{' '}
        </Button>
      </Link>
      {/* search bar */}
      <div className='w-full md:w-[600px]'>
        <Command className='h-12 rounded-full justify-center border border-neutral-300 gap-2 px-4 md:min-w-[500px]'>
          <CommandInput
            className='text-neutral-600 text-sm '
            placeholder='Search book'
            value={query}
            onValueChange={(value) => setQuery(value)}
          />
        </Command>
      </div>
      {/* tabs and content */}
      <Tabs defaultValue='all'>
        {/* mobile*/}
        <ScrollArea className='w-full whitespace-nowrap md:hidden'>
          <TabsList className='flex w-max gap-3'>
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
        </ScrollArea>

        {/* desktop */}
        <TabsList className='hidden md:flex md:w-fit gap-3'>
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
        {filteredBooks.map((item: Book, i: number) => (
          <TabsContent key={i} value='all'>
            <CardListUser
              coverImage={item.coverImage}
              genre={item.Category.name}
              title={item.title}
              author={item.Author.name}
              rating={item.rating}
              bookId={item.id}
            />
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
}

export default BookList;
