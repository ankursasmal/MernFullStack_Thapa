import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './component/Home';
import Contact from './component/Contact';
import About from './component/About';
import Login from './component/Login';
import Logout from './component/Logout';

import SignUp from './component/SignUp';
import AboutComponent from './component/AboutComponent';
import TimelineComponent from './component/TimelineComponent';
import Error404 from './component/Error404';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[{
      path: "/",
      element: <Home/>,
    },
    {
      path: "/home",
      element: <Home/>,
    },
  {
    path: "/contact",
    element: <Contact/>,
  },
  {
    path: "/logout",
    element: <Logout/>,
  },
  {
    path: "/about",
    element: <About/>,
    children:[
      {
        path: "/about",
      element: <AboutComponent/>,
      }
      ,{
      path: "/about/abutcomponent",
    element: <AboutComponent/>,
    },{
    path: "/about/timeline",
    element: <TimelineComponent/>
    }
  
  ]
  },
  { path: "/signIn",
  element: <Login/>,
},
{
  path: "/signUp",
  element: <SignUp/>,
}
 , 
  
{
    path:"/*",
    element:<Error404/>

  }
]},
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
