import Container from '@/components/layout/Container';
import { Button } from '@/components/ui/button';
import CardList from '@/components/ui/CardList';
import { Checkbox } from '@/components/ui/checkbox';

function Cart() {
  return (
    <Container className='pb-[100px]'>
      <p className='text-display-lg pb-8'>My Cart</p>
      <div className='flex gap-10'>
        {/* left side */}
        <div className='flex-1 bg-white '>
          {/* Select All */}
          <div className='flex items-center gap-4'>
            <Checkbox id='select-all' />
            <label htmlFor='select-all' className='text-md font-semibold'>
              Select All
            </label>
          </div>
          {/* cards */}
          <div className='divide-y first:pt-0 flex flex-col divide-neutral-300 '>
            {/* card 1 */}
            <div className='flex py-6 w-full gap-4 '>
              <Checkbox id='select-all' />
              <CardList />
            </div>
            {/* card 2  */}
            <div className='flex py-6 w-full gap-4 '>
              <Checkbox id='select-all' />
              <CardList />
            </div>
          </div>
        </div>
        {/* right */}

        <div className='space-y-6 md:w-[318px] shadow-card p-4 bg-white rounded-2xl'>
          <p className='text-xl font-bold'>Loan Summary</p>
          <div className='flex justify-between'>
            <h4>Total Book</h4>
            <h3>2 Items</h3>
          </div>
          <Button className='w-full' variant={'secondary'}>
            Borrow Books
          </Button>
        </div>
      </div>
    </Container>
  );
}

export default Cart;
