import { AxiosInstance } from "axios";

export const fetchAuthKey = (axiosInstance: AxiosInstance) => {
  return async (email: string, password: string) => {
    const { data } = await axiosInstance.postForm<{
      access_token: string;
      refresh_token: string;
    }>("/auth/login", { username: email, password });
    return data;
  };
};