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
        setPageCount: (state, action) => {
            state.pageCount = action.payload;
        },
    },
});

// console.log(paginationSlice.actions.prevPage());

export const { nextPage, prevPage, setPageCount } = paginationSlice.actions;
export default paginationSlice.reducer;
