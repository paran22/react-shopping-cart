import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import ProductsPage from './pages/products/ProductsPage';
import CartsPage from './pages/carts/CartsPage';
import OrdersPage from './pages/orders/OrdersPage';
import OrderDetailPage from './pages/orderDetail/OrderDetailPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'products',
        element: <ProductsPage />,
      },
      {
        path: 'carts',
        element: <CartsPage />,
      },
      {
        path: 'orders',
        element: <OrdersPage />,
        children: [
          {
            path: ':id',
            element: <OrderDetailPage />,
          },
        ],
      },
    ],
  },
]);
