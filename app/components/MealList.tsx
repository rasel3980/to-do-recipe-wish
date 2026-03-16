"use client";
import { useEffect } from "react";
import MealCard from "./MealCard";
import { useAppDispatch, useAppSelector } from "../redux/store/hooks";
import { fetchRecipe } from "../redux/features/recipes/recipeSlice";

const MealList = () => {
  const dispatch = useAppDispatch();
  const { meals, loading, error } = useAppSelector(
    (state) => state.recipes
  );

  useEffect(() => {
    dispatch(fetchRecipe());
  }, [dispatch]);

  if (loading) {
    return (
      <div className="text-center py-10 text-xl">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-10 text-red-500">
        {error}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {meals.map((meal) => (
        <MealCard key={meal.idMeal} meal={meal} />
      ))}
    </div>
  );
};

export default MealList;