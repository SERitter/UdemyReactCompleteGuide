import {
  createBrowserRouter,
  // createRoutesFromElements,
  RouterProvider,
  // Route,
} from 'react-router-dom';

import HomePage from './pages/Home';
import ProductsPage from './pages/Products';
import RootLayout from './pages/Root';
import ProductDetailsPage from './pages/ProductDetails';
import ErrorPage from './pages/Error';

// const routerDefinitions = [
//   { path: '/', element: <HomePage /> },
//   { path: '/products', element: <ProductsPage /> },
// ];
// const router = createBrowserRouter(routerDefinitions);

// const routeDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path='/' element={<HomePage />} />
//     <Route path='/products' element={<ProductsPage />} />
//   </Route>
// );
// const router = createBrowserRouter(routeDefinitions);

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'products', element: <ProductsPage /> },
      { path: 'products/:productId', element: <ProductDetailsPage /> },
    ],
  },
  // {
  //   path: '/',
  //   element: <ProductDetailsPage />,
  //   errorElement: <ErrorPage />,
  // },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
