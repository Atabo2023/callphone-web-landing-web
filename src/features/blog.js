import req from "../axios/req";
import { NotifyError } from "../components/toasts";

const blog = (actionType, payload) => {
  const blogOptions = {
    getBlogs: async () => {
      try {
        const response = await req.get("/blogs");
        return response;
      } catch (error) {
        NotifyError(error?.message);
        // console.log("ERROR:", error);
      }
    },
    getBlogById: async (id) => {
      try {
        const response = await req.get(`/blogs/${id}`);
        return response;
      } catch (error) {
        NotifyError(error?.message);
        // console.log(error);
      }
    },
  };
  return blogOptions[actionType];
};

export default blog;
