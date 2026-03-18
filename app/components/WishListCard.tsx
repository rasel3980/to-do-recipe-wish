"use client";
import { WishlistRecipe } from "@/app/types/recipe";
import Image from "next/image";
import { useAppDispatch } from "../redux/store/hooks";
import { removeFromWishlist, toggleCooked } from "../redux/features/recipes/recipeSlice";

interface WishlistCardProps {
  recipe: WishlistRecipe;
}

const WishlistCard = ({ recipe }: WishlistCardProps) => {
  const dispatch = useAppDispatch();

  return (
    <div className={`border rounded-lg overflow-hidden shadow-md ${
      recipe.cooked ? "opacity-60" : ""
    }`}>
      <Image
        src={recipe.thumbnail}
        alt={recipe.name}
        width={300}
        height={200}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-bold">{recipe.name}</h2>
        <p className="text-sm text-gray-500">{recipe.category}</p>
        <button
          onClick={() => dispatch(toggleCooked(recipe.id))}
          className={`mt-3 w-full py-2 rounded-lg ${
            recipe.cooked
              ? "bg-green-500 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          {recipe.cooked ? "✅ Cooked" : "Mark as Cooked"}
        </button>
        <button
          onClick={() => dispatch(removeFromWishlist(recipe.id))}
          className="mt-2 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600"
        >
          🗑️ Remove
        </button>
      </div>
    </div>
  );
};

export default WishlistCard;