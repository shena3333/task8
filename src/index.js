import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/App';
import Contacts from './pages/contacts/contacts';
import Photo from './pages/photo/photo';
import Plus from './pages/plus/plus';
import Portfolio from './pages/portfolio/portfolio';
import Footer from './pages/footer/footer';
import Header from './pages/header/header';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/portfolio",
    element: <Portfolio />,
  },
  {
    path: "/photo",
    element: <Photo />,
  },
  {
    path: "/contacts",
    element: <Contacts />,
  },
  {
    path: "/plus",
    element: <Plus />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div><Header /> 
    <RouterProvider router={router} />
    <Footer />
    </div>
  </React.StrictMode>
);


