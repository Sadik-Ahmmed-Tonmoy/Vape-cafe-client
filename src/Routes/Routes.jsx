import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from './../Pages/Home/Home/Home';
import Components from './../Layout/Components/Components';
import HighEnd from './../Pages/HighEnd/HighEnd';
import Login from './../Pages/Login/Login';
import SignUp from './../Pages/SignUp/SignUp';

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
      path: "/components",
      element: <Components/>,
      children: [
        {
          path: "/components/highEnd",
          element: <HighEnd/>,
        },
      ]
    }
  ]);