import Footer from '@/pages/Footer';
import Navbar from '@/pages/Navbar';
import NavbarGuest from '@/pages/NavbarGuest';
import { RootState } from '@/redux/store';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

function MainLayout() {
  const user = useSelector((state: RootState) => state.auth.user);

  return (
    <div>
      {user ? <Navbar /> : <NavbarGuest />}
      <main className='px-[14.5px] md:px-[120px] font-quicksand bg-[#fafafa] '>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
