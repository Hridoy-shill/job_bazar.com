import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import Statistics from './Components/Statistics/Statistics';
import AppliedJobs from './Components/AppliedJobs/AppliedJobs';
import BlogPage from './Components/BlogPage/BlogPage';
import JobDetails from './Components/JobDetails/JobDetails';

const router = createBrowserRouter([
  {
    path:'/',
    element:<App></App>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader:()=>fetch('/JobCategory.json'),
      },
      
      {
        path:'statistics',
        element:<Statistics></Statistics>,
      },
      {
        path:'job/:id',
        element:<JobDetails></JobDetails>,
      },
      {
        path:'applied',
        element:<AppliedJobs></AppliedJobs>,
        
      },
      {
        path:'blog',
        element:<BlogPage></BlogPage>
      },
    ]
  },
  
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
