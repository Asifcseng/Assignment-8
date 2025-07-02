import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMeals, getMealsByCategory, getMealsRandom } from "../services/api";
import ProductCard from "../components/ProductCard";

function Home() {
  const { name } = useParams();
  const [meals, setMeals] = useState([]);
  const [randomMeal, setRandomMeal] = useState(null);
  const [showRandom, setShowRandom] = useState(
    localStorage.getItem("hideRandom") !== "true"
  ); // 👈 Load initial state from localStorage

  // Fetch meals by category or all
  useEffect(() => {
    if (name) {
      getMealsByCategory(name).then((data) => setMeals(data || []));
    } else {
      getMeals().then((data) => setMeals(data || []));
    }
  }, [name]);

  // Fetch random meal if not hidden
  useEffect(() => {
    if (showRandom) {
      getMealsRandom().then((data) => {
        if (data && data.length > 0) setRandomMeal(data[0]);
      });
    }
  }, [showRandom]);

  // Handle hide action
  const handleHideRandom = () => {
    setShowRandom(false);
    localStorage.setItem("hideRandom", "true"); // 👈 Persist hide state
  };

  return (
    <div className="space-y-8">
      {/* 🔥 Random Meal Section */}
      {showRandom && randomMeal && (
        <div className="p-4 bg-yellow-100 rounded-xl shadow-md relative max-w-4xl">
          <button
            onClick={handleHideRandom}
            className="absolute top-2 right-3 text-xl font-bold text-red-600 hover:text-red-800"
          >
            &times;
          </button>
          <h2 className="text-2xl font-bold mb-4 text-orange-600">
            Chef's Pick (Random)
          </h2>
          <div className="max-w-md">
            <ProductCard meal={randomMeal} isFeatured />
          </div>
        </div>
      )}

      {/* 🧩 All or Filtered Meals */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {meals.map((meal) => (
          <ProductCard key={meal.idMeal} meal={meal} />
        ))}
      </div>
    </div>
  );
}

export default Home;
