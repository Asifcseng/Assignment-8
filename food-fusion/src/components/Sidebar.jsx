import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { getCategories, getMealsRandom } from "../services/api";
import { toast } from "react-toastify";

function Sidebar({ isOpen, onClose }) {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    getCategories().then(setCategories);
  }, []);

  const handleRandomMealClick = async () => {
    setLoading(true);
    toast.info("Fetching a delicious surprise... 🍽️");
    try {
      const data = await getMealsRandom();
      if (data && data[0]) {
        toast.success("Chef's pick is ready!");
        navigate(`/product/${data[0].idMeal}`);
      } else {
        toast.error("Could not find a random meal.");
      }
    } catch (error) {
      toast.error("Something went wrong. Try again!");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <aside
      className={`bg-orange-100 text-orange-900 w-64 sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto scroll-smooth shadow-inner hidden sm:block
      ${isOpen ? "translate-x-0" : "-translate-x-full"} sm:translate-x-0`}
    >
      <div className="flex justify-between items-center px-4 py-3 border-b border-orange-300">
        <span className="text-xl font-bold">Categories</span>
        <button
          onClick={onClose}
          className="text-red-600 text-2xl font-bold sm:hidden"
        >
          &times;
        </button>
      </div>

      <nav className="flex flex-col gap-2 p-4">
        <Link
          to="/"
          className={`px-3 py-2 rounded hover:bg-orange-200 ${
            location.pathname === "/" ? "bg-orange-300 font-bold" : ""
          }`}
        >
          All Meals
        </Link>

        {categories.map((cat) => (
          <Link
            key={cat.idCategory}
            to={`/category/${cat.strCategory}`}
            className={`px-3 py-2 rounded hover:bg-orange-200 ${
              location.pathname === `/category/${cat.strCategory}`
                ? "bg-orange-300 font-bold"
                : ""
            }`}
          >
            {cat.strCategory}
          </Link>
        ))}

        {/* 🎲 Random Meal Button */}
        <button
          onClick={handleRandomMealClick}
          disabled={loading}
          className={`mt-6 px-4 py-2 rounded text-white text-left transition ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-orange-400 hover:bg-orange-500"
          }`}
        >
          {loading ? "Loading..." : "🎲 Get Random Meal"}
        </button>
      </nav>
    </aside>
  );
}

export default Sidebar;
