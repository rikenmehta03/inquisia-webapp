import { useAxios } from "../../hooks";
import { createUser, getCurrentUser } from "./user";

export const useUserApi = () => {
  const { axiosInstance } = useAxios();
  return {
    createUser: createUser(axiosInstance),
    getCurrentUser: getCurrentUser(axiosInstance),
  };
};
