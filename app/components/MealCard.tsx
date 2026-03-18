"use client";
import { MealAPI } from "@/app/types/recipe";
import Image from "next/image";
import { useAppDispatch } from "../redux/store/hooks";
import { addToWishlist } from "../redux/features/recipes/recipeSlice";

interface MealCardProps {
  meal: MealAPI;
}

const MealCard = ({ meal }: MealCardProps) => {
  const dispatch = useAppDispatch();

  const handleAddToWishlist = () => {
    dispatch(
      addToWishlist({
        id: meal.idMeal,
        name: meal.strMeal,
        category: meal.strCategory,
        thumbnail: meal.strMealThumb,
        cooked: false,
        addedAt: new Date().toISOString(),
      })
    );
  };

  return (
    <div className="border rounded-lg overflow-hidden shadow-md">
      <Image
        src={meal.strMealThumb}
        alt={meal.strMeal}
        width={300}
        height={200}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-bold">{meal.strMeal}</h2>
        <p className="text-sm text-gray-500">{meal.strCategory}</p>
        <p className="text-sm text-gray-500">{meal.strArea}</p>
        <button
          onClick={handleAddToWishlist}
          className="mt-3 w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600"
        >
          ❤️ Add to Wishlist
        </button>
      </div>
    </div>
  );
};

export default MealCard;