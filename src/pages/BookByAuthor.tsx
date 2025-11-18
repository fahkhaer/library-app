import Container from '@/components/layout/Container';
import AuthorCard from '@/components/ui/AuthorCard';
import Card from '@/components/ui/Card';

function BookByAuthor() {
  return (
    <Container>
      <div>
        <AuthorCard />
        <h2>Book List</h2>
      </div>
      <div className='flex w-full flex-wrap'>
        <Card className='w-1/4' />
      </div>
    </Container>
  );
}

export default BookByAuthor;
