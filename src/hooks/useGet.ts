import axios from "axios";
import { useCookies } from "react-cookie";

const useGet = () => {
  const [cookies] = useCookies(["token"]);
  const get = async (url, queryParams = {}) => {
    try {
      const response = await axios.get(url, {
        params: queryParams,
        withCredentials: true,
        headers: { Authorizatoin: cookies.token },
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