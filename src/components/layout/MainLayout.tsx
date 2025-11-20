import Navbar from '@/pages/Navbar';
import { Outlet } from 'react-router-dom';

function MainLayout() {
  return (
    <>
      <Navbar />
      <div className='px-[120px] font-quicksand bg-[#fafafa] '>
        <Outlet />
      </div>
    </>
  );
}

export default MainLayout;
