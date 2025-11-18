import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Navbar from './pages/Navbar.tsx';

import Home from './pages/Home.tsx';
import Category from './pages/Category.tsx';
import DetailPage from './pages/DetailPage.tsx';
import BookByAuthor from './pages/BookByAuthor.tsx';
import Cart from './pages/Cart.tsx';
import Login from './pages/Login.tsx';
import Register from './pages/Register.tsx';
import UserTabs from './pages/UserTabs.tsx';
import AdminTabs from './pages/AdminTabs.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Navbar />
    <div className='px-[120px] font-quicksand bg-[#fafafa] '>
      <Register />
      <Login />
      <UserTabs />
      <AdminTabs />
      <Home />
      <DetailPage />
      <Category />
      <BookByAuthor />
      <Cart />
    </div>
  </StrictMode>
);
