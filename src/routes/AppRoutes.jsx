import { Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Blog from "../pages/Blog";
import Dashboard from "../pages/Dashboard";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="blog" element={<Blog />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Route>
      <Route path="/dash" element={<Dashboard/>}></Route>
    </Routes>
  );
};

export default AppRoutes;
