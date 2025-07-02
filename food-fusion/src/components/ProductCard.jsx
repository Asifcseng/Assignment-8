import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../features/cart/cartSlice";

function ProductCard({ meal, isFeatured }) {
  const dispatch = useDispatch();

  return (
    <div
      className={`bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden ${
        isFeatured ? "border-4 border-orange-400" : ""
      }`}
    >
      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        className="w-full h-56 object-cover"
      />
      <div className="p-4 flex flex-col flex-grow">
        <h3
          className="text-xl font-semibold text-gray-800 mb-2 truncate"
          title={meal.strMeal}
        >
          {meal.strMeal}
        </h3>
        <div className="flex justify-between items-center mt-auto">
          <button
            onClick={() =>
              dispatch(
                addToCart({
                  id: meal.idMeal,
                  name: meal.strMeal,
                  image: meal.strMealThumb,
                  price: 10 + Math.floor(Math.random() * 15),
                })
              )
            }
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md text-sm transition"
          >
            Add to Cart
          </button>
          <Link
            to={`/product/${meal.idMeal}`}
            className="text-blue-500 text-sm hover:underline"
          >
            View
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
