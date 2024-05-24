import ReactDOM from "react-dom/client";
import React, { useEffect, useState } from "react";
import Home from "./pages/home/Home.jsx";
import Shop from "./pages/shop/Shop.jsx";
import ContactUs from "./pages/contactUs/ContactUs.jsx";
import PaymentDeatils from "./pages/paymentDetails/PaymentDetails.jsx";
import DeliveryDetails from "./pages/deliveryDetails/DeliveryDetails.jsx";
import ProductDetails from "./pages/productDetails/ProductDetails.jsx";
import Cart from "./pages/cart/Cart.jsx";
import OrderDetails from "./pages/orderDetails/OrderDetails.jsx";
import OrderHistory from "./pages/orderHistory/OrderHistory.jsx";
import SignIn from "./pages/auth/signin/SignIn.jsx";
import SignUp from "./pages/auth/signup/SignUp.jsx";
import Account from "./pages/account/Account.jsx";
import Profile from "./pages/account/profile/Profile.jsx";
import PasswordUpdate from "./pages/account/passwordUpdate/PasswordUpdate.jsx";
import CardDetails from "./pages/account/cardDetails/CardDetails.jsx";
import AddressDetails from "./pages/account/addressDetails/AddressDetails.jsx";
import { Provider } from "react-redux";
import store from "../redux/store.jsx";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "../redux/actions/authAction.jsx";
import { Dispatch } from "redux";
//create private router
const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(true);
  const dispatch: Dispatch<any> = useDispatch();
  const isLogged = useSelector((state: any) => state.auth.isLogged);

  useEffect(() => {
    const checkUser = async () => {
      await dispatch(getUser());
      setLoading(false);
    };
    checkUser();
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (isLogged) {
    return <>{children}</>;
  } else {
    return <Navigate to="/signin" />;
  }
};

// const loader = async () => {
//   const dispatch: Dispatch<any> = useDispatch();
//   const response = await dispatch(getUser());
//   return response;
// };
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
      element: (
        <PrivateRoute>
          <PaymentDeatils />
        </PrivateRoute>
      ),
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
      element: (
        <PrivateRoute>
          <OrderHistory />
        </PrivateRoute>
      ),
      loader: () => Promise.resolve({}),
    },
    {
      path: "/account",
      element: (
        <PrivateRoute>
          <Account />
        </PrivateRoute>
      ),
      loader: () => Promise.resolve({}),

      children: [
        {
          path: "profile",
          element: <Profile />,
          loader: () => Promise.resolve({}),
        },
        {
          path: "password",
          element: <PasswordUpdate />,
          loader: () => Promise.resolve({}),
        },
        {
          path: "card_details",
          element: <CardDetails />,
          loader: () => Promise.resolve({}),
        },
        {
          path: "addressdetails/",
          element: <AddressDetails />,
          loader: () => Promise.resolve({}),
        },
      ],
    },
  ],
  { basename: "/" }
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
