import Container from '@/components/layout/Container';
import Card from '@/components/ui/Card';
import { Checkbox } from '@/components/ui/checkbox';
import { Star } from 'lucide-react';

function Category() {
  return (
    <Container className='flex gap-5 md:pb-[97px]'>
      {/*left side */}
      <section className='w-full shadow-card max-w-[266px] rounded-xl  bg-white py-4 space-y-6'>
        {/* Category */}
        <div className='space-y-2.5 px-4'>
          <div className='space-y-2.5'>
            <h3>FILTER</h3>
            <h2>Category</h2>
            <div className='flex items-center gap-2'>
              <Checkbox id='fiction' />
              <label htmlFor='fiction' className='text-md-regular'>
                Fiction
              </label>
            </div>

            <div className='flex items-center gap-2'>
              <Checkbox id='nonfiction' />
              <label htmlFor='nonfiction' className='text-md-regular'>
                Non-fiction
              </label>
            </div>

            <div className='flex ßitems-center gap-2'>
              <Checkbox id='selfimprove' />
              <label htmlFor='selfimprove' className='text-md-regular'>
                Self-Improve
              </label>
            </div>

            <div className='flex items-center gap-2'>
              <Checkbox id='finance' />
              <label htmlFor='finance' className='text-md-regular'>
                Finance
              </label>
            </div>

            <div className='flex items-center gap-2'>
              <Checkbox id='science' />
              <label htmlFor='science' className='text-md-regular'>
                Science
              </label>
            </div>

            <div className='flex items-center gap-2'>
              <Checkbox id='education' />
              <label htmlFor='education' className='text-md-regular'>
                Education
              </label>
            </div>
          </div>
        </div>

        <hr className='border-neutral-300' />

        {/* Rating */}
        <div className='space-y-2.5 px-4'>
          <h2>Rating</h2>

          <div className='space-y-4'>
            {[5, 4, 3, 2, 1].map((star) => (
              <div key={star} className='flex items-center gap-2'>
                <Checkbox id={`rating-${star}`} />
                <div className='flex items-center gap-1'>
                  <Star className='h-4 w-4 fill-[#FFAB0D] stroke-transparent' />
                  <label htmlFor={`rating-${star}`} className='text-md-regular'>
                    {star}
                  </label>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* kanan */}
      <div className='flex flex-wrap w-full gap-2.5'>
        <Card className='w-1/4' />
      </div>
    </Container>
  );
}

export default Category;
