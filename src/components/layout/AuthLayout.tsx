import { Outlet } from 'react-router-dom';

function AuthLayout() {
  return (
    <div className='px-6 md:px-[120px] font-quicksand bg-[#fafafa] min-h-screen flex items-center justify-center'>
      <Outlet />
    </div>
  );
}

export default AuthLayout;
