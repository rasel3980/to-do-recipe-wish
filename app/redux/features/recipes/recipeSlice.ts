import { MealAPI, RecipeState } from '@/app/types/recipe'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export const fetchRecipe = createAsyncThunk(
    "recipes/fetchRecipes",
    async()=>{
        const res = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
        const data = await res.json();
        return data.meals as MealAPI[]
    }
)

const initialState: RecipeState = {
  wishlist:[],
  loading:false,
  error:null
}

extraReducers:(builder)=>{
    builder
    .addCase(fetchRecipe.pending,(state)=>{
        state.loading = true:
        state.error = null;
    })
    .addCase(fetchRecipe.fulfilled,(state,action)=>{
        state.loading = false;
        state.meals = action.payload
    })
    .addCase(fetchRecipe.rejected,(state)=>{
        state.loading = false;
        state.error = "Sorry cannot load recipe"
    })
}
export const recipeSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {
})

// Action creators are generated for each case reducer function
export const {  } = recipeSlice.actions

export default recipeSlice.reducer