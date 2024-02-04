import { NavLink } from "react-router-dom";
import HomePage from "../pages/HomePage";
import { useSelector } from "react-redux";
const Header = () => {
  const { userInfo } = useSelector((state) => state.auth);
  return (
    <div className="header">
      <h1>Cart</h1>
      <nav className="container-navigation">
        <NavLink to="/home">Home</NavLink>
        {!userInfo.data ? (
          <>
            <NavLink to="/">Login</NavLink>
            <NavLink to="/register">Register</NavLink>
          </>
        ) : (
          <button>Logout</button>
        )}
      </nav>
    </div>
  );
};
export default Header;
