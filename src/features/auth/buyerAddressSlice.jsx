import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'


const initialState = {
    name: "",
    phone: 0,
    address: "",
}

const buyerAddressSlice = createSlice({
    name: "buyerAddress",
    initialState,
    reducers: {
      buyer: (state, action) => {
        state.singleItem = action.payload;
      }
    },
    
})

export const { buyer } = buyerAddressSlice.actions;
export const getSingle = (state) => state.singleProduct.singleItem;

export default buyerAddressSlice.reducer