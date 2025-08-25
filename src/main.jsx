import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import Test from './component/Test'
import Admin from './component/Admin'
import About from './component/About'
import './index.css'
import "./styles/index.css"
import Home from './Pages/Home'
import NotFound from './component/NotFound'
import Header from './component/Layout/Header'
import Footer from './component/Layout/Footer'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import My_example from './view/My_example'


const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      // { index: true, Component: Header },
      // { path: "Home", Component: Home },
      // { path: "Footer", Component: My_example },
    ]
  },
  {
    path: "*", Component: NotFound
  },
  {
    path: "*",
    Component: NotFound
  },
  // {
  //   path: "/about",
  // }
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </StrictMode>,
)