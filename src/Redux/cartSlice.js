import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  cart: [],
  status:"",
  error: "",
};
export const fetchData = createAsyncThunk("product/fetchData", async () => {
  const response = await axios.get("https://dummyjson.com/carts/15");
  return response.data.products;
});
export const addCartData = createAsyncThunk(
  "product/addCartData",
  async (obj) => {
    const response = await axios.post("https://dummyjson.com/carts/add", obj);
    console.log(response.data.products);
    return response.data.products;
  }
);
export const deleteCartData = createAsyncThunk(
  "product/deleteCartData",
  async () => {
    const response = await axios.delete("https://dummyjson.com/carts/1");
    console.log("isDeleted", response.data.isDeleted);
    return response.products;
  }
);
export const updateCartData = createAsyncThunk(
  "product/updateCartData",
  async (obj) => {
    const response = await axios.put("https://dummyjson.com/carts/1", obj);
    console.log(response.products);
    return response.products;
  }
);
export const cartSlice = createSlice({
  name: "product",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = "Data is fetched Successfully";
        state.cart = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = "Fetching Data Failed";
      })
      .addCase(addCartData.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(addCartData.fulfilled, (state, action) => {
        state.status = "Data is Added Successfully";
        state.cart = state.cart.concat(action.payload);
      })
      .addCase(addCartData.rejected, (state, action) => {
        state.status = "Data is not Added successfully";
      })
      .addCase(deleteCartData.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(deleteCartData.fulfilled, (state, action) => {
        state.status = "Data is Deleted Successfully";
      })
      .addCase(deleteCartData.rejected, (state, action) => {
        state.status = "Error in deleting data";
      })
      .addCase(updateCartData.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(updateCartData.fulfilled, (state, action) => {
        state.status = "Data is Updated Successfully";
      })
      .addCase(updateCartData.rejected, (state, action) => {
        state.status = "Data is not Updated Successfully";
      });
  },
});
// export const { addProduct,updateProduct,deleteProduct}=cartSlice.actions
export default cartSlice.reducer;
