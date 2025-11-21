import Container from '@/components/layout/Container';
import { Button } from '@/components/ui/button';
import CardList from '@/components/ui/CardList';
import { Checkbox } from '@/components/ui/checkbox';
import { Link } from 'react-router-dom';

function Cart() {
  return (
    <Container className='pb-[100px]'>
      <h1 className='pb-8'>My Cart</h1>
      <div className='md:flex gap-10'>
        {/* left side */}
        <div className='flex-1 '>
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
        {/* right desktop*/}
        <div className='hidden md:block space-y-6 md:w-[318px] shadow-card p-4  bg-white rounded-2xl'>
          <p className='text-xl font-bold'>Loan Summary</p>
          <div className='flex justify-between'>
            <h4>Total Book</h4>
            <h3>2 Items</h3>
          </div>
          <Button className='w-full' variant={'secondary'}>
            <Link to={'/checkout'}>Borrow Books</Link>
          </Button>
        </div>
      </div>
      {/* mobile */}
      <div className='md:hidden border-t-2 flex justify-between fixed items-center w-full left-0 bottom-0 shadow-card p-4 bg-white '>
        <div>
          <h4>Total Book</h4>
          <h3>2 Items</h3>
        </div>
        <Button className='w-1/2' variant={'secondary'}>
          <Link to={'/checkout'}>Borrow Books</Link>
        </Button>
      </div>
    </Container>
  );
}

export default Cart;
