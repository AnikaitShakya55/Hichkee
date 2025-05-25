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

const App = () => {
  const location = useLocation();
  const [cartShow, setCartShow] = useState(false);

  const cartShowHandler = () => setCartShow(true);
  const cartCloseHandler = () => setCartShow(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <Fragment>
      <Header cartShowHandler={cartShowHandler} />
      <main>
        {cartShow && <Cart cartCloseHandler={cartCloseHandler} />}

        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </Fragment>
  );
};

export default App;
