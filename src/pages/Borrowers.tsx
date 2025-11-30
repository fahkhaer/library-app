import { GetBorrowers } from '@/api/admin/user';
import { Badge } from '@/components/ui/badge';
import CardListBorrowed from '@/components/ui/CardListBorrowed';
import { Command, CommandInput } from '@/components/ui/command';
import LoadMoreButton from '@/components/ui/LoadMoreButton';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Loan } from '@/types/loans';
import dayjs from 'dayjs';

function Borrowers() {
  const { data, isLoading, error } = GetBorrowers();
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  const tabFilters = {
    all: data.overdue,
    active: data.overdue.filter((loan: Loan) => loan.status === 'BORROWED'),
    returned: data.overdue.filter((loan: Loan) => loan.status === 'RETURNED'),
    overdue: data.overdue.filter((loan: Loan) => loan.status === 'LATE'),
  };

  return (
    <section className=' flex flex-col mt-6 gap-6 pb-[110px]'>
      <div className='flex gap-6 flex-col '>
        <h1>Borrowed List</h1>
        {/* search bar */}
        <div className='w-full md:w-[600px]'>
          <Command className='h-12 rounded-full justify-center border border-neutral-300 gap-2 px-4 md:min-w-[500px]'>
            <CommandInput
              className='text-neutral-600 text-sm '
              placeholder='Search book '
            />
          </Command>
        </div>
        {/* tabs and content */}
        <Tabs defaultValue='all'>
          <TabsList className='w-fit p-0 justify-start gap-3'>
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
          {Object.entries(tabFilters).map(([key, items]) => (
            <TabsContent
              key={key}
              value={key}
              className='flex flex-col mt-0  divide-neutral-300 '
            >
              {items.length === 0 ? (
                <p className='text-center text-neutral-500 py-6'>
                  No {key} loans found.
                </p>
              ) : (
                items.slice(0, visibleCard).map((item: Loan, i: number) => (
                  <div
                    key={i}
                    className='flex flex-col divide-neutral-300 bg-white p-5 gap-5 rounded-2xl mt-6   '
                  >
                    {/* status */}
                    <div className='flex justify-between items-center gap-3'>
                      <div className='flex items-center gap-3'>
                        <h3>Status</h3>
                        <Badge
                          variant={
                            item.status === 'LATE' ? 'destructive' : 'secondary'
                          }
                        >
                          {item.status}
                        </Badge>
                      </div>
                      {/* due date */}
                      <div className='flex items-center gap-3'>
                        <h3>Due Date</h3>
                        <Badge
                          variant={
                            new Date(item.dueAt) < new Date() &&
                            !item.returnedAt
                              ? 'secondary'
                              : 'destructive'
                          }
                        >
                          {dayjs(item.dueAt).format('DD MMMM YYYY')}
                        </Badge>
                      </div>
                    </div>
                    {/* line border */}
                    <div className='border-t-2 border-neutral-300 w-full'></div>

                    <CardListBorrowed
                      bookId={item.bookId}
                      variant='asAdmin'
                      title={item?.Book?.title}
                      date={dayjs(item?.borrowedAt).format('DD MMMM YYYY')}
                      duration={(() => {
                        const start = new Date(item.borrowedAt);
                        const end = new Date(item.dueAt);
                        const diff = Math.floor(
                          (end.setHours(0, 0, 0, 0) -
                            start.setHours(0, 0, 0, 0)) /
                            (1000 * 60 * 60 * 24)
                        );
                        return `Duration ${diff} Days`;
                      })()}
                      borrowers={item?.User?.name}
                    />
                  </div>
                ))
              )}
            </TabsContent>
          ))}
        </Tabs>
        <LoadMoreButton />
      </div>
    </section>
  );
}

export default Borrowers;
