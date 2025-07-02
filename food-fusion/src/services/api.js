import axios from "axios";
const BASE_URL = "https://www.themealdb.com/api/json/v1/1";

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

export const getCategories = async () => {
  const res = await axios.get(`${BASE_URL}/categories.php`);
  return res.data.categories;
};

export const getMealsByCategory = async (category) => {
  const res = await axios.get(`${BASE_URL}/filter.php?c=${category}`);
  return res.data.meals;
};

export const getMealsRandom = async () => {
  const res = await axios.get(
    "https://www.themealdb.com/api/json/v1/1/random.php"
  );
  return res.data.meals;
};
