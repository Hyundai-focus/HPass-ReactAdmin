import axios from "axios";

const useGet = () => {
  const token = localStorage.getItem("accesstoken");
  const get = async (url, queryParams = {}) => {
    try {
      const response = await axios.get(url, {
        params: queryParams,
        withCredentials: true,
        headers: { Authorizatoin: "Bearer " + token },
      });
      return response.data;
    } catch (error) {
      console.error("Error:", error);
      throw new Error("Failed to fetch data");
    }
  };
  return { get };
};

export default useGet;