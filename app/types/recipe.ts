export interface MealAPI {
    idMeal: string,
    strMeal: string,
    strCategory: string,
    strArea: string,
    strInstructions:string,
    strMealThumb:string,
    strYoutube:string,

}

export interface WishlistRecipe{
    id:string,
    name:string,
    category:string,
    thumbnail:string,
    cooked:boolean,
    addedAt:string
}