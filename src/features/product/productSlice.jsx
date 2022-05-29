import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios";

const initialState = {
  items: [],
  status: null
}

export const productsFetch = createAsyncThunk(
  
  "products/productsFetch",

   async() => {
    const response = await axios.get("https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=Ar9XW0pEbKOnZuxGkAZSbuANfU9jCzKH")
    return response?.data.results.books
   }
);

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: {
      
      [productsFetch.pending]: (state, action) => {
        state.status = "pending"
      },
      [productsFetch.fulfilled]: (state, action) => {
        state.status = "success"
        state.items = action.payload
      },
      [productsFetch.rejected]: (state, action) => {
        state.status = "rejected"
      }
    }
})

export default productSlice.reducer