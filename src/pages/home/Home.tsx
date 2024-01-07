import React from "react";
import styles from "./home.module.scss";
import NavBar from "../../components/navigation/NavBar";
import HeroImg from "../../assets/hero1.png";
import iphone14_promax_deep_purple from "../../assets/phones/iphone14_promax_deep_purple1 1.png";
import iphone14_promax_gold from "../../assets/phones/iphone14_promax_gold1 1.png";
import iphone14_promax_spaceblack from "../../assets/phones/iphone14_promax_spaceblack1 1.png";
import iphone14_plus_red1 from "../../assets/phones/iphone14_plus_red1 1.png";
import iphone14_plus_purple1 from "../../assets/phones/iphone14_plus_purple1 1.png";
import CustomButton from "../../components/buttons/customButton/CustomButton";
import HomeBar from "../../components/homeBar/HomeBar";
import PhoneCard from "../../components/cards/phoneCard/PhoneCard";
import Footer from "../../components/footer/Footer";
interface Props {}

const Home: React.FC<Props> = (props) => {
  const items = [
    {
      name: "iPhone 14 Pro Max",
      price: "R1099",
      space: "1TB",
      id: 1,
      image: iphone14_promax_deep_purple,
    },
    {
      name: "iPhone 14 Pro Max",
      price: "R1099",
      space: "1TB",
      id: 1,
      image: iphone14_plus_red1,
    },
    {
      name: "iPhone 14 Pro Max",
      price: "R1099",
      space: "1TB",
      id: 1,
      image: iphone14_promax_gold,
    },
    {
      name: "iPhone 14 Pro Max",
      price: "R1099",
      space: "1TB",
      id: 1,
      image: iphone14_plus_purple1,
    },
    {
      name: "iPhone 14 Pro Max",
      price: "R1099",
      space: "1TB",
      id: 1,
      image: iphone14_plus_red1,
    },
    {
      name: "iPhone 14 Pro Max",
      price: "R1099",
      space: "1TB",
      id: 1,
      image: iphone14_promax_spaceblack,
    },
    {
      name: "iPhone 14 Pro Max",
      price: "R1099",
      space: "1TB",
      id: 1,
      image: iphone14_plus_red1,
    },
    {
      name: "iPhone 14 Pro Max",
      price: "R1099",
      space: "1TB",
      id: 1,
      image: iphone14_promax_deep_purple,
    },
    {
      name: "iPhone 14 Pro Max",
      price: "R1099",
      space: "1TB",
      id: 1,
      image: iphone14_promax_gold,
    },
    {
      name: "iPhone 14 Pro Max",
      price: "R1099",
      space: "1TB",
      id: 1,
      image: iphone14_promax_spaceblack,
    },
  ];
  return (
    <div>
      <div className={styles.home_main}>
        <NavBar />
        <section className={styles.hero}>
          <div className={styles.hero_container}>
            <div className={styles.hero_container_img}>
              <img src={HeroImg} alt="" />
            </div>
            <div className={styles.hero_container_desc}>
              <span>Get your hands on the latest</span>
              <hr />
              <span className={styles.phone_name}>IPhone 14</span>
              <hr />
              <span className={styles.sub_title}>
                With our affordable pricing, you can get:{" "}
              </span>
              <ul>
                <li>6.1” (1170x2532 pixels) clear display</li>
                <li>6 GB Ram, 128 GB, 256 GB</li>
                <li> Up to 20 hours of battery life</li>
              </ul>
              <span className={styles.sub_title}>
                in your hands in a click of a button.
              </span>
              <div className={styles.hero_container_desc_btn}>
                <CustomButton text="Buy Now" height="64px" />
              </div>
            </div>
          </div>
        </section>
        <div className={styles.height108}></div>
        <HomeBar />
        <div className={styles.height108}></div>
        <section>
          <div className={styles.items_container}>
            <div className={styles.items_container_content}>
              <span className={styles.items_container_content_title}>
                Latest Arrivals
              </span>
              <div className={styles.items_container_content_list}>
                {items.map((item) => (
                  <PhoneCard
                    price={item.price}
                    name={item.name}
                    image={item.image}
                    space={item.space}
                    id={item.id}
                  />
                ))}
              </div>
              <div className={styles.items_container_content_button}>
                <CustomButton
                  text="View More"
                  height="64px"
                  color="secondary"
                />
              </div>
            </div>
          </div>
        </section>
        <div style={{ height: "60px" }}></div>
        <section>
          <div className={styles.items_container}>
            <div className={styles.items_container_content}>
              <span className={styles.items_container_content_title}>
                Most Popular
              </span>
              <div className={styles.items_container_content_list}>
                {items.map((item) => (
                  <PhoneCard
                    price={item.price}
                    name={item.name}
                    image={item.image}
                    space={item.space}
                    id={item.id}
                  />
                ))}
              </div>
              <div className={styles.items_container_content_button}>
                <CustomButton
                  text="View More"
                  height="64px"
                  color="secondary"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
      <div style={{ height: "96px" }}></div>
      <Footer />
    </div>
  );
};

export default Home;
