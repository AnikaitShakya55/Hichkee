import React from "react";
import AvailableMeal from "../Components/Menu/AvailableMeals";
import OrderModal from "../Components/Menu/OrderModal";

const MenuPage = ({isLogin}) => {
  return (
    <div>
      <OrderModal />
      <AvailableMeal isLogin={isLogin} />
    </div>
  );
};

export default MenuPage;
