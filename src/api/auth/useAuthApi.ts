import { useAxios } from "../../hooks";
import { fetchAuthKey } from "./auth";

export const useAuthApi = () => {
    const {axiosInstance} = useAxios();
  return {
    fetchAuthKey: fetchAuthKey(axiosInstance),
  };
};
