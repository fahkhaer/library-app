import { useState } from 'react';
import { GetCart, useDeleteCart } from '@/api/user/cart';
import Container from '@/components/layout/Container';
import { Button } from '@/components/ui/button';
import CardList from '@/components/ui/CardList';
import { Checkbox } from '@/components/ui/checkbox';
import { OrderItem } from '@/types/cart';
import { Link } from 'react-router-dom';

function Cart() {
  const { data, isLoading, error } = GetCart();
  const deleteCart = useDeleteCart();

  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  const handleCheckboxChange = (bookId: number, checked: boolean) => {
    if (checked) {
      setSelectedItems((prev) => [...prev, bookId]);
    } else {
      setSelectedItems((prev) => prev.filter((id) => id !== bookId));
    }
  };

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedItems(data.items.map((item: OrderItem) => item.bookId));
    } else {
      setSelectedItems([]);
    }
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading cart</p>;

  const allSelected =
    selectedItems.length === data.items.length && data.items.length > 0;
    
  return (
    <Container className='pb-[100px]'>
      <h1 className='pb-8'>My Cart</h1>
      <div className='md:flex gap-10'>
        {/* left side */}
        <div className='flex-1'>
          {/* Select All */}
          <div className='flex justify-between gap-4 mb-4'>
            <div className='flex items-center gap-4'>
              <Checkbox
                id='select-all'
                checked={allSelected}
                onCheckedChange={(checked) =>
                  handleSelectAll(checked as boolean)
                }
              />
              <label htmlFor='select-all' className='text-md font-semibold'>
                Select All
              </label>
            </div>

            {/* delete cart */}
            <Button
              onClick={() => deleteCart.mutate()}
              variant='outline'
              className='w-fit md:w-24'
            >
              <h3 className='text-[#EE1D52]'>Clear cart</h3>
            </Button>
          </div>

          {/* cards */}
          <div className='divide-y first:pt-0 flex flex-col divide-neutral-300'>
            {data.items.length === 0 ? (
              <p>Cart empty</p>
            ) : (
              data.items.map((item: OrderItem, i: number) => (
                <div key={i} className='flex py-6 w-full gap-4'>
                  <Checkbox
                    id={`select-${item.bookId}`}
                    checked={selectedItems.includes(item.bookId)}
                    onCheckedChange={(checked) =>
                      handleCheckboxChange(item.bookId, checked as boolean)
                    }
                  />
                  <CardList
                    bookId={item.bookId}
                    title={item.book?.title}
                    image={item.book?.coverImage}
                  />
                </div>
              ))
            )}
          </div>
        </div>

        {/* right desktop */}
        <div className='hidden md:block space-y-6 md:w-[318px] shadow-card p-4 bg-white rounded-2xl'>
          <p className='text-xl font-bold'>Loan Summary</p>
          <div className='flex justify-between'>
            <h4>Selected Book</h4>
            <h3>
              {selectedItems.length}{' '}
              {selectedItems.length === 1 ? 'items' : 'item'}
            </h3>
          </div>
          <Button
            className='w-full'
            variant={'secondary'}
            disabled={selectedItems.length === 0}
          >
            <Link
              to={selectedItems.length > 0 ? ('/checkout') : '#'}
              state={{ selectedItems }}
              className={
                selectedItems.length === 0 ? 'pointer-events-none' : ''
              }
            >
              Borrow Books
            </Link> 
          </Button>
        </div>
      </div>
      {/* mobile */}
      <div className='md:hidden border-t-2 flex justify-between fixed items-center w-full left-0 bottom-0 shadow-card p-4 bg-white'>
        <div>
          <h4>Total Book</h4>
          <h3>
            {selectedItems.length}{' '}
            {selectedItems.length === 1 ? 'items' : 'item'}
          </h3>
        </div>
        <Button className='w-1/2' variant={'secondary'}>
          <Link to={'/checkout'}>Borrow Books</Link>
        </Button>
      </div>
    </Container>
  );
}

export default Cart;
