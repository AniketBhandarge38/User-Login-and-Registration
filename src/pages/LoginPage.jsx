import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { userLogin } from "../features/auth/authActions";
import { useDispatch, useSelector } from "react-redux";

const LoginPage = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const { success, userToken, error } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (success) {
      navigate("/home");
    }
  }, [success]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username.trim() && password.trim()) {
      fetchUser(username, password);
    }
  };

  const fetchUser = async (username, password) => {
    const body = {
      username: username,
      password: password,
    };
    try {
      dispatch(userLogin(body));
    } catch (err) {
      console.log(err);
      setErr("User not found");
    }
  };

  const handleUserName = (event) => {
    setUserName(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  return (
    <div className="login-container">
      <h1>Login</h1>

      <div className="login-form">
        <form className="form" onSubmit={handleSubmit}>
          <label htmlFor="username">User name</label>
          <input
            type="text"
            placeholder="User name"
            name="username"
            value={username}
            onChange={handleUserName}
          />
          <label htmlFor="password">Password</label>
          <input
            type="text"
            placeholder="Password"
            name="password"
            value={password}
            onChange={handlePassword}
          />
          <button type="submit">Login</button>
        </form>
        <h3>
          Don't have an account? <Link to="/register">Register</Link>
        </h3>
        <h2>{err}</h2>
      </div>
    </div>
  );
};

export default LoginPage;
