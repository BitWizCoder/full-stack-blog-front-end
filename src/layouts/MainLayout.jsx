import { Outlet } from "react-router-dom";
import Nav from "../component/Nav";
import Footer from "../component/Footer";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const MainLayout = () => {
  const { loading } = useContext(AuthContext);

  return (
    <div>
      {loading ? (
        <p>site is loading...</p>
      ) : (
        <div className="container mx-auto">
          <Nav />
          <Outlet />
          <Footer />
        </div>
      )}
    </div>
  );
};
export default MainLayout;
