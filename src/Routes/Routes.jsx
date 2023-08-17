import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from './../Pages/Home/Home/Home';
import Components from './../Layout/Components/Components';
import HighEnd from './../Pages/HighEnd/HighEnd';

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