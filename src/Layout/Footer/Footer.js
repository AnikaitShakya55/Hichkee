import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerSection}>
          <h3>About Hichkee</h3>
          <ul>
            <li>About Us</li>
            <li>Our Chef</li>
            <li>Our Story</li>
            <li>Careers</li>
          </ul>
        </div>

        <div className={styles.footerSection}>
          <h3>Menu</h3>
          <ul>
            <li>Starters</li>
            <li>Main Courses</li>
            <li>Desserts</li>
            <li>Drinks</li>
          </ul>
        </div>

        <div className={styles.footerSection}>
          <h3>Contact</h3>
          <ul>
            <li>Email: info@hichkeerestaurant.com</li>
            <li>Phone: +1 (555) 123-4567</li>
            <li>123 Restaurant St, Cityville</li>
          </ul>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>
          &copy; {new Date().getFullYear()} Hichkee Restaurant. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
