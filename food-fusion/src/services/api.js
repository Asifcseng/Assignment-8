import axios from "axios";

export const getMeals = async () => {
  const res = await axios.get(
    "https://www.themealdb.com/api/json/v1/1/search.php?f=c"
  );
  return res.data.meals;
};

export const getMealById = async (id) => {
  const res = await axios.get(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  );
  return res.data.meals[0];
};
