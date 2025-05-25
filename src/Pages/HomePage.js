import React from "react";
import MealsSummary from "../Components/Meals/MealSummary";
import AdditionalSection from "../Components/Meals/AdditionalSection";
import TeamSection from "../Components/Meals/TeamSection";

const HomePage = () => {
  return (
    <div>
      <MealsSummary />
      <AdditionalSection />
      <TeamSection />
    </div>
  );
};

export default HomePage;
