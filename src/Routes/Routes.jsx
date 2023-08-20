import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from './../Pages/Home/Home/Home';
import Login from './../Pages/Login/Login';
import SignUp from './../Pages/SignUp/SignUp';
import ComponentsHome from './../Pages/ComponentsHome/ComponentsHome';
import Dashboard from './../Layout/Dashboard/Dashboard';

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
    //   errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home/>,
        },
        {
          path: "/userLogin",
          element: <Login/>,
        },
        {
          path: "/signUp",
          element: <SignUp/>,
        },
      ],
    },
    {
      path: "/Dashboard",
      element: <Dashboard/>,
      children: [
        {
          path: "/Dashboard/:category",
          element: <ComponentsHome/>,
        },
      ]
    }
  ]);