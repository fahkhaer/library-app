import Footer from '@/pages/Footer';
import Navbar from '@/pages/Navbar';
import NavbarGuest from '@/pages/NavbarGuest';
import { Outlet } from 'react-router-dom';

function MainLayout() {
  const token = localStorage.getItem('token');

  return (
    <div>
      {token ? <Navbar /> : <NavbarGuest />}
      <main className='px-[14.5px] md:px-[120px] font-quicksand bg-[#fafafa] '>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
