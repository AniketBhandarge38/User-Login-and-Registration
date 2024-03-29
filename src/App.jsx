import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import ProtectedRoutes from "./routing/ProtectedRoutes";
import Header from "./components/Header";
export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/home" element={<HomePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
