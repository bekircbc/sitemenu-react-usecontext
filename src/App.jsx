import "./App.scss";
import { PageWelcome } from "./components/PageWelcome";
import { PageRegister } from "./components/PageRegister";
import { PageLogin } from "./components/PageLogin";
import { NavLink, Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "./AppContext";

function App() {
  const { siteTitle } = useContext(AppContext);
  return (
    <div className="App">
      <h1>{siteTitle}</h1>
      <hr />
      <NavLink to="/welcome">Welcome</NavLink> |{" "}
      <NavLink to="/register">Register</NavLink> |{" "}
      <NavLink to="/login">Login</NavLink>
      <hr />
      <Routes>
        <Route path="/welcome" element={<PageWelcome />} />
        <Route path="/register" element={<PageRegister />} />
        <Route path="/login" element={<PageLogin />} />
        <Route path="/" element={<Navigate to="/welcome" replace />} />
      </Routes>
    </div>
  );
}

export default App;
