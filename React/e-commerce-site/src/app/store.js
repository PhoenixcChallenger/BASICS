// store.js
import { configureStore } from '@reduxjs/toolkit';
import paginationReducer from '../features/paginationSlice';
import addtocartReducer from '../features/addtocartSlice'
export const store = configureStore({
    reducer: {
        pagination: paginationReducer,
        addtocart: addtocartReducer,
    },
});
