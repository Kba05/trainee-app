import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { AUTH_TOKEN_KEY } from "../../../constants/constants";

const initialState = {
    categories: [],
}

export const fetchCategories = createAsyncThunk('categories/fetchCategories',async ()=>{
    const token = JSON.parse(localStorage.getItem(AUTH_TOKEN_KEY))
    const response = await fetch("/browse/Categories", {
        method: "GET",
        headers: {
          Authorization: `Basic ${token}`
        }
    })
    const result = await response.json()
    return result.value
})

export const categoriesSlice = createSlice({
    name:"categories",
    initialState,
    reducers:{},
    extraReducers(builder){
        builder.addCase(fetchCategories.fulfilled, (state, action) => {
            state.categories.push(...action.payload)
        })
    }
})

export default categoriesSlice.reducer
export const CategoriesSelector = (state=> state.categories.categories)