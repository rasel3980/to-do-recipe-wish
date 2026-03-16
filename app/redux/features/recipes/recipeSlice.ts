import { MealAPI, RecipeState } from '@/app/types/recipe'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const fetchRecipe = createAsyncThunk(
    "recipes/fetchRecipes",
    async () => {
        const res = await fetch(
            'https://www.themealdb.com/api/json/v1/1/search.php?s='
        );
        const data = await res.json();
        return data.meals as MealAPI[]
    }
)

const initialState: RecipeState = {
    meals: [],
    wishlist: [],
    loading: false,
    error: null
}

export const recipeSlice = createSlice({
    name: 'recipes',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchRecipe.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(fetchRecipe.fulfilled, (state, action) => {
                state.loading = false
                state.meals = action.payload
            })
            .addCase(fetchRecipe.rejected, (state) => {
                state.loading = false
                state.error = "Sorry cannot load recipe"
            })
    },
})

export default recipeSlice.reducer