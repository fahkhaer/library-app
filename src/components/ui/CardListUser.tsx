import { Star } from 'lucide-react';
import { Badge } from './badge';
import { Button } from './button';
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from '@/components/ui/alert-dialog';
import { Link } from 'react-router-dom';

function CardListUser() {
  return (
    <div className='md:flex justify-end p-5 rounded-2xl bg-white items-center space-y-4'>
      {/* left side */}
      <div className='flex w-full gap-4 '>
        <img className='h-[138px] w-auto' src='/cover.png' alt='' />
        <div className='flex flex-col gap-1'>
          <Badge variant={'outline'} className='px-2 rounded-sm'>
            Business & Economics{' '}
          </Badge>
          <h2>Book Name</h2>
          <h4>Author Name</h4>
          <div className='flex gap-0.5 items-center'>
            <Star
              className='inline-block size-6 text-[#FFAB0D]'
              fill='#FFAB0D'
            />
            <span className='text-md-semibold ml-1'>4.5</span>
          </div>
        </div>
      </div>
      {/* right side */}
      <div className='flex gap-[13px]'>
        <Button variant={'outline'} className=' w-full md:w-24'>
          <Link to={'/preview-book/1'}>
            <h3>Preview</h3>
          </Link>
        </Button>
        <Link to={'/add-book'}>
          <Button variant={'outline'} className=' w-full md:w-24'>
            <h3>Edit</h3>
          </Button>
        </Link>
        {/* delete button */}
        <AlertDialog>
          <AlertDialogTrigger>
            <Button variant='outline' className='w-full md:w-24'>
              <h3 className='text-[#EE1D52]'>Delete</h3>
            </Button>
          </AlertDialogTrigger>

          <AlertDialogContent className='rounded-2xl bg-white'>
            <AlertDialogHeader className='font-quicksand text-left'>
              <AlertDialogTitle>
                <h2 className=''>Delete Data</h2>
              </AlertDialogTitle>

              <AlertDialogDescription>
                <p className='text-sm-semibold md:text-md-semibold'>
                  Once deleted, you won’t be able to recover this data.{' '}
                </p>
              </AlertDialogDescription>
            </AlertDialogHeader>

            <AlertDialogFooter>
              <div className='flex items-center gap-4 justify-around'>
                <AlertDialogCancel className='w-full mt-0'>
                  Cancel
                </AlertDialogCancel>

                <AlertDialogAction
                  style={{ backgroundColor: '#D9206E' }}
                  className='text-white w-full hover:opacity-90'
                >
                  Confirm
                </AlertDialogAction>
              </div>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
}

export default CardListUser;
