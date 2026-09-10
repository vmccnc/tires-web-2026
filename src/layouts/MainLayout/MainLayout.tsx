import { Footer } from '@/widgets/Footer/ui';
import { Header } from '@/widgets/Header';
import { Outlet, ScrollRestoration } from 'react-router-dom';

export const MainLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration />
    </>
  );
};
