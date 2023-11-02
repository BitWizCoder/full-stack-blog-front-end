import { useContext } from "react";
import BlogSection from "../component/BlogSection";
import Hero from "../component/Hero";
import Testimonial from "../component/Testimonial";
import { AuthContext } from "../context/AuthContext";

const Home = () => {
  const { name } = useContext(AuthContext);
  console.log(name);

  return (
    <>
      <Hero />
      <Testimonial />
      <BlogSection />
    </>
  );
};

export default Home;
