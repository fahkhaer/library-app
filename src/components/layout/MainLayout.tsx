import Footer from '@/pages/Footer';
import Navbar from '@/pages/Navbar';
import { Outlet } from 'react-router-dom';

function MainLayout() {
  return (
    <>
      {/* <NavbarGuest /> */}
      <Navbar />
      <div className='px-[14.5px] md:px-[120px] font-quicksand bg-[#fafafa] '>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default MainLayout;
