import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from './../Pages/Home/Home/Home';
import Login from './../Pages/Login/Login';
import SignUp from './../Pages/SignUp/SignUp';
import ComponentsHome from '../Pages/Dashboard/ComponentsHome/ComponentsHome';
import Dashboard from './../Layout/Dashboard/Dashboard';
import ViewDetails from "../Pages/Dashboard/ViewDetails/ViewDetails";

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
        {
          path: "/Dashboard/productDetails/:id",
          element: <ViewDetails/>,
        },
      ]
    }
  ]);