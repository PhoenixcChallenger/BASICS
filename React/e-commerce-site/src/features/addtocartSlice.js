import { createSlice } from "@reduxjs/toolkit";

const addtocartSlice = createSlice({
    name: 'addtocart',
    initialState: {
        items: [],
        quantity: 0,
        IsVisible: false,
    },
    reducers: {
        quantityAction(state, action) {
            state.quantity = action.payload;
        },
        addtocartAction(state, action) {
            state.items.push(action.payload);
        },
        isVisibleAction(state, action) {
            state.IsVisible = action.payload;
        }
    }
})

export const { quantityAction, addtocartAction, isVisibleAction } = addtocartSlice.actions;
export default addtocartSlice.reducer;