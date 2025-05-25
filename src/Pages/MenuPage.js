import React from "react";
import AvailableMeal from "../Components/Menu/AvailableMeals";
import OrderModal from "../Components/Menu/OrderModal";

const MenuPage = () => {
  return (
    <div>
      <OrderModal />
      <AvailableMeal />
    </div>
  );
};

export default MenuPage;
