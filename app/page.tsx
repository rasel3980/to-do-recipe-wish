import MealList from "./components/MealList";


export default function Home() {
  return (
    <>
    <h1 className="text-3xl font-bold flex justify-center items-center my-5">Choose for your wishlist</h1>
      <MealList></MealList>
      </>
  );
}
