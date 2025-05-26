import React, { useState, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { SiIfood } from "react-icons/si";
import CartIcon from "../../Components/Cart/CartoonIcon";
import CartContext from "../../Store/CartContext";
import classes from "./Header.module.css";
import {
  FaHome,
  FaUtensils,
  FaPhone,
  FaSignInAlt,
  FaSignOutAlt,
} from "react-icons/fa";

const Header = ({ cartShowHandler, isLogin }) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const ctx = useContext(CartContext);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  const loginHandler = () => {
    navigate("/login");
  };

  const confirmLogoutHandler = () => {
    setShowConfirmModal(true);
  };

  const cancelLogoutHandler = () => {
    setShowConfirmModal(false);
  };

  const logoutHandler = () => {
    localStorage.removeItem("token");
    setShowConfirmModal(false);
    navigate("/login");
  };

  return (
    <>
      {isOpen && (
        <div className={classes.backdrop} onClick={() => setIsOpen(false)} />
      )}

      {showConfirmModal && (
        <>
          <div className={classes.backdrop} onClick={cancelLogoutHandler} />
          <div className={classes.modal}>
            <p>Are you sure you want to logout?</p>
            <div className={classes.modalActions}>
              <button onClick={logoutHandler} className={classes.confirmBtn}>
                Yes
              </button>
              <button
                onClick={cancelLogoutHandler}
                className={classes.cancelBtn}
              >
                No
              </button>
            </div>
          </div>
        </>
      )}

      <header className={classes.header}>
        <div className={classes.left}>
          <SiIfood size={28} />
          <span className={classes.logo}>Hichkee</span>
        </div>

        <div className={classes.hamburger} onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        <div className={`${classes.navItems} ${isOpen ? classes.open : ""}`}>
          <li>
            <NavLink to="/home" onClick={() => setIsOpen(false)}>
              <FaHome className={classes.icon} /> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu" onClick={() => setIsOpen(false)}>
              <FaUtensils className={classes.icon} /> Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={() => setIsOpen(false)}>
              <FaPhone className={classes.icon} /> Contact
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
          <li className={classes.mobileCart}>
            {isLogin ? (
              <button
                onClick={confirmLogoutHandler}
                className={classes.cartButton}
              >
                <FaSignOutAlt className={classes.icon} /> Logout
              </button>
            ) : (
              <button onClick={loginHandler} className={classes.cartButton}>
                <FaSignInAlt className={classes.icon} /> Login
              </button>
            )}
          </li>
        </div>

        <div className={classes.desktopCart}>
          <button className={classes.cartButton} onClick={cartShowHandler}>
            <span className={classes.icon}>
              <CartIcon />
            </span>
            <span className={classes.text}>Your Cart</span>
            <span className={classes.badge}>{ctx.totalQuantity}</span>
          </button>
          {isLogin ? (
            <button
              className={classes.cartButton}
              onClick={confirmLogoutHandler}
            >
              <FaSignOutAlt className={classes.icon} /> Logout
            </button>
          ) : (
            <button className={classes.cartButton} onClick={loginHandler}>
              <FaSignInAlt className={classes.icon} /> Login
            </button>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
