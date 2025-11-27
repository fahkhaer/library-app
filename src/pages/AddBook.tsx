import { useEffect, useState } from 'react';
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
import { ArrowLeft, CloudUpload, X } from 'lucide-react';
import { Textarea } from '@/components/ui/textarea';
import { AddBookForm, Author, Category } from '@/types/books';
import { Link, useParams } from 'react-router-dom';
import { AddApiBook, EditBook } from '@/api/admin/books';
import { GetCategories } from '@/api/user/categories';
import { GetAuthors } from '@/api/user/authors';
import { Detailbook } from '@/api/user/booklist';
import { Alert, AlertTitle } from '@/components/ui/alert';

function AddBook() {
  const { id } = useParams();
  const bookId = Number(id);

  const addBook = AddApiBook();
  const editBook = EditBook();
  const { data: categoriesData } = GetCategories();
  const { data: authorsData } = GetAuthors();
  const { data: detailBookData, isLoading, error } = Detailbook(bookId);

  const [form, setForm] = useState<AddBookForm>({
    title: '',
    description: '',
    isbn: '',
    publishedYear: 0,
    coverImage: '',
    authorId: 0,
    categoryId: 0,
    totalCopies: 0,
    availableCopies: 0,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const [showSuccess, setShowSuccess] = useState(false);

  const validate = () => {
    const err: Record<string, string> = {};

    if (!form.title) err.title = 'Title is required';
    if (!form.authorId) err.authorId = 'Author is required';
    if (!form.categoryId) err.category = 'Category is required';
    // if (!form.pages || form.pages <= 0)
    // err.pages = 'Number of pages must be > 0';
    if (!form.description) err.description = 'Description is required';
    // if (!form.cover) err.cover = 'Cover image is required';

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    addBook.mutate(
      {
        title: form.title,
        description: form.description,
        isbn: 'fgjkugv',
        publishedYear: 2000,
        coverImage: 'string',
        authorId: form.authorId,
        categoryId: form.categoryId,
        totalCopies: 1,
        availableCopies: 1,
      },
      {
        onSuccess: (data) => {
          console.log('Berhasil:', data);
          setShowSuccess(true);
          setTimeout(() => setShowSuccess(false), 3000);
        },
        onError: (err) => {
          console.log('Error:', err);
        },
      }
    );

    console.log('READY TO SEND:', form);
  };
  const handleEdit = () => {
    editBook.mutate(
      {
        id: bookId,
        payload: {
          title: form.title,
          description: form.description,
          isbn: 'gfjfffgjkugv',
          publishedYear: 2000,
          coverImage: 'string',
          authorId: form.authorId,
          categoryId: form.categoryId,
          totalCopies: 1,
          availableCopies: 1,
        },
      },
      {
        onSuccess: (data) => {
          console.log('Berhasil:', data);
          setShowSuccess(true);
          setTimeout(() => setShowSuccess(false));
        },
        onError: (err) => {
          console.log('Error:', err);
        },
      }
    );
  };
  useEffect(() => {
    if (id && detailBookData) {
      setForm({
        title: detailBookData.title,
        description: detailBookData.description,
        isbn: detailBookData.isbn,
        publishedYear: detailBookData.publishedYear,
        coverImage: detailBookData.coverImage,
        authorId: detailBookData.authorId,
        categoryId: detailBookData.categoryId,
        totalCopies: detailBookData.totalCopies,
        availableCopies: detailBookData.availableCopies,
      });
    }
  }, [id, detailBookData]);

  if (isLoading && id) return <p>Loading...</p>;
  if (error && id) return <p>Error...</p>;

  return (
    <Container className='relative py-4'>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (id) {
            handleEdit();
          } else {
            handleSubmitForm(e);
          }
        }}
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
        {/* add book success */}
        {showSuccess && (
          <Alert className='fixed bg-[#079455] rounded-md  top-0 w-[291px] text-white right-[120px]'>
            <AlertTitle className='flex justify-between items-center w-full'>
              <p className='text-sm-semibold'>Add Success! </p>{' '}
              <X
                onClick={() => setShowSuccess(false)}
                className='cursor pointer size-4'
              />
            </AlertTitle>
          </Alert>
        )}

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
            <Select
              onValueChange={(value) =>
                setForm({ ...form, authorId: Number(value) })
              }
            >
              <SelectTrigger className='h-12 border-neutral-300 rounded-xl py-2 px-4'>
                <SelectValue placeholder='Select Author' />
              </SelectTrigger>

              <SelectContent className='bg-white'>
                {authorsData?.map((cat: Author) => (
                  <SelectItem key={cat.id} value={String(cat.id)}>
                    {cat.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.authorId && (
              <p className='text-[#EE1D52] text-sm-medium'>{errors.authorId}</p>
            )}
          </div>

          {/* Category */}
          <div>
            <label className='block mb-1 text-sm font-bold'>Category</label>
            <Select
              onValueChange={(value) =>
                setForm({ ...form, categoryId: Number(value) })
              }
            >
              <SelectTrigger className='h-12 border-neutral-300 rounded-xl py-2 px-4'>
                <SelectValue placeholder='Select Category' />
              </SelectTrigger>

              <SelectContent className='bg-white'>
                {categoriesData?.map((cat: Category) => (
                  <SelectItem key={cat.id} value={String(cat.id)}>
                    {cat.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {errors.category && (
              <p className='text-[#EE1D52] text-sm-medium'>{errors.category}</p>
            )}
          </div>

          {/* Pages */}
          {/* <div>
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
          </div> */}

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
            {/* 
            <input
              id='cover'
              type='file'
              accept='image/*'
              className='hidden'
              onChange={(e) =>
                setForm({ ...form, cover: e.target.files?.[0] || null })
              }
            /> */}

            {errors.cover && (
              <p className='text-[#EE1D52] text-sm-medium'>{errors.cover}</p>
            )}
          </div>
          <Input
            type='text'
            placeholder='Or paste image URL'
            // value={}
            // onChange={(e) => setCoverUrl(e.target.value)}
            className='flex-1 h-12 rounded-xl px-4 border border-neutral-300'
          />
          <Button type='submit' className='w-full' variant='secondary'>
            Save
          </Button>
        </div>
      </form>
    </Container>
  );
}

export default AddBook;
