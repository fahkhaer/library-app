import { GetMyLoan } from '@/api/user/loan';
import { Badge } from '@/components/ui/badge';
import CardListBorrowed from '@/components/ui/CardListBorrowed';
import { Command, CommandInput } from '@/components/ui/command';
import LoadMoreButton from '@/components/ui/LoadMoreButton';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Loan } from '@/types/loans';
import dayjs from 'dayjs';

function BorrowedList() {
  const { data: loans, isLoading } = GetMyLoan();

  if (isLoading) return <p>Loading...</p>;

  if (!Array.isArray(loans)) return <p>No loans found</p>;

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
            <TabsTrigger variant='secondary' value='all'>
              All
            </TabsTrigger>
            <TabsTrigger variant='secondary' value='active'>
              Active
            </TabsTrigger>
            <TabsTrigger variant='secondary' value='returned'>
              Returned
            </TabsTrigger>
            <TabsTrigger variant='secondary' value='overdue'>
              Overdue
            </TabsTrigger>
          </TabsList>
        </ScrollArea>

        {/* desktop */}
        <TabsList className='hidden md:flex md:w-fit gap-3'>
          <TabsTrigger variant='secondary' value='all'>
            All
          </TabsTrigger>
          <TabsTrigger variant='secondary' value='active'>
            Active
          </TabsTrigger>
          <TabsTrigger variant='secondary' value='returned'>
            Returned
          </TabsTrigger>
          <TabsTrigger variant='secondary' value='overdue'>
            Overdue
          </TabsTrigger>
        </TabsList>

        {/* Card book list */}
        {loans.map((item: Loan, i: number) => (
          <TabsContent
            key={i}
            className='flex mt-6 flex-col divide-neutral-300 bg-white p-5 gap-5 rounded-2xl'
            value='all'
          >
            {/* status */}
            <div className='flex justify-between items-center gap-3'>
              <div className='flex justify-between items-center gap-3'>
                <h3>Status</h3>
                <Badge variant='secondary'>{item.status}</Badge>
              </div>
              {/* due date */}
              <div className='flex items-center gap-3'>
                <h3>Due Date</h3>
                <Badge variant='destructive'>
                  {dayjs(item.dueAt).format('DD MMMM YYYY')}
                </Badge>
              </div>
            </div>

            {/* line border */}
            <div className='border-t-2 border-neutral-300 w-full'></div>

            {/* as User */}
            <CardListBorrowed
              bookId={item.bookId}
              variant='asUser'
              title={item.Book.title}
              image={item?.Book?.coverImage}
              date={dayjs(item.borrowedAt).format('DD MMMM YYYY')}
              duration={(() => {
                const borrowedAt = new Date(item.borrowedAt);
                const dueAt = item.dueAt ? new Date(item.dueAt) : new Date();
                const diffDays = Math.floor(
                  (dueAt.setHours(0, 0, 0, 0) -
                    borrowedAt.setHours(0, 0, 0, 0)) /
                    (1000 * 60 * 60 * 24)
                );
                return `duration ${diffDays} days`;
              })()}
            />
          </TabsContent>
        ))}
      </Tabs>

      <LoadMoreButton />
    </section>
  );
}

export default BorrowedList;
