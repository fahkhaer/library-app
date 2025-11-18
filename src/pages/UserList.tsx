import { useReactTable, getCoreRowModel } from '@tanstack/react-table';
import { getPaginationRowModel } from '@tanstack/react-table';

import { Button } from '@/components/ui/button';
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

const data = [
  {
    no: 1,
    name: 'John Doe',
    phone: '081234567890',
    email: 'johndoe@email.com',
    createdAt: '28 Aug 2025, 14:00',
  },
];

const columns = [
  {
    accessorKey: 'no',
    header: 'No',
  },
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    accessorKey: 'phone',
    header: 'Nomor Handphone',
  },
  {
    accessorKey: 'email',
    header: 'Email',
  },
  {
    accessorKey: 'createdAt',
    header: 'Created At',
  },
];

function UserList() {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

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
      <Table className=' border  bg-neutral-300   shadow-card rounded-xl overflow-hidden'>
        <TableHeader className=''>
          <TableRow className=''>
            <TableHead className='md:w-11'>No</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Nomor Handphone</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Created at</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className='text-center'>1</TableCell>
            <TableCell>John Doe</TableCell>
            <TableCell>081234567890</TableCell>
            <TableCell>johdoe@email.com</TableCell>
            <TableCell>28 Aug 2025, 14:00</TableCell>
          </TableRow>
        </TableBody>
        <TableFooter className='p-4 flex justify-between col-span-3'>
          <p>Showing 1 to 10 of 60 entries</p>
          {/* pagination */}
          <div className='flex items-center justify-end  space-x-2 py-4'>
            <div className='text-muted-foreground flex-1 text-sm'>
              {table.getFilteredSelectedRowModel().rows.length} of{' '}
              {table.getFilteredRowModel().rows.length} row(s) selected.
            </div>
            <div className='space-x-2'>
              <Button
                variant='outline'
                size='sm'
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
              >
                Previous
              </Button>
              <Button
                variant='outline'
                size='sm'
                onClick={() => table.nextPage()}
                disabled={!table.getCanNextPage()}
              >
                Next
              </Button>
            </div>
          </div>
        </TableFooter>
      </Table>
    </section>
  );
}

export default UserList;
