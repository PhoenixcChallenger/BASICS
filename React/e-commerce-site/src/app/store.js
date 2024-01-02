// store.js
import { configureStore } from '@reduxjs/toolkit';
import paginationReducer from '../features/paginationSlice';
import addtocartReducer from '../features/addtocartSlice'
import filterProductsReducer from '../features/filterProductsSlice'

export const store = configureStore({
    reducer: {
        pagination: paginationReducer,//name of slice is pagination
        addtocart: addtocartReducer,//name of slice is addtocart
        filterProducts: filterProductsReducer,//name of slice is filterProducts
    },
});
