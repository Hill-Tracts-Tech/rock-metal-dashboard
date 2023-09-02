import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Login.css";
import profile from "../../assets/profile.png";
import Swal from "sweetalert2";
import { login } from "../userList/serviceApi";
import { clear } from "../userList/userRedux";

const Login = () => {
  const { isLoading, error } = useSelector((state) => state.user);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();

    if (!email || !password) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Email and Password is required",
      });
      return;
    }

    login(dispatch, { email, password });
  };

  useEffect(() => {
    dispatch(clear());
  }, [dispatch, error]);

  return (
    <div className="l-container">
      <div className="l-wrapper">
        <h1>Welcome to</h1>
        <div className="l-profile">
          <img src={profile} alt="" />
        </div>
        <span>Maliker name</span>
        <input
          style={{ padding: 10, marginBottom: 20 }}
          type="email"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          style={{ padding: 10, marginBottom: 20 }}
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="l-btn">
          <button onClick={handleClick} style={{ padding: 10, width: 100 }}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
