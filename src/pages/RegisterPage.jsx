import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { registerUser } from "../features/auth/authActions";
const RegisterPage = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [phone, setPhone] = useState("");
  const [err, setErr] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, userInfo, error, success } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    // redirect user to login page if registration was successful
    if (success) navigate("/");
  }, [navigate, success]);

  const handleUserName = (event) => {
    setUserName(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validUserData =
      email.trim() &&
      password.trim() &&
      username.trim() &&
      fname.trim() &&
      lname.trim() &&
      phone;
    if (validUserData) {
      addUserProfile();
    }
  };

  const addUserProfile = async () => {
    const address = {
      city: "kilcoole",
      street: "7835 new road",
      number: 3,
      zipcode: "12926-3874",
      geolocation: {
        lat: "-37.3159",
        long: "81.1496",
      },
    };

    try {
      const data = {
        email: email,
        username: username,
        password: password,
        name: {
          firstname: fname,
          lastname: lname,
        },
        address: address,
        phone: phone,
      };

      dispatch(registerUser(data));
    } catch (err) {
      setErr("Cannot add user, enter correct data");
    }
  };

  return (
    <div className="register-container">
      <h1>Register</h1>

      <div className="register-form">
        <form className="form" onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
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
          <label htmlFor="fname">First Name</label>
          <input
            type="text"
            placeholder="first name"
            name="fname"
            value={fname}
            onChange={(event) => setFname(event.target.value)}
          />
          <label htmlFor="lname">Last Name</label>
          <input
            type="text"
            placeholder="last name"
            name="lname"
            value={lname}
            onChange={(event) => setLname(event.target.value)}
          />
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            placeholder="Phone or Mobile"
            name="phone"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
          />
          <button type="submit">Register</button>
        </form>
        <h3>
          Already have an account? <Link to="/">Login</Link>
        </h3>
        <h2>{err}</h2>
      </div>
    </div>
  );
};

export default RegisterPage;
