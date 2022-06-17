import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios";


const initialState = {
  singleItem: [],
  status: null
}

const singleProductSlice = createSlice({
    name: "singleProduct",
    initialState,
    reducers: {
      single: (state, action) => {
        state.singleItem = action.payload;
      }
    },
    
})

export const { single } = singleProductSlice.actions;
export const getSingle = (state) => state.singleProduct.singleItem;

export default singleProductSlice.reducer



//https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=Ar9XW0pEbKOnZuxGkAZSbuANfU9jCzKH

// export const singleProductFetch = createAsyncThunk(
  
//   "singleProduct/singleProductFetch",

//    async() => {
    
//     const response = await axios.get(``)
//     return response?.data
    
//    }
   
// );

// extraReducers: {
      
//   [singleProductFetch.pending]: (state, action) => {
//     state.status = "pending"
//   },
//   [singleProductFetch.fulfilled]: (state, action) => {
//     state.status = "success"
//     state.singleItem = action.payload
//   },
//   [singleProductFetch.rejected]: (state, action) => {
//     state.status = "rejected"
//   }
// }