import { Badge } from '@/components/ui/badge';
import { Command, CommandInput } from '@/components/ui/command';
import { Icon } from '@iconify/react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div
      className='flex font-quicksand h-20 px-[120px] justify-between shadow-[0_0_20px_0_#CBCACA40]
items-center'
    >
      <Link to={'/'}>
        <div className='size-10 w-fit gap-4 flex'>
          <img src='/logotext.png' alt='Logo-text' />
        </div>
      </Link>
      {/* search bar */}
      <div>
        <Command className='rounded-full justify-center h-22 border border-neutral-300 gap-2 px-4 md:min-w-[500px]'>
          <CommandInput
            className='text-neutral-600 text-sm '
            placeholder='Search book '
          />
        </Command>
      </div>

      {/* right side icons */}
      <div className='flex gap-6 items-center '>
        <Link to={'/cart'}>
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
        <div className='flex gap-4 items-center'>
          <Link className='flex gap-4 items-center' to={'/user'}>
            <Avatar>
              <AvatarImage src='https://github.com/shadcn.png' />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <p className='text-lg-semibold'>John Doe</p>
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <ChevronDown className='' />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
