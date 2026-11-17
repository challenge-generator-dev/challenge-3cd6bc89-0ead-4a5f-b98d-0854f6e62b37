import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ProductCatalog } from './features/products/ProductCatalog';
import { CartView } from './features/cart/CartView';
import { OrderSummaryView } from './features/order/OrderSummaryView';
import { ProductApiClient } from './shared/services/ProductApiClient';
import { InMemoryCartRepository } from './shared/repositories/CartRepository';
import { CartService } from './shared/services/CartService';
import { OrderSummaryService } from './shared/services/OrderSummaryService';

const queryClient = new QueryClient();

const cartRepository = new InMemoryCartRepository();
const cartService = new CartService(cartRepository);
const orderSummaryService = new OrderSummaryService();

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ProductCatalog
        productRepository={new ProductApiClient()}
        cartService={cartService}
      />
    ),
  },
  {
    path: '/cart',
    element: <CartView cartService={cartService} />,
  },
  {
    path: '/order-summary',
    element: (
      <OrderSummaryView
        cart={cartService.getCart()}
        orderSummaryService={orderSummaryService}
      />
    ),
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);