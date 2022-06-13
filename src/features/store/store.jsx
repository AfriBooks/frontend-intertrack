import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../cart/cartSlice';
import productReducer, { productsFetch } from '../product/productSlice'; 
import singleProductReducer, { singleProductFetch } from '../product/singleProductSlice';
import { productApi } from '../productApi/productApi';



const store = configureStore({
    reducer: {
      
      products: productReducer,
      singleProduct: singleProductReducer,
      cart: cartReducer,

      [productApi.reducerPath]: productApi.reducer,
      
    },

    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(productApi.middleware);
    },
   
  });

  store.dispatch(productsFetch());
  store.dispatch(singleProductFetch());


  export default store;