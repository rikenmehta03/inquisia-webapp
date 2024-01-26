import { AxiosInstance } from "axios";

type ChatResponse = {
  id: string;
  user: string;
  name?: string;
  created_at: string;
  knowledge_bases: string[];
};

type ChatMessageResponse = {
  id: string;
  chat_id: string;
  user: string;
  message: string;
  response: string;
  created_at: string;
  updated_at: string;
};

export const createChat = (axiosInstance: AxiosInstance) => {
  return async () => {
    const { data } = await axiosInstance.post<ChatResponse>("/chat");
    return data;
  };
};

export const getAllChat = (axiosInstance: AxiosInstance) => {
  return async () => {
    const { data } = await axiosInstance.get<ChatResponse[]>("/chat");
    return data;
  };
};

export const generateChatResponse = (axiosInstance: AxiosInstance) => {
  return async (chatId: string, question: string) => {
    const { data } = await axiosInstance.post<ChatMessageResponse>(
      "/chat/ask",
      { chat_id: chatId, question }
    );
    return data;
  };
};

export const getChatMessaageHistory = (axiosInstance: AxiosInstance) => {
  return async (chatId: string) => {
    const { data } = await axiosInstance.get<ChatMessageResponse[]>(
      `/chat/${chatId}/history`
    );
    return data;
  };
};
