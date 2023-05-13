import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import{ createBrowserRouter, RouterProvider } from "react-router-dom"

import Home from './pages/home/home.jsx'
import Finalizar from './pages/finalizar-compra/finalizar.jsx'
const router = createBrowserRouter([

  {
    path: "/",
    element: <Home/>

  },
  {
    path: "/finalizar",
    element: <Finalizar/>
  }


]

)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
