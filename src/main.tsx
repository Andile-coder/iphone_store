import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import Home from "./pages/home/Home.jsx";
import Shop from "./pages/shop/Shop.jsx";
import ContactUs from "./pages/contactUs/ContactUs.jsx";
import PaymentDeatils from "./pages/paymentDetails/PaymentDetails";
import DeliveryDetails from "./pages/deliveryDetails/DeliveryDetails.jsx";
import ProductDetails from "./pages/productDetails/ProductDetails.jsx";
import Cart from "./pages/cart/Cart.jsx";
import OrderDetails from "./pages/orderDetails/OrderDetails.jsx";
import OrderHistory from "./pages/orderHistory/OrderHistory.jsx";
import SignIn from "./pages/auth/signin/SignIn.jsx";
import SignUp from "./pages/auth/signup/SignUp.jsx";
import Account from "./pages/account/Account";
import Profile from "./pages/account/profile/Profile.jsx";
import PasswordUpdate from "./pages/account/passwordUpdate/PasswordUpdate.jsx";
import CardDetails from "./pages/account/cardDetails/CardDetails.jsx";
import AddressDetails from "./pages/account/addressDetails/AddressDetails.jsx";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home />,
      loader: () => Promise.resolve({}),
    },
    {
      path: "/signin",
      element: <SignIn />,
      loader: () => Promise.resolve({}),
    },
    {
      path: "/signup",
      element: <SignUp />,
      loader: () => Promise.resolve({}),
    },
    {
      path: "/shop",
      element: <Shop />,
      loader: () => Promise.resolve({}),
    },
    {
      path: "/contact",
      element: <ContactUs />,
      loader: () => Promise.resolve({}),
    },
    {
      path: "/checkout/payment/:id",
      element: <PaymentDeatils />,
      loader: () => Promise.resolve({}),
    },
    {
      path: "/checkout/delivery/:id",
      element: <DeliveryDetails />,
      loader: () => Promise.resolve({}),
    },
    {
      path: "/product/:id",
      element: <ProductDetails />,
      loader: () => Promise.resolve({}),
    },
    {
      path: "/cart",
      element: <Cart />,
      loader: () => Promise.resolve({}),
    },
    {
      path: "/order/:id",
      element: <OrderDetails />,
      loader: () => Promise.resolve({}),
    },
    {
      path: "/history/",
      element: <OrderHistory />,
      loader: () => Promise.resolve({}),
    },
    {
      path: "/account",
      element: <Account />,
      loader: () => Promise.resolve({}),
      children: [
        {
          path: "account/profile",
          element: <Profile />,
          loader: () => Promise.resolve({}),
        },
        {
          path: "account/password",
          element: <PasswordUpdate />,
          loader: () => Promise.resolve({}),
        },
        {
          path: "account/card_details",
          element: <CardDetails />,
          loader: () => Promise.resolve({}),
        },
        {
          path: "account/addressdetails/",
          element: <AddressDetails />,
          loader: () => Promise.resolve({}),
        },
      ],
    },
  ],
  { basename: "/" }
);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
