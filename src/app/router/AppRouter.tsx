import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { MainLayout } from '@/layouts/MainLayout';
import { appRoutes } from './appRoutes';

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: appRoutes.map(({ path, component: Component }) => ({
      path,
      element: <Component />,
    })),
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
