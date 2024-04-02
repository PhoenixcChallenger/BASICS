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
      state.filteredProducts = action.payload;
    }
  }
})


export const { searchFilterAction, priceFilterAction } = filterProductsSlice.actions;
export default filterProductsSlice.reducer;