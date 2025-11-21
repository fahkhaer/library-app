import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';
import Container from '@/components/layout/Container';
import { ArrowLeft, CloudUpload } from 'lucide-react';
import { Textarea } from '@/components/ui/textarea';
import { AddBookForm } from '@/types/books';
import { Link } from 'react-router-dom';

function AddBook() {
  const [form, setForm] = useState<AddBookForm>({
    title: '',
    author: '',
    category: '',
    pages: 0,
    description: '',
    cover: null,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const err: Record<string, string> = {};

    if (!form.title) err.title = 'Title is required';
    if (!form.author) err.author = 'Author is required';
    if (!form.category) err.category = 'Category is required';
    if (!form.pages || form.pages <= 0)
      err.pages = 'Number of pages must be > 0';
    if (!form.description) err.description = 'Description is required';
    if (!form.cover) err.cover = 'Cover image is required';

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    console.log('READY TO SEND:', form);
  };

  return (
    <Container className='py-4'>
      <form
        onSubmit={handleSubmit}
        className='w-full mx-auto max-w-[592px] space-y-4'
      >
        <div className='flex gap-4 items-center'>
          <Link to={'/admin'}>
            <ArrowLeft className='size-8' />
          </Link>
          <h1 className='text-xl font-semibold flex items-center gap-2'>
            Add Book
          </h1>
        </div>

        <div className='space-y-5'>
          {/* Title */}
          <div>
            <label className='block mb-1 text-sm font-bold'>Title</label>
            <Input
              type='text'
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              className='h-12 border-neutral-300 rounded-xl px-4'
            />
            {errors.title && (
              <p className='text-[#EE1D52] text-sm-medium'>{errors.title}</p>
            )}
          </div>

          {/* Author */}
          <div>
            <label className='block mb-1 text-sm font-bold'>Author</label>
            <Input
              type='text'
              value={form.author}
              onChange={(e) => setForm({ ...form, author: e.target.value })}
              className='h-12 border-neutral-300 rounded-xl px-4'
            />
            {errors.author && (
              <p className='text-[#EE1D52] text-sm-medium'>{errors.author}</p>
            )}
          </div>

          {/* Category */}
          <div>
            <label className='block mb-1 text-sm font-bold'>Category</label>
            <Select
              onValueChange={(value) => setForm({ ...form, category: value })}
            >
              <SelectTrigger className='h-12 border-neutral-300 rounded-xl py-2 px-4'>
                <SelectValue placeholder='Select Category' />
              </SelectTrigger>

              <SelectContent className='bg-white'>
                <SelectItem value='fiction'>Fiction</SelectItem>
                <SelectItem value='nonfiction'>Non-Fiction</SelectItem>
                <SelectItem value='fantasy'>Fantasy</SelectItem>
                <SelectItem value='biography'>Biography</SelectItem>
              </SelectContent>
            </Select>
            {errors.category && (
              <p className='text-[#EE1D52] text-sm-medium'>{errors.category}</p>
            )}
          </div>

          {/* Pages */}
          <div>
            <label className='block mb-1 text-sm font-bold'>
              Number of Pages
            </label>
            <Input
              type='number'
              value={form.pages}
              onChange={(e) =>
                setForm({ ...form, pages: Number(e.target.value) })
              }
              className='h-12 border-neutral-300 rounded-xl px-4'
            />
            {errors.pages && (
              <p className='text-[#EE1D52] text-sm-medium'>{errors.pages}</p>
            )}
          </div>

          {/* Description */}
          <div>
            <label className='block mb-1 text-sm font-bold'>Description</label>
            <Textarea
              value={form.description}
              onChange={(e) =>
                setForm({ ...form, description: e.target.value })
              }
              className='md:h-[101px] border-neutral-300 rounded-xl py-2 px-4 resize-none'
            />
            {errors.description && (
              <p className='text-[#EE1D52] text-sm-medium'>
                {errors.description}
              </p>
            )}
          </div>

          {/* Cover */}
          <div>
            <label className='block mb-1 text-sm font-bold'>Cover Image</label>

            <label
              htmlFor='cover'
              className='w-full border border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center py-10 gap-2 cursor-pointer hover:bg-gray-50'
            >
              <div className='p-2 border border-neutral-300 rounded-md'>
                <CloudUpload size={40} />
              </div>
              <p className='text-sm-semibold'>
                <span className='text-[#1C65DA] text-sm-bold'>
                  Click to upload
                </span>{' '}
                or drag and drop
              </p>
              <p className='text-sm-semibold '>PNG or JPG (max. 5mb)</p>
            </label>

            <input
              id='cover'
              type='file'
              accept='image/*'
              className='hidden'
              onChange={(e) =>
                setForm({ ...form, cover: e.target.files?.[0] || null })
              }
            />

            {errors.cover && (
              <p className='text-[#EE1D52] text-sm-medium'>{errors.cover}</p>
            )}
          </div>

          <Button type='submit' className='w-full' variant='secondary'>
            Save
          </Button>
        </div>
      </form>
    </Container>
  );
}

export default AddBook;
