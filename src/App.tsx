import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './Pages/Home';
import Products from './Pages/Products';
import MainLayout from './layout/MainLayout';

const router = createBrowserRouter([{
   path: '',
    element: <MainLayout/>,
    children: [
      {
        path: 'home',
        index: true,
        element: <Home />
      },
      {
        path: 'products',
        element: <Products />
      },]
}]);

function App(){
  return (
    <RouterProvider router={router} />
  )
}
              
    
export default App
