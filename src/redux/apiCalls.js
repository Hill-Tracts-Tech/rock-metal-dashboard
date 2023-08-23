import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import { publicRequest, userRequest } from "../requestMethods";
import {
  getProductFailure,
  getProductStart,
  getProductSuccess,
  deleteProductFailure,
  deleteProductStart,
  deleteProductSuccess,
  updateProductFailure,
  updateProductStart,
  updateProductSuccess,
  addProductFailure,
  addProductStart,
  addProductSuccess,
} from "./productRedux";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data.data));
    alert("Loggedin Successfully");
  } catch (err) {
    const errorMessage = err.response?.data?.error || "An error occurred.";
    dispatch(loginFailure(errorMessage));
  }
};

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

export const deleteProduct = async (id, dispatch) => {
  dispatch(deleteProductStart());
  try {
    await userRequest.delete(`/products/${id}`);
    dispatch(deleteProductSuccess(id));
  } catch (err) {
    const errorMessage = err.response?.data?.error || "An error occurred.";
    dispatch(deleteProductFailure(errorMessage));
  }
};

export const updateProduct = async (id, product, dispatch) => {
  dispatch(updateProductStart());
  try {
    // update
    dispatch(updateProductSuccess({ id, product }));
  } catch (err) {
    const errorMessage = err.response?.data?.error || "An error occurred.";
    dispatch(updateProductFailure(errorMessage));
  }
};
export const addProduct = async (product, dispatch) => {
  dispatch(addProductStart());
  try {
    const res = await userRequest.post(`/products`, product);
    dispatch(addProductSuccess(res.data.data));
  } catch (err) {
    const errorMessage = err.response?.data?.error || "An error occurred.";
    dispatch(addProductFailure(errorMessage));
  }
};
