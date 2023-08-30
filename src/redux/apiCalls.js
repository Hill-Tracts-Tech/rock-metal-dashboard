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
} from "./productRedux";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data.data));
    alert("Logged in Successfully");
  } catch (err) {
    const errorMessage = err.response?.data?.error || "An error occurred.";
    dispatch(loginFailure(errorMessage));
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
  }
};
// delete
export const deleteProduct = async (id, dispatch) => {
  dispatch(deleteProductStart());
  try {
    await userRequest.delete(`/products/${id}`);
    dispatch(deleteProductSuccess(id));
    alert("Deleted product successfully");
  } catch (err) {
    const errorMessage = err.response?.data?.error || "An error occurred.";
    dispatch(deleteProductFailure(errorMessage));
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
  }
};
