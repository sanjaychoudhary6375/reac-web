import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Github from './components/Github/Github'
import Home from './components/Home/Home'
import Product from './components/Product/Product'
import User from './components/User/User'
// import App from './App.jsx'
import './index.css'
import Layout from './Layout'

// const routes = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "/",
//         element: <Home />
//       },
//       {
//         path: "about",
//         element: <About />
//       }
//     ]
//   }
// ])

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='github' element={<Github />} />
      <Route path='product' element={<Product />} />
      <Route path='user/:userId' element={<User />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>,
)
