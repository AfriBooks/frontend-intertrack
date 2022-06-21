import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../auth/authSlice';
import buyerAddressReducer from '../auth/buyerAddressSlice';
import signInReducer from '../auth/signInSlice';
import cartReducer, { getTotals } from '../cart/cartSlice';
import productReducer, { productsFetch } from '../product/productSlice'; 
import singleProductReducer, { singleProductFetch } from '../product/singleProductSlice';
import { productApi } from '../productApi/productApi';



const store = configureStore({
    reducer: {
      
      products: productReducer,
      singleProduct: singleProductReducer,
      cart: cartReducer,
      auth: authReducer,
      signInSlice: signInReducer,
      buyerAddress: buyerAddressReducer,

      [productApi.reducerPath]: productApi.reducer,
      
    },

    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(productApi.middleware);
    },
   
  });

  store.dispatch(productsFetch());
  //store.dispatch(singleProductFetch());
  store.dispatch(getTotals());


  export default store;