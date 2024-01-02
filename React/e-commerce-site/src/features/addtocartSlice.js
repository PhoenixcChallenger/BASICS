import { createSlice } from "@reduxjs/toolkit";
// import { useEffect } from "react";

const getLocalCartData = () => {
    let localCartData = localStorage.getItem('items');
    if (localCartData === null) {
        return [];
    } else {
        return JSON.parse(localCartData);
    }
};
const getTotalLocalQuantityData = () => {
    let totalLocalQuantityData = localStorage.getItem('totalQuantity');
    if (totalLocalQuantityData === null) {
        return 0;
    } else {
        return JSON.parse(totalLocalQuantityData);
    }
};
const addtocartSlice = createSlice({
    name: 'addtocart',
    initialState: {
        items: getLocalCartData(),
        totalQuantity: getTotalLocalQuantityData(),
        IsVisible: false,
        IsMobVisible: false,
    },
    reducers: {
        updateItemQuantity(state, action) {
            const { key, quantity } = action.payload;
            const updatedItems = state.items.map(item => {
                if (item.key === key) {
                    console.log(item.quantity);
                    return {
                        ...item,
                        quantity: item.quantity + quantity // Update the quantity of the specific item
                    };
                }
                return item;
            });

            state.items = updatedItems;
            localStorage.setItem('items', JSON.stringify(state.items));
        },
        updateItemCart(state, action) {
            const { key, quantity } = action.payload;
            const updatedItems = state.items.map(item => {
                if (item.key === key) {
                    state.totalQuantity -= (item.quantity - quantity);
                    return {
                        ...item,
                        quantity: quantity
                    };
                }
                return item;
            });

            state.items = updatedItems;
            localStorage.setItem('totalQuantity', JSON.stringify(state.totalQuantity));
            localStorage.setItem('items', JSON.stringify(state.items));
        },
        totalQuantityAction(state, action) {
            state.totalQuantity += action.payload;
            localStorage.setItem('totalQuantity', JSON.stringify(state.totalQuantity));
        },
        addtocartAction(state, action) {
            state.items = [...state.items, action.payload];
            localStorage.setItem('items', JSON.stringify(state.items));
        },
        removefromcartAction(state, action) {
            const itemKey = action.payload;
            state.items = state.items.filter((item) => item.key !== itemKey)
            localStorage.setItem('items', JSON.stringify(state.items));
        },
        isVisibleAction(state, action) {
            state.IsVisible = action.payload;
        },
        isVisibleMobileAction(state, action) {
            state.IsMobVisible = action.payload
        }
    }
})


export const { totalQuantityAction, isVisibleAction, addtocartAction, updateItemQuantity, isVisibleMobileAction, removefromcartAction, updateItemCart, } = addtocartSlice.actions;
export default addtocartSlice.reducer;