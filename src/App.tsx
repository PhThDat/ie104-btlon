import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomePage from './routes/home/HomePage'
import Root from './routes/root/Root'
import { RecoilRoot } from 'recoil'
import ErrorPage from './routes/error/ErrorPage';
import AboutPage from './routes/about/AboutPage';
import LocationPage from './routes/location/LocationPage';
import MenuPage from './routes/menu/MenuPage';
import ProductPage from './routes/menu/product/ProductPage';
import ContactPage from './routes/contact/ContactPage';
import SnowContainer from './components/snow/SnowContainer';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root id="common" />,
    children: [
      {
        path: "/",
        element: <HomePage id="home" />,
      },
      {
        path: "/about",
        element: <AboutPage id="about" />
      },
      {
        path: "/location",
        element: <LocationPage id="location" />
      },
      {
        path: "/menu",
        element: <MenuPage id="menu" />,
      },
      {
        path: "/menu/:codename",
        loader: ({ params }) => params.codename ?? "",
        element: <ProductPage id="product" />
      },
      {
        path: "/contact",
        element: <ContactPage id="contact" />
      }
    ],
    errorElement: <ErrorPage />
  }
]);

const App = () => {
  return (
    <RecoilRoot>
      <SnowContainer />
      <RouterProvider router={router} />
    </RecoilRoot>
  )
}

export default App
