import { socialMediaData } from '@/types/social-media-data';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <section className='font-quicksand py-10 md:py-20 px-4 flex flex-col items-center text-center gap-4 md:gap-10'>
      <div className='flex flex-col items-center gap-4 md:gap-6'>
        <Link to='/'>
          <div className='flex items-center gap-4 w-fit'>
            <img
              className='h-auto'
              src='/logo.png'
              alt='Logo-text'
              style={{ width: 'clamp(2.5rem, 3.5vw, 2.63rem)' }}
            />
            <p className='tracking-wide font-bold md:font-extrabold text-display-xl md:text-display-lg'>
              Booky
            </p>
          </div>
        </Link>

        <p className='text-md-semibold '>
          Discover inspiring stories & timeless knowledge, ready to borrow
          anytime. Explore online or visit our nearest library branch.
        </p>
      </div>

      <div className='flex flex-col items-center gap-5'>
        <p className='text-md-bold'>Follow on Social Media</p>

        <div className='flex gap-4'>
          {socialMediaData.map((icon) => (
            <a
              key={icon.alt}
              href={icon.href}
              target='_blank'
              rel='noopener noreferrer'
              className='flex justify-center items-center size-10 rounded-full border border-neutral-800 p-2.5'
            >
              <img src={icon.src} alt={icon.alt} className='h-full w-auto' />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Footer;
