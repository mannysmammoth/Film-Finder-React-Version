import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { createBrowserRouter, RouterProvider, } from 'react-router-dom';
import NotFoundPage from './components/notFoundPage.tsx';
import SearchPage from './pages/searchPage.tsx';
import Selected from './pages/selected.tsx';

const router = createBrowserRouter([
  {path:"/", element: <App />},
  {path:"*", element: <NotFoundPage />},
  {path:"/search", element: <SearchPage />},
  {path:"/selected/:imdbID", element: <Selected />},
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
