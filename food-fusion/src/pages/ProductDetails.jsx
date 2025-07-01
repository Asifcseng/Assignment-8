import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMealById } from "../services/api";

function ProductDetails() {
  const { id } = useParams();
  const [meal, setMeal] = useState(null);

  useEffect(() => {
    getMealById(id).then(setMeal);
  }, [id]);

  if (!meal) return <p>Loading...</p>;

  return (
    <div className="p-4">
      <img src={meal.strMealThumb} className="w-full max-w-md" />
      <h2 className="text-2xl font-bold my-2">{meal.strMeal}</h2>
      <p>{meal.strInstructions.slice(0, 300)}...</p>
    </div>
  );
}
export default ProductDetails;
