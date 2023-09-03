import { createSlice } from "@reduxjs/toolkit";

export const orderSlice = createSlice({
  name: "order",
  initialState: {
    isLoading: false,
    orders: [],
    order: {},
    error: "",
  },
  reducers: {
    // GET ORDERED
    getOrderedStart: (state) => {
      state.isLoading = true;
      state.error = "";
    },
    getOrderedSuccess: (state, action) => {
      state.isLoading = false;
      state.orders = action.payload;
      state.error = "";
    },
    getOrderedFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    // GET SINGLE ORDER
    getSingleOrderStart: (state) => {
      state.isLoading = true;
      state.error = "";
    },
    getSingleOrderSuccess: (state, action) => {
      state.isLoading = false;
      state.order = action.payload;
    },
    getSingleOrderFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    // Delete Order
    deleteOrderStart: (state) => {
      state.isLoading = true;
      state.error = "";
    },
    deleteOrderSuccess: (state, action) => {
      state.isLoading = false;
      state.orders = state.orders.filter(
        (item) => item.transaction_Id !== action.payload
      );
    },
    deleteOrderFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  getOrderedStart,
  getOrderedSuccess,
  getOrderedFailure,
  getSingleOrderStart,
  getSingleOrderSuccess,
  getSingleOrderFailure,
  deleteOrderStart,
  deleteOrderSuccess,
  deleteOrderFailure,
} = orderSlice.actions;

export default orderSlice.reducer;
