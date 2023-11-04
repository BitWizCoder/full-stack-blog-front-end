import { Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Blog from "../pages/Blog";
import DashBoardHome from "../pages/dashboard/Home";
import NewArticle from "../pages/dashboard/NewArticle";
import DashboardLayout from "../pages/dashboard/DashboardLayout";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="blog" element={<Blog />} />
      </Route>
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<DashBoardHome />} />
        <Route path="new-article" element={<NewArticle />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
