import axios from "axios";

const usePost = () => {
  const token = localStorage.getItem("accesstoken");
  const post = async (url, body = {}) => {
    try {
      const response = await axios.post(url, body, {
        withCredentials: true, // 쿠키를 헤더에 포함
        headers: { Authorizatoin: "Bearer " + token },
      });
      return response.data;
    } catch (error) {
      console.error("Error:", error);
      throw new Error("Failed to post data");
    }
  };
  return { post };
};
export default usePost;