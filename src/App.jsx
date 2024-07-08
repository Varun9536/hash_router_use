
// import './App.css'

import { createBrowserRouter, HashRouter, BrowserRouter , Link, Route, RouterProvider, Routes } from "react-router-dom"
import Address from "./components/Address"
import Contact from "./components/Contact"
import Home from "./components/Home"

function App() {

  // const router = createBrowserRouter([

  //   {
  //     path : "/" ,
  //     element : <Home/>,
  //     children :[{

  //       path: "/address",
  //       element: <Address />

  //     },

  //     {
  //       path: "/contact",
  //       element: <Contact />
  //     }]
  //   } ,



  // ])

  return (
    <>
      <BrowserRouter>

        <Routes>

          <Route path="/" element = {<div><Link to = "/varun">varun</Link></div>} />

          <Route path="/varun" element={<Home />}   >

            <Route path="address" element={<Address />} />
            <Route path="contact" element={<Contact />} />
          </Route>

        </Routes>
      </BrowserRouter>

      {/* <RouterProvider  router={router} /> */}
    </>
  )
}

export default App
