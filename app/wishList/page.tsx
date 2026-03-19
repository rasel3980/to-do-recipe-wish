"use client";
import Link from "next/link";
import WishListCard from "../components/WishListCard";
import { useAppSelector } from "../redux/store/hooks";

export default function WishlistPage() {
  const wishlist = useAppSelector((state) => state.recipes.wishlist);

  if (wishlist.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-2xl">😢 Wishlist Empty</p>
        <p className="text-gray-500 mt-2">
         Recipe add from Homne
        </p>
        <Link href={'/'}><button className="btn mt-4 bg-blue-500 text-white">Back to Home</button></Link>
      </div>
    );
  }

  return (
    <main>
      <h1 className="text-3xl font-bold text-center py-6">
        ❤️ My Wishlist ({wishlist.length})
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {wishlist.map((recipe) => (
          <WishListCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </main>
  );
}