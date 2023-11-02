import { Outlet } from "react-router-dom";
import Nav from "../component/Nav";
import Footer from "../component/Footer";

const MainLayout = () => {
  return (
    <div className="container mx-auto">
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
