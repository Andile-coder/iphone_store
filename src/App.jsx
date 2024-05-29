import "./App.css";
import React, { useEffect } from "react";
import Shop from "./pages/shop/Shop";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../redux/actions/authAction";
import { getImageByTag } from "../redux/actions/cloudinaryActions";
import AlertCard from "./components/cards/alertCard/AlertCard";

function App({ children }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const userProfileImage = useSelector(
    (state) => state.cloudinary.userProfileImage
  );

  const getUserHandler = async () => {
    const response = await dispatch(getUser());
    return response;
  };

  useEffect(() => {
    const fetchUserData = async () => {
      const userResponse = await getUserHandler();
      console.log("userResponse", userResponse.data.user_id);
      if (userResponse && userResponse.data.user_id) {
        console.log("userResponse", userResponse);
        await dispatch(getImageByTag(userResponse.data.user_id));
      }
    };

    fetchUserData();
  }, [dispatch]);

  useEffect(() => {
    getUserHandler();
  }, [userProfileImage]);
  // get products

  return (
    <>
      <AlertCard />
      {children}
    </>
  );
}

export default App;
