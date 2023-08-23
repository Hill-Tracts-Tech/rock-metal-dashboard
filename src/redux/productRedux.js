import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    isLoading: false,
    error: false,
  },
  reducers: {
    //GET ALL
    getProductStart: (state) => {
      state.isLoading = true;
      state.error = false;
    },
    getProductSuccess: (state, action) => {
      state.isLoading = false;
      state.products = action.payload;
    },
    getProductFailure: (state) => {
      state.isLoading = false;
      state.error = true;
    },
    //DELETE
    deleteProductStart: (state) => {
      state.isLoading = true;
      state.error = false;
    },
    deleteProductSuccess: (state, action) => {
      state.isLoading = false;
      const updatedProducts = state.products.filter(
        (item) => item._id !== action.payload
      );
      state.products = updatedProducts;
    },
    deleteProductFailure: (state) => {
      state.isLoading = false;
      state.error = true;
    },
    //UPDATE
    updateProductStart: (state) => {
      state.isLoading = true;
      state.error = false;
    },
    updateProductSuccess: (state, action) => {
      state.isLoading = false;
      state.products[
        state.products.findIndex((item) => item._id === action.payload.id)
      ] = action.payload.product;
    },
    updateProductFailure: (state) => {
      state.isLoading = false;
      state.error = true;
    },
    //UPDATE
    addProductStart: (state) => {
      state.isLoading = true;
      state.error = false;
    },
    addProductSuccess: (state, action) => {
      state.isLoading = false;
      state.products.push(action.payload);
    },
    addProductFailure: (state) => {
      state.isLoading = false;
      state.error = true;
    },
  },
});

export const {
  getProductStart,
  getProductSuccess,
  getProductFailure,
  deleteProductStart,
  deleteProductSuccess,
  deleteProductFailure,
  updateProductStart,
  updateProductSuccess,
  updateProductFailure,
  addProductStart,
  addProductSuccess,
  addProductFailure,
} = productSlice.actions;

export default productSlice.reducer;
