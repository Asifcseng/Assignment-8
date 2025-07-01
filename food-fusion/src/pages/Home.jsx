import React, { useEffect, useState } from "react";
import { getMeals } from "../services/api";
import ProductCard from "../components/ProductCard";

function Home() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    getMeals().then(setMeals);
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
      {meals.map((meal) => (
        <ProductCard key={meal.idMeal} meal={meal} />
      ))}
    </div>
  );
}
export default Home;
