import Swal from "sweetalert2";
import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import { publicRequest } from "../../requestMethods";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login/dashboard", user);
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
