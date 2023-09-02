import Swal from "sweetalert2";
import { userRequest } from "../../requestMethods";
import {
  deleteOrderFailure,
  deleteOrderStart,
  deleteOrderSuccess,
  getOrderedFailure,
  getOrderedStart,
  getOrderedSuccess,
  getSingleOrderFailure,
  getSingleOrderStart,
  getSingleOrderSuccess,
} from "./orderRedux";

// GET ORDERS
export const orderProducts = async (dispatch) => {
  dispatch(getOrderedStart());
  try {
    const res = await userRequest.get("/orders");
    dispatch(getOrderedSuccess(res.data.data));
  } catch (err) {
    const errorMessage = err.response?.data?.error || "An error has occurred!";
    dispatch(getOrderedFailure(errorMessage));
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: errorMessage,
    });
  }
};
// GET SINGEL ORDER
export const singelOrder = async (id, dispatch) => {
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
    await userRequest.delete(`/orders/${id}`);
    dispatch(deleteOrderSuccess(id));
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
