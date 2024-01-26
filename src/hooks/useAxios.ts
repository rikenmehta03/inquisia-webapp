import axios, { AxiosError, AxiosInstance } from "axios";
import { useAuthSessionContext } from "../context/AuthSessionProvider";
import { useEffect } from "react";

const axiosInstance = axios.create({ baseURL: "/api" });

export const useAxios = (): { axiosInstance: AxiosInstance } => {
  const { authSession } = useAuthSessionContext();

  useEffect(() => {
    axiosInstance.interceptors.request.clear();
    axiosInstance.interceptors.request.use(
      (config) => {
        if (authSession !== undefined) {
          config.headers[
            "Authorization"
          ] = `Bearer ${authSession.access_token}`;
        }
        return config;
      },
      (error: AxiosError) => {
        console.error({ error });
        void Promise.reject(error);
      }
    );
  }, [authSession]);

  return {
    axiosInstance,
  };
};
