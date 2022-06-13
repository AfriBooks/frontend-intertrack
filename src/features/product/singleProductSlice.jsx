import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios";


const initialState = {
  singleItem: [],
  status: null
}

//https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=Ar9XW0pEbKOnZuxGkAZSbuANfU9jCzKH

export const singleProductFetch = createAsyncThunk(
  
  "singleProduct/singleProductFetch",

   async() => {
    
    const response = await axios.get(`https://fakestoreapi.com/products/1`)
    return response?.data
    
   }
   
);

const singleProductSlice = createSlice({
    name: "singleProduct",
    initialState,
    reducers: {},
    extraReducers: {
      
      [singleProductFetch.pending]: (state, action) => {
        state.status = "pending"
      },
      [singleProductFetch.fulfilled]: (state, action) => {
        state.status = "success"
        state.singleItem = action.payload
      },
      [singleProductFetch.rejected]: (state, action) => {
        state.status = "rejected"
      }
    }
})

export default singleProductSlice.reducer