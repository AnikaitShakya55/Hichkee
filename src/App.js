import React, { Fragment, useEffect, useState } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Header from "./Layout/Header/Header";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Cart from "./Components/Cart/Cart";
import HomePage from "./Pages/HomePage";
import MenuPage from "./Pages/MenuPage";
import Footer from "./Layout/Footer/Footer";
import ContactPage from "./Pages/ContactPage";
import LoginPage from "./Pages/LoginPage";

// const BACKEND_PORT = `http://localhost:5000`;

const App = () => {
  const token = localStorage.getItem("token");
  const location = useLocation();
  const [cartShow, setCartShow] = useState(false);

  const cartShowHandler = () => setCartShow(true);
  const cartCloseHandler = () => setCartShow(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <Fragment>
      <Header cartShowHandler={cartShowHandler} isLogin={token} />
      <main>
        {cartShow && <Cart cartCloseHandler={cartCloseHandler} />}

        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<HomePage isLogin={token} />} />
          <Route path="/menu" element={<MenuPage isLogin={token} />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </main>
      <Footer />
    </Fragment>
  );
};

export default App;
