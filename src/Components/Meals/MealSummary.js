import React from "react";
import classes from "./MealsSummary.module.css";
import { PiBowlFoodFill } from "react-icons/pi";
import foodDelivery from "../../Assests/fooddelievery.png";
import foodapp from "../../Assests/foodDeliverypic.png";

const MealsSummary = () => {
  return (
    <div className={classes.container}>
      {/* Left Section */}
      <section className={classes.leftContent}>
        <img alt="Food App" src={foodapp} />
      </section>

      {/* Center Summary Section */}
      <section className={classes.summary}>
        <h2>
          <span>Discover a World of Flavors</span> with Us{" "}
          <PiBowlFoodFill style={{ color: "#944E63" }} />
        </h2>
        <p>
          Welcome to <strong>Hichkee</strong> — your gateway to gourmet food,
          delivered with a dash of love! Explore our vibrant menu of authentic
          flavors, made with fresh ingredients and bold spices. Whether you're
          in the mood for something spicy, sweet, or savory, we’ve got something
          to satisfy every craving.
        </p>
        <div className={classes.videoContainer}>
          <video width="100%" height="auto" autoPlay muted loop>
            <source
              src="https://videos.pexels.com/video-files/3768941/3768941-hd_1920_1080_25fps.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </section>

      {/* Right Section */}
      <section className={classes.rightContent}>
        <img alt="Food Delivery" src={foodDelivery} />
      </section>
    </div>
  );
};

export default MealsSummary;
