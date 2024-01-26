import { useAxios } from "../../hooks";
import { getAllChat, generateChatResponse, createChat, getChatMessaageHistory } from "./chat";

export const useChatApi = () => {
  const { axiosInstance } = useAxios();
  return {
    createChat: createChat(axiosInstance),
    getAllChat: getAllChat(axiosInstance),
    generateChatResponse: generateChatResponse(axiosInstance),
    getChatMessageHistory: getChatMessaageHistory(axiosInstance)
  };
};
