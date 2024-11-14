import { configureStore } from "@reduxjs/toolkit";
import DataReducer from "./DataSlice"
const store = configureStore({reducer :{
    user:DataReducer
}})

export default store;