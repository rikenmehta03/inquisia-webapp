import { AxiosInstance } from "axios";

export const createUser = (axiosInstance: AxiosInstance) => {
  return async (user: { name: String; email: String; password: String }) => {
    const { data } = await axiosInstance.post<{
      name: string;
      email: string;
    }>("/users/register", user);
    return data;
  };
};

export const getCurrentUser = (axiosInstance: AxiosInstance) => {
  return async () => {
    const { data } = await axiosInstance.get<{
      name: string;
      email: string;
    }>("/users/me");
    return data;
  };
}
