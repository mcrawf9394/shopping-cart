import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ErrorPage from './ErrorPage.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Homepage from './Homepage.jsx'
import Cart from './Shopping-Cart-Page.jsx'
const router = createBrowserRouter([
  {
    path: "*",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "store",
        element: <Homepage />
      },
      {
        path: "cart",
        element: <Cart />
      } 
    ]
  },
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} className="min-h-full" />
  </React.StrictMode>,
)
