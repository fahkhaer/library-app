import { cn } from '@/lib/utils';
import { Button } from './button';

type LoadMoreButtonProps = {
  className?: string;
};

function LoadMoreButton({ className }: LoadMoreButtonProps) {
  return (
    <Button
      className={cn(
        'mx-auto p-2 rounded-full flex items-center justify-center text-md-bold leading-7',
        'border border-neutral-300 hover:bg-neutral-400',
        'md:w-[200px] ',
        className
      )}
    >
      Load More
    </Button>
  );
}

export default LoadMoreButton;
