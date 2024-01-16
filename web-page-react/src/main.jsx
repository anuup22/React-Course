import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import { Home, LinkedIn, linkedinInfoLoader } from './components/Index.js'
import { About } from './components/Index.js'
import { Contact } from './components/Index.js'
import { User } from './components/Index.js'


// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "about",
//         element: <About />
//       },
//       {
//         path: "contact",
//         element: <Contact />
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route  path='' element={<Home />}/>
      <Route  path='about' element={<About />}/>
      <Route  path='contact' element={<Contact />}/>
      <Route  path='user/:userId' element={<User />}/>
      <Route  
        loader={linkedinInfoLoader}
        path='linkedin' 
        element={<LinkedIn />}
      />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
