import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/apiCalls";
import "./Login.css";
import profile from "../../assets/profile.png";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { email, password });
  };
  return (
    <div className="l-container">
      <div className="l-wrapper">
        <h1>Login</h1>
        <div className="l-profile">
          <img src={profile} alt="" />
        </div>
        <form className="l-form" onSubmit={handleClick}>
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
            <button
              type="submit"
              onClick={handleClick}
              style={{ padding: 10, width: 100 }}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
