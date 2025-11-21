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

function UserList() {
  return (
    <section className='flex flex-col mt-6 gap-6 pb-[110px]'>
      <h1>User</h1>
      {/* search bar */}
      <div className='w-[600px]'>
        <Command className='h-12 rounded-full justify-center border border-neutral-300 gap-2 px-4 md:min-w-[500px]'>
          <CommandInput
            className='text-neutral-600 text-sm'
            placeholder='Search user'
          />
        </Command>
      </div>
      {/* table */}
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
          <TableRow>
            <TableCell className='text-center'>1</TableCell>
            <TableCell>John Doe</TableCell>
            <TableCell>081234567890</TableCell>
            <TableCell>johndoe@email.com</TableCell>
            <TableCell>28 Aug 2025, 14:00</TableCell>
          </TableRow>
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
    </section>
  );
}

export default UserList;
