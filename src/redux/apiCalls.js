import Swal from "sweetalert2";
import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import { publicRequest, userRequest } from "../requestMethods";
import {
  getProductFailure,
  getProductStart,
  getProductSuccess,
  deleteProductFailure,
  deleteProductStart,
  deleteProductSuccess,
  updateProductStart,
  updateProductSuccess,
  updateProductFailure,
  addProductFailure,
  addProductStart,
  addProductSuccess,
  getOrderedProductsStart,
  getOrderedProductsSuccess,
  getOrderedProductsFailure,
  getSingleOrderStart,
  getSingleOrderSuccess,
  getSingleOrderFailure,
  deleteOrderStart,
  deleteOrderSuccess,
  deleteOrderFailure,
} from "./productRedux";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data.data));
    Swal.fire({
      icon: "success",
      title: "SuccessFul",
      text: "Login Successful",
    });
  } catch (err) {
    const errorMessage = err.response?.data?.error || "An error occurred.";
    dispatch(loginFailure(errorMessage));
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: errorMessage,
    });
  }
};

// get all product
export const getProducts = async (dispatch) => {
  dispatch(getProductStart());
  try {
    const res = await publicRequest.get("/products");
    dispatch(getProductSuccess(res.data.data));
  } catch (err) {
    const errorMessage = err.response?.data?.error || "An error occurred.";
    dispatch(getProductFailure(errorMessage));
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: errorMessage,
    });
  }
};

// get ordered product
export const orderProducts = async (dispatch) => {
  dispatch(getOrderedProductsStart());
  try {
    const res = await userRequest.get("/orders");
    dispatch(getOrderedProductsSuccess(res.data.data));
  } catch (err) {
    const errorMessage = err.response?.data?.error || "An error has occurred!";
    dispatch(getOrderedProductsFailure(errorMessage));
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: errorMessage,
    });
  }
};
// get order one
export const orderedOnes = async (id, dispatch) => {
  dispatch(getSingleOrderStart());
  try {
    const res = await userRequest.get(`/orders/${id}`);
    dispatch(getSingleOrderSuccess(res.data.data));
  } catch (err) {
    const errorMessage = err.response?.data?.error || "An error has occurred!";
    dispatch(getSingleOrderFailure(errorMessage));
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: errorMessage,
    });
  }
};

// DELETE ORDER
export const deleteOrder = async (id, dispatch) => {
  dispatch(deleteOrderStart());
  try {
    const res = await userRequest.delete(`/orders/${id}`);
    dispatch(deleteOrderSuccess(res.data.data));
  } catch (err) {
    const errorMessage = err.response?.data?.error || "An error has occurred!";
    dispatch(deleteOrderFailure(errorMessage));
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: errorMessage,
    });
  }
};

// delete
export const deleteProduct = async (id, dispatch) => {
  dispatch(deleteProductStart());
  try {
    await userRequest.delete(`/orders/${id}`);
    dispatch(deleteProductSuccess(id));
  } catch (err) {
    const errorMessage = err.response?.data?.error || "An error occurred.";
    dispatch(deleteProductFailure(errorMessage));
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: errorMessage,
    });
  }
};

export const updateProduct = async (id, product, dispatch) => {
  dispatch(updateProductStart());
  try {
    await userRequest.put(`/products/${id}`, product);
    dispatch(updateProductSuccess({ id, product }));
    alert("Updated product Successfully");
  } catch (err) {
    const errorMessage = err.response?.data?.error || "An error occurred.";
    dispatch(updateProductFailure(errorMessage));
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: errorMessage,
    });
  }
};

//add product
export const addProduct = async (product, dispatch) => {
  dispatch(addProductStart());
  try {
    const res = await userRequest.post(`/products`, product);
    dispatch(addProductSuccess(res.data.data));
    alert("Added product successfully");
  } catch (err) {
    const errorMessage = err.response?.data?.error || "An error occurred.";
    dispatch(addProductFailure(errorMessage));
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: errorMessage,
    });
  }
};
