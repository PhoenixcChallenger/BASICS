import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../feactures/counter/counterSlice"

export default configureStore({
    reducer:{counter: counterReducer}
})