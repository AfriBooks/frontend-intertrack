import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios";

const initialState = {
  items: [],
  status: null
}

//https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=Ar9XW0pEbKOnZuxGkAZSbuANfU9jCzKH
//https://fakestoreapi.com/products
//https://afribook.herokuapp.com/books

export const productsFetch = createAsyncThunk(
  
    "products/productsFetch",
  
     async() => {
      const response = await axios.get("https://fakestoreapi.com/products")
      console.log(response.data);
      return response?.data
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

// export const productsFetch = createAsyncThunk(
  
//   "products/productsFetch",

//    async() => {
//     const response = await axios.get("https://afribook.herokuapp.com/books")
//     console.log(response.data);
//     return response?.data
//    }
// );

// extraReducers: {
      
//   [productsFetch.pending]: (state, action) => {
//     state.status = "pending"
//   },
//   [productsFetch.fulfilled]: (state, action) => {
//     state.status = "success"
//     state.items = action.payload
//   },
//   [productsFetch.rejected]: (state, action) => {
//     state.status = "rejected"
//   }
// }