import { Command, CommandInput } from '@/components/ui/command';
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { ScrollArea } from '@/components/ui/scroll-area';

const users = [
  {
    no: 1,
    name: 'John Doe',
    phone: '081234567890',
    email: 'johndoe@email.com',
    createdAt: '28 Aug 2025, 14:00',
  },
  {
    no: 2,
    name: 'Jane Smith',
    phone: '081234567891',
    email: 'janesmith@email.com',
    createdAt: '29 Aug 2025, 10:30',
  },
  // Tambahkan data user lainnya
];

function UserList() {
  return (
    <section className='flex flex-col mt-6 gap-6 pb-[110px]'>
      <h1>User</h1>
      {/* search bar */}
      <div className='w-full md:w-[600px]'>
        <Command className='h-12 rounded-full justify-center border border-neutral-300 gap-2 px-4 md:min-w-[500px]'>
          <CommandInput
            className='text-neutral-600 text-sm'
            placeholder='Search user'
          />
        </Command>
      </div>

      {/* Desktop Table */}
      <div className='hidden md:block'>
        <Table className='border bg-neutral-300 shadow-card rounded-xl overflow-hidden'>
          <TableHeader>
            <TableRow>
              <TableHead className='md:w-11'>No</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Nomor Handphone</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Created At</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.no}>
                <TableCell className='text-center'>{user.no}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.phone}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.createdAt}</TableCell>
              </TableRow>
            ))}
          </TableBody>

          <TableFooter>
            <TableRow>
              <TableCell colSpan={5} className='p-0'>
                <div className='flex justify-between items-center px-4 py-4 text-sm text-neutral-700 bg-white'>
                  <p>Showing 1 to 10 of 60 entries</p>
                  <div className='flex items-center space-x-1'>
                    <Pagination>
                      <PaginationContent>
                        <PaginationItem>
                          <PaginationPrevious href='#' />
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink href='#'>1</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink href='#' isActive>
                            2
                          </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink href='#'>3</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationEllipsis />
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationNext href='#' />
                        </PaginationItem>
                      </PaginationContent>
                    </Pagination>
                  </div>
                </div>
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>

      {/* Mobile Table as ScrollArea */}
      <div className='md:hidden'>
        <ScrollArea className='w-full h-[400px]'>
          <div className=''>
            {users.map((user) => (
              <div
                key={user.no}
                className='bg-white shadow-card my-5 rounded-xl gap-5 p-4 text-sm-semibold leading-[28px]'
              >
                <div>
                  <span className='font-semibold'>No:</span> {user.no}
                </div>
                <div>
                  <span className='font-semibold'>Name:</span> {user.name}
                </div>
                <div>
                  <span className='font-semibold'>Nomor Handphone:</span>{' '}
                  {user.phone}
                </div>
                <div>
                  <span className='font-semibold'>Email:</span> {user.email}
                </div>
                <div>
                  <span className='font-semibold'>Created At:</span>{' '}
                  {user.createdAt}
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>

        {/* Mobile Pagination */}
        <div className='mt-4 px-2'>
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href='#' />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href='#'>1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href='#' isActive>
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href='#'>3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href='#' />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </section>
  );
}

export default UserList;
