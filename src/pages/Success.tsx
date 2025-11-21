import Container from '@/components/layout/Container';
import { Button } from '@/components/ui/button';
import { CheckIcon } from 'lucide-react';

function Success() {
  return (
    <Container className='h-screen flex items-center'>
      <div className='w-full mx-auto flex justify-center'>
        <div className='space-y-8 w-full flex flex-col items-center text-center'>
          <div>
            <div className='relative flex items-center justify-center'>
              {/* Outer rings */}
              <div className='absolute size-[143px] rounded-full border-[1.5px] border-gray-200'></div>
              <div className='absolute size-[130px] rounded-full border-[1.5px] border-gray-200'></div>
              <div className='absolute size-[117px] rounded-full border-[1.5px] border-gray-200'></div>

              {/* Main blue circle */}
              <div className='size-[83px] rounded-full bg-[#1C65DA] flex items-center justify-center'>
                <CheckIcon className='text-white size-[55px]' />
              </div>
            </div>
          </div>

          <div className='space-y-2 pt-8'>
            <p className='md:text-[38px] font-bold text-xl leading-9'>
              Borrowing Successful!
            </p>
            <p className='md:text-lg text-md font-semibold leading-8'>
              Your book has been successfully borrowed. Please return it by
              <span className='text-[#EE1D52]'> 31 August 2025</span>
            </p>
          </div>
          <Button variant={'secondary'} className='h-12 min-w-[268px]'>
            <h3>See Borrowed List</h3>
          </Button>
        </div>
      </div>
    </Container>
  );
}

export default Success;
