import { createBrowserRouter } from 'react-router-dom';
import Posts from './../pages/Posts';
import { About } from './../pages/About';
import { Layout } from './../components/Layout/Layout';


export const AppRouter = createBrowserRouter([
  {
  path: "/",
  element: <Layout />,
  errorElement: <div>404</div>,
  children: [
      {
      path: "/",
      element: <Posts />,
      // children: [
      //   {
      //     path: "/profiles/:profileId",
      //     element: <ProfilePage />,
      //   },
      // ]
      },
      {
      path: "/about",
      element: <About />,
      },
      ]
  },
]);