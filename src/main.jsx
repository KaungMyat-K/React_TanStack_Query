import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {Provider} from 'react-redux'
import store from './store/Store.jsx';
import { RouterProvider } from 'react-router-dom';
import router from './router/Router.jsx';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
const queryClient = new QueryClient();

root.render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <StrictMode>
        <RouterProvider router={router}/>
        <ReactQueryDevtools initialIsOpen={false} position='buttom-right' />
      </StrictMode>
    </Provider>
  </QueryClientProvider>,
)
