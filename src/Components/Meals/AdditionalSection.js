import React from "react";
import classes from "./AdditionalSection.module.css";
import rajpic from "../../Assests/TeamPic/RAJ.jpeg";
import akshxarPic from "../../Assests/TeamPic/akshxar.jpeg";
import bhhumaPic from "../../Assests/TeamPic/Bhhuma.jpeg";

const AdditionalSection = () => {
  const teamImgStyle = {
    width: "328px",
    height: "355px",
  };

  return (
    <section className={classes.additionalSection}>
      <h2>Experience Our Specialties</h2>

      <div className={classes.specialtiesGrid}>
        <div className={classes.specialtyItem}>
          <img
            src="https://d4t7t8y8xqo0t.cloudfront.net/resized/750X436/eazytrendz%2F2832%2Ftrend20200515161910.jpg"
            alt="Delicious Pasta"
          />
          <div>
            <h3>Delicious Pasta</h3>
            <p>Rich, creamy, and freshly made pasta with gourmet sauces.</p>
          </div>
        </div>

        <div className={classes.specialtyItem}>
          <img
            src="https://www.allrecipes.com/thmb/HDfp2feubnMuH_q_8mofh3xP_TA=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/233446-lo-mein-noodles-dmfs-4x3-1356-1493-64be4dff0a84483b8e7716d6020fb1d5.jpg"
            alt="Sizzling Steaks"
          />
          <div>
            <h3>Sizzling Steaks</h3>
            <p>Juicy, seasoned steaks grilled to mouthwatering perfection.</p>
          </div>
        </div>

        <div className={classes.specialtyItem}>
          <img
            src="https://www.corriecooks.com/wp-content/uploads/2023/05/Garden-Salad.jpg"
            alt="Fresh Garden Salad"
          />
          <div>
            <h3>Fresh Garden Salad</h3>
            <p>
              Vibrant veggies tossed in delicious dressing, crisp and light.
            </p>
          </div>
        </div>

        <div className={classes.specialtyItem}>
          <img
            src="https://img.bestrecipes.com.au/i9G5gwYE/w643-h428-cfill-q90/br/2019/04/frozen-golden-gaytime-cheesecake-951597-1.jpg"
            alt="Decadent Desserts"
          />
          <div>
            <h3>Decadent Desserts</h3>
            <p>Sweet treats crafted with love, perfect to end your meal.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdditionalSection;
