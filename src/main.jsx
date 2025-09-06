import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import NotFound from './component/NotFound'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Login from './Pages/Auth/Login/Login'
import Register from './Pages/Auth/Register/Register'
import { MyContextProvider } from './context/MyContext';


const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      // { index: true, Component: Header },
    ]
  },
  {
    path: "*", Component: NotFound
  },
  {
    path: "*",
    Component: NotFound
  },
  {
    path: "/login", Component: Login
  },
  {
    path: "/register", Component: Register
  }
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <MyContextProvider>
      <RouterProvider router={router} />
    </MyContextProvider>
  </StrictMode>,
)