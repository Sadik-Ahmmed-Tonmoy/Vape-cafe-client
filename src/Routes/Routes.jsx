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
import Cart from './../Pages/Dashboard/Cart/Cart';
import AddProduct from './../Pages/Dashboard/AddProduct/AddProduct';
import PaymentSuccess from "../Pages/Home/PaymentSuccess/PaymentSuccess";
import PaymentFailed from "../Pages/Home/PaymentFailed/PaymentFailed";

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
        {
          path: "/payment/success/:id",
          element: <PaymentSuccess/>,
        },
        {
          path: "/payment/fail/:id",
          element: <PaymentFailed/>,
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
        {
          path: "/Dashboard/cart",
          element: <Cart/>,
        },
        {
          path: "/Dashboard/addProduct",
          element: <AddProduct/>,
        },
      ]
    }
  ]);