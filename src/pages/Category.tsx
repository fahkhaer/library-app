import {  GetBooklist } from '@/api/user/booklist';
import { GetCategories } from '@/api/user/categories';
import Container from '@/components/layout/Container';
import Card from '@/components/ui/Card';
import { Checkbox } from '@/components/ui/checkbox';
import { Book } from '@/types/books';
import { Star } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Category() {
  const [selectedCategories, setSelectedCategories] = useState<number[]>([]);
  const [selectedRatings, setSelectedRatings] = useState<number[]>([]);

  const { data: categories, isLoading, error } = GetCategories();
  const {
    data: booklist,
    isLoading: isLoadingBooks,
    error: errorBooks,
  } = GetBooklist();

  const toggleCategory = (id: number) => {
    setSelectedCategories((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
    );
  };

  const toggleRating = (rating: number) => {
    setSelectedRatings((prev) =>
      prev.includes(rating)
        ? prev.filter((r) => r !== rating)
        : [...prev, rating]
    );
  };

  if (isLoadingBooks || isLoading) return <p>Loading...</p>;
  if (errorBooks || error) return <p>Error loading data</p>;

  const filteredBooks = booklist?.filter((book: Book) => {
    const matchCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(book.categoryId);
    const matchRating =
      selectedRatings.length === 0 ||
      selectedRatings.includes(Math.floor(book.rating));
    return matchCategory && matchRating;
  });

  return (
    <Container className='flex gap-5 md:pb-[97px]'>
      {/* Left side */}
      <section className='w-full shadow-card max-w-[266px] rounded-xl bg-white py-4 space-y-6'>
        {/* Category */}
        <div className='space-y-2.5 px-4'>
          <div className='space-y-2.5'>
            <h3>FILTER</h3>
            <h2>Category</h2>

            {categories?.map((item) => (
              <div key={item.id} className='flex items-center gap-2'>
                <Checkbox
                  id={`cat-${item.id}`}
                  checked={selectedCategories.includes(item.id)}
                  onCheckedChange={() => toggleCategory(item.id)}
                />
                <label htmlFor={`cat-${item.id}`} className='text-md-regular'>
                  {item.name}
                </label>
              </div>
            ))}
          </div>
        </div>

        <hr className='border-neutral-300' />

        {/* Rating */}
        <div className='space-y-2.5 px-4'>
          <h2>Rating</h2>
          <div className='space-y-4'>
            {[5, 4, 3, 2, 1].map((star) => (
              <div key={star} className='flex items-center gap-2'>
                <Checkbox
                  id={`rating-${star}`}
                  checked={selectedRatings.includes(star)}
                  onCheckedChange={() => toggleRating(star)}
                />
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

      {/* Right side */}
      <section className='grid grid-cols-2 md:grid-cols-4 gap-4 w-full'>
        {filteredBooks?.map((item: Book) => (
          <Link key={item.id} to={`/detail/${item.id}`} className='block'>
            <Card
              name={item.title}
              author={item.author.name}
              image={item.coverImage}
              rating={item.rating}
            />
          </Link>
        ))}
      </section>
    </Container>
  );
}

export default Category;
