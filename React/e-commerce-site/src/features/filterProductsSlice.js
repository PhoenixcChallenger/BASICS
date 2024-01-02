import { createSlice } from "@reduxjs/toolkit";

const filterProductsSlice = createSlice({
    name: 'filterProducts',
    initialState: {
        filteredProducts: [],
    },
    reducers: {
        searchFilterAction(state, action) {
            state.filteredProducts = action.payload;
        }, 
        priceFilterAction(state, action) {

        }
    }
})


export const { searchFilterAction , priceFilterAction} = filterProductsSlice.actions;
export default filterProductsSlice.reducer;