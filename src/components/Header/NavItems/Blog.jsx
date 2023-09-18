import React from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div>
      <Link to="/blog">
        <button className="hover:text-indigo-700">Blog</button>
      </Link>
    </div>
  );
};
export default Blog;
