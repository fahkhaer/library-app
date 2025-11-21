import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import DetailPage from './pages/DetailPage.tsx';
import Category from './pages/Category.tsx';
import BookByAuthor from './pages/BookByAuthor.tsx';
import Cart from './pages/Cart.tsx';
import Login from './pages/Login.tsx';
import Register from './pages/Register.tsx';
import UserTabs from './pages/UserTabs.tsx';
import AdminTabs from './pages/AdminTabs.tsx';
import Home from './pages/Home.tsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout.tsx';
import AuthLayout from './components/layout/AuthLayout.tsx';
import Checkout from './pages/Checkout.tsx';
import { Provider } from 'react-redux';
import { store } from './redux/store.ts';
import Success from './pages/Success.tsx';
import AddBook from './pages/AddBook.tsx';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route element={<AuthLayout />}>
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
              <Route path='/success' element={<Success />} />
            </Route>
            <Route element={<MainLayout />}>
              <Route path='/' element={<Home />} />
              <Route path='/user' element={<UserTabs />} />
              <Route path='/admin' element={<AdminTabs />} />
              <Route path='/detail/:id' element={<DetailPage />} />
              <Route path='/category' element={<Category />} />
              <Route path='/authors-book/:id' element={<BookByAuthor />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/checkout' element={<Checkout />} />
              <Route path='/add-book' element={<AddBook />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </Provider>
  </StrictMode>
);
