import React, { useEffect, useState } from "react";
import styles from "./account.module.scss";
import NavBar from "../../components/navigation/NavBar";
import user from "../../assets/user.jpg";
import { Link, Outlet, useNavigate } from "react-router-dom";
import AccountNavCard from "../../components/cards/accountNavCard/AccountNavCard";
import Footer from "./../../components/footer/Footer";
import { AiOutlineUser } from "react-icons/ai";
import { MdLockOutline } from "react-icons/md";
import { HiOutlineHome } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../../redux/actions/authAction";
import { getImageByTag } from "../../../redux/actions/cloudinaryActions";
import { IoMdLogOut } from "react-icons/io";
import { FaDropbox } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { getAddress } from "../../../redux/actions/addressActions";
const Account = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const params = useParams();
  const { id } = params;

  let [profilePicUrl, setProfilePicUrl] = useState("");
  const imagePath = useSelector((state) => state.cloudinary.imagePath);

  const [pages, setPages] = useState([
    {
      path: `profile`,
      name: "Profile",
      index: 0,
      active: true,
      icon: <AiOutlineUser size={34} />,
    },
    {
      path: `password`,
      name: "Password",
      index: 1,
      active: false,
      icon: <MdLockOutline size={34} />,
    },
    {
      path: `address_details`,
      name: "Address Details",
      index: 2,
      active: false,
      icon: <HiOutlineHome size={34} />,
    },
    {
      path: `orders`,
      name: "Orders",
      index: 3,
      active: false,
      icon: <FaDropbox size={34} />,
    },
    // {
    //   path: "account/carddetails",
    //   name: "Card Details",
    //   index: 3,
    //   active: false,
    // },
  ]);

  const goTo = (path, index) => {
    navigate(path);
    // copy state
    let copyPages = pages;
    copyPages = copyPages.map((page) => {
      const tempActive = page.index == index ? true : false;
      return { ...page, active: tempActive };
    });
    setPages(copyPages);
  };
  // const getUserHandler = async () => {
  //   const response = await dispatch(getUser());
  //   return response;
  // };
  const getUserProfileImageHandler = async () => {
    const response = await dispatch(getImageByTag(id));
    return response;
  };
  const getAddressHandler = async () => {
    const response = await dispatch(getAddress());

    return response;
  };
  useEffect(() => {
    // getUserHandler();
    getUserProfileImageHandler();
    getAddressHandler();
  }, []);

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.container_content}>
          <NavBar />
          <div className={styles.container_content_cont}>
            <div className={styles.container_content_cont_nav}>
              <div className={styles.container_content_cont_nav_user}>
                <div className={styles.container_content_cont_nav_user_img}>
                  <img src={imagePath} alt="user profile" />
                </div>
                <div className={styles.container_content_cont_nav_user_text}>
                  <span>{user.email}</span>
                  <h2>
                    {user.first_name} {user.last_name}
                  </h2>
                </div>
              </div>
              <div className={styles.container_content_cont_nav_items}>
                {/* create a card for each */}
                {pages.map((page) => (
                  <AccountNavCard
                    path={page.path}
                    name={page.name}
                    active={page.active}
                    onClick={() => goTo(page.path, page.index)}
                  />
                ))}
              </div>
              <div className={styles.container_content_cont_nav_mobile_items}>
                {pages.map((page) => (
                  <Link
                    to={page.path}
                    className={
                      styles.container_content_cont_nav_mobile_items_item
                    }
                  >
                    {page.icon}
                  </Link>
                ))}
              </div>
            </div>
            <div className={styles.container_content_cont_details}>
              <Outlet />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Account;
