import axios from "axios";
import { useEffect, useState } from "react";
import BlogCard from "./BlogCard";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/posts").then((res) => {
      // console.log(res.data);
      setPosts(res.data);
    });
  }, []);

  console.log(posts);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Home;
