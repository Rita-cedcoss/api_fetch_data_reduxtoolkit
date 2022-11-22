import { createSlice } from "@reduxjs/toolkit"

const initialState={
    loading:false,
    cart:[],
    value:0
}
export const cartSlice=createSlice({
    name: 'product',
    initialState,
    reducers:{
     addProduct:(state,action)=>
     {
       state.value=10;
     },
     updateProduct:(state,action)=>{

     },
     deleteProduct:(state,action)=>{

     }
    }}
)
export const { addProduct,updateProduct,deleteProduct}=cartSlice.actions
export default cartSlice.reducer