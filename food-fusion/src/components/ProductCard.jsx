import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import { Link } from "react-router-dom";

function ProductCard({ meal }) {
  const dispatch = useDispatch();

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden h-full flex flex-col">
      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        className="w-full h-56 object-cover"
      />

      <div className="p-4 flex flex-col flex-grow justify-between">
        <h3 className="truncate text-lg font-semibold">{meal.strMeal}</h3>

        <div className="flex justify-between items-center mt-auto">
          <button
            onClick={() =>
              dispatch(
                addToCart({
                  id: meal.idMeal,
                  name: meal.strMeal,
                  image: meal.strMealThumb,
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
