import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router-dom";
import router from './router/Router';
import AuthProvider from './provider/AuthProvider';
import { Toaster } from 'react-hot-toast';
import { HelmetProvider } from 'react-helmet-async';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
    </HelmetProvider>
    <Toaster />
  </React.StrictMode>,
)
