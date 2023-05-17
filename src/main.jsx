import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import{ createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/home/Home.jsx';
import Finalizar from './pages/finalizar-compra/Finalizar.jsx';
import { Provider } from 'react-redux';
import store from './store/index';


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
    <Provider store={store}>
     <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>
)
