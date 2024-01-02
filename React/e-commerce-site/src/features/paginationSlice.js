// paginationSlice.js
import { createSlice } from '@reduxjs/toolkit';

const paginationSlice = createSlice({
    name: 'pagination',
    initialState: {
        currentPage: 1,
        pageCount: 1,
    },
    reducers: {
        nextPage: (state) => {
            state.currentPage += 1;
        },
        prevPage: (state) => {
            state.currentPage -= 1;
        },
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload;
        }
    },
});

// console.log(paginationSlice.actions.prevPage());

export const { nextPage, prevPage, setCurrentPage } = paginationSlice.actions;
export default paginationSlice.reducer;
