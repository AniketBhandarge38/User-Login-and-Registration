import { useSelector } from "react-redux";
import { NavLink, Outlet } from "react-router-dom";
const ProtectedRoutes = () => {
  const { userToken } = useSelector((state) => state.auth);
  if (userToken === null) {
    return (
      <div className="unauthorized">
        <h1>Unauthorized :(</h1>
        <span>
          <NavLink to="/">Login</NavLink> to gain access
        </span>
      </div>
    );
  }
  return <Outlet />;
};

export default ProtectedRoutes;
