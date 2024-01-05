import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import Home from "./pages/home/Home.jsx";
import Shop from "./pages/shop/Shop.jsx";
import ContactUs from "./pages/contactUs/ContactUs.jsx";
import PaymentDeatils from "./pages/paymentDetails/PaymentDetails.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <PaymentDeatils />,
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
  ],
  { basename: "/iselliphones" }
);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
