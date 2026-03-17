"use client";
import { MealAPI } from "@/app/types/recipe";
import Image from "next/image";

interface MealCardProps {
  meal: MealAPI;
}

const MealCard = ({ meal }: MealCardProps) => {
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
        <button className="mt-3 w-full bg-orange-500 text-white py-2 rounded-lg">
          Add to Wishlist
        </button>
      </div>
    </div>
  );
};

export default MealCard;
