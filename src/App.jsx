import React, { useState } from 'react';
import './App.css'
import Biology from './components/Biology';
import Chemistry from './components/Chemistry';
import Mixed from './components/Mixed';
import Nav from './components/Nav'
import Physics from './components/Physics'

import {
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    element:<Nav/>
  },
  {
    path: "/physics",
    element: <Physics/>
  },
  {
    path: "/chemistry",
    element: <Chemistry/>
  },
  {
    path:"/biology",
    element:<Biology/>
  },
  {
    path:"/mixed",
    element:<Mixed/>
  }

]);



function App() {

  const [score, setScore] = useState(0);
  return (
    <>

      <RouterProvider router={router} />

    </>

  )
}

export default App
