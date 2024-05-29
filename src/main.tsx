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
import Orders from "./pages/orders/Orders.jsx";
import App from "./App.jsx";
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
      element: (
        <App>
          <Home />
        </App>
      ),
      loader: () => Promise.resolve({}),
    },
    {
      path: "/signin",
      element: (
        <App>
          <SignIn />
        </App>
      ),
      loader: () => Promise.resolve({}),
    },
    {
      path: "/signup",
      element: (
        <App>
          <SignUp />
        </App>
      ),
      loader: () => Promise.resolve({}),
    },
    {
      path: "/shop",
      element: (
        <App>
          <Shop />
        </App>
      ),
      loader: () => Promise.resolve({}),
    },
    {
      path: "/contact",
      element: (
        <App>
          <ContactUs />
        </App>
      ),
      loader: () => Promise.resolve({}),
    },
    {
      path: "/checkout/payment/:id",
      element: (
        <App>
          <PrivateRoute>
            <PaymentDeatils />
          </PrivateRoute>
        </App>
      ),
      loader: () => Promise.resolve({}),
    },
    {
      path: "/checkout/delivery/:id",
      element: (
        <App>
          <PaymentDeatils />
        </App>
      ),
      loader: () => Promise.resolve({}),
    },
    {
      path: "/product/:id",
      element: (
        <App>
          <ProductDetails />
        </App>
      ),
      loader: () => Promise.resolve({}),
    },
    {
      path: "/cart",
      element: (
        <App>
          <Cart />
        </App>
      ),
      loader: () => Promise.resolve({}),
    },
    {
      path: "/order/:id",
      element: (
        <App>
          <OrderDetails />
        </App>
      ),
      loader: () => Promise.resolve({}),
    },
    {
      path: "/history",
      element: (
        <App>
          <PrivateRoute>
            <OrderHistory />
          </PrivateRoute>
        </App>
      ),
      loader: () => Promise.resolve({}),
    },
    {
      path: "/account",
      element: (
        <App>
          <PrivateRoute>
            <Account />
          </PrivateRoute>
        </App>
      ),
      loader: () => Promise.resolve({}),

      children: [
        {
          path: "profile/:id",
          element: <Profile />,
          loader: () => Promise.resolve({}),
        },
        {
          path: "password/:id",
          element: <PasswordUpdate />,
          loader: () => Promise.resolve({}),
        },
        {
          path: "card_details/:id",
          element: <CardDetails />,
          loader: () => Promise.resolve({}),
        },
        {
          path: "address_details/:id",
          element: <AddressDetails />,
          loader: () => Promise.resolve({}),
        },
        {
          path: "history",
          element: <Orders />,
          loader: () => Promise.resolve({}),
        },
        {
          path: "*",
          element: <Navigate to="/account/profile/:id" />,
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
