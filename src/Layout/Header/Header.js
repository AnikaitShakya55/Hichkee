import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { SiIfood } from "react-icons/si";
import CartIcon from "../../Components/Cart/CartoonIcon";
import CartContext from "../../Store/CartContext";
import classes from "./Header.module.css";

const Header = ({ cartShowHandler }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);
  const ctx = useContext(CartContext);

  return (
    <>
      {isOpen && (
        <div className={classes.backdrop} onClick={() => setIsOpen(false)} />
      )}

      <header className={classes.header}>
        <div className={classes.left}>
          <SiIfood size={28} />
          <span className={classes.logo}>Hichkee</span>
        </div>

        <div className={classes.hamburger} onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={`${classes.navItems} ${isOpen ? classes.open : ""}`}>
          <li>
            <NavLink to="/home" onClick={() => setIsOpen(false)}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu" onClick={() => setIsOpen(false)}>
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={() => setIsOpen(false)}>
              Contact
            </NavLink>
          </li>
          <li className={classes.mobileCart}>
            <button onClick={cartShowHandler} className={classes.cartButton}>
              <span className={classes.icon}>
                <CartIcon />
              </span>
              <span className={classes.text}>Your Cart</span>
              <span className={classes.badge}>{ctx.totalQuantity}</span>
            </button>
          </li>
        </ul>

        <div className={classes.desktopCart}>
          <button className={classes.cartButton} onClick={cartShowHandler}>
            <span className={classes.icon}>
              <CartIcon />
            </span>
            <span className={classes.text}>Your Cart</span>
            <span className={classes.badge}>{ctx.totalQuantity}</span>
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
