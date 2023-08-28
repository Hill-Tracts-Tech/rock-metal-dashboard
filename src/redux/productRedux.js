import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    isLoading: false,
    error: "",
  },
  reducers: {
    //GET ALL
    getProductStart: (state) => {
      state.isLoading = true;
      state.error = "";
    },
    getProductSuccess: (state, action) => {
      state.isLoading = false;
      state.products = action.payload;
    },
    getProductFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    //DELETE
    deleteProductStart: (state) => {
      state.isLoading = true;
      state.error = "";
    },
    deleteProductSuccess: (state, action) => {
      state.isLoading = false;
      const updatedProducts = state.products.filter(
        (item) => item._id !== action.payload
      );
      state.products = updatedProducts;
    },
    deleteProductFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    //UPDATE
    updateProductStart: (state) => {
      state.isLoading = true;
      state.error = "";
    },

    updateProductSuccess: (state, action) => {
      state.isLoading = false;
      const updatedProductIndex = state.products.findIndex(
        (item) => item._id === action.payload.id
      );
      if (updatedProductIndex !== -1) {
        state.products[updatedProductIndex] = action.payload.updatedProduct;
      }
    },

    updateProductFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    //New Add
    addProductStart: (state) => {
      state.isLoading = true;
      state.error = "";
    },
    addProductSuccess: (state, action) => {
      state.isLoading = false;
      state.products.push(action.payload);
    },
    addProductFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
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
