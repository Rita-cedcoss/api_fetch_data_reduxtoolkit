import { configureStore } from "@reduxjs/toolkit";
import Reducer from './cartSlice'
export const store=configureStore({
    reducer:{
        Reducer
    }
     
    })

    // export default store