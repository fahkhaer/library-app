import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet';
import { Menu, Search } from 'lucide-react';

import { Icon } from '@iconify/react';
import { Badge } from '@/components/ui/badge';

function NavbarGuest() {
  return (
    <div
      className='flex font-quicksand h-20 px-4 lg:px-[120px] justify-between shadow-[0_0_20px_0_#CBCACA40]
items-center'
    >
      <Link to={'/'}>
        <div className='size-10 w-fit gap-4 flex'>
          <img
            className='h-auto'
            src='/logo.png'
            alt='Logo-text'
            style={{ width: 'clamp(2.5rem, 3.5vw, 2.63rem)' }}
          />
          <p className='hidden md:block items-center tracking-wide font-extrabold text-display-lg'>
            Booky
          </p>
        </div>
      </Link>

      {/* right side icons */}
      {/* mobile */}
      <div className='flex gap-4 items-center'>
        <Search className='lg:hidden block' />
        <Link className='lg:hidden block' to={'/cart'}>
          <div className='relative flex'>
            <Icon
              className='relative'
              icon='lets-icons:bag-fill'
              width='32'
              height='32'
            />{' '}
            <Badge className='absolute hover:bg-red-700 left-5 bg-[#EE1D52] text-white h-5 min-w-5 text-center  rounded-[833.33px] font-mono tabular-nums p-[6.67px]  '>
              1
            </Badge>
          </div>{' '}
        </Link>
        <div className='hidden lg:flex gap-4 items-center '>
          <Link to={'/login'}>
            <Button
              variant={'outline'}
              type='submit'
              className='w-[163px] rounded-full '
            >
              <h3>Login</h3>
            </Button>{' '}
          </Link>
          <Link to={'/login'}>
            <Button variant={'secondary'} type='submit' className=' w-[163px] '>
              <h3>Register</h3>
            </Button>{' '}
          </Link>
        </div>

        <Sheet>
          <SheetTrigger>
            <Menu className='cursor-pointer lg:hidden' />
          </SheetTrigger>
          <SheetContent className='bg-white flex flex-col pt-16 gap-5'>
            <Link to={'/login'}>
              <Button
                variant={'outline'}
                type='submit'
                className='w-[163px] rounded-full '
              >
                <h3>Login</h3>
              </Button>{' '}
            </Link>
            <Link to={'/login'}>
              <Button
                variant={'secondary'}
                type='submit'
                className=' w-[163px] '
              >
                <h3>Register</h3>
              </Button>{' '}
            </Link>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}

export default NavbarGuest;
