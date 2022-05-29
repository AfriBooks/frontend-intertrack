import { configureStore } from '@reduxjs/toolkit';
import productReducer, { productsFetch } from '../product/productSlice'; 
import { productApi } from '../productApi/productApi';


const store = configureStore({
    reducer: {
      products: productReducer,

      [productApi.reducerPath]: productApi.reducer,
    },

    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(productApi.middleware);
    },
  });

  store.dispatch(productsFetch());


  export default store;