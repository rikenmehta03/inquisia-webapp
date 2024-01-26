import { useCallback, useEffect, useState } from "react";
import { useChatApi } from "../../../api";
import { Chat, ChatMessage } from "../types";

export const useChatProvider = () => {
  const {
    getAllChat,
    generateChatResponse,
    createChat,
    getChatMessageHistory,
  } = useChatApi();

  const [allChat, setAllChat] = useState<Chat[]>([]);
  const [selectedChat, setSelectedChat] = useState<Chat | undefined>(undefined);
  const [chatMessageHistory, setChatMessageHistory] = useState<ChatMessage[]>(
    []
  );
  const [isFetchingChats, setIsFetchingChats] = useState(false);

  const fetchChatMessageHistory = (chatId: string) => {
    getChatMessageHistory(chatId).then((chatMessages: ChatMessage[]) => {
      setChatMessageHistory(chatMessages);
    });
  };


  // useEffect(() => {
  //   if (selectedChat === undefined && allChat.length > 0) {
  //     setSelectedChat(allChat[0]);
  //   }
  // }, [allChat]);


  useEffect(() => {
    if (selectedChat) {
      fetchChatMessageHistory(selectedChat.id);
    } else {
      setChatMessageHistory([]);
    }
  }, [selectedChat]);

  
  const fetchAllChats = useCallback(() => {
    setIsFetchingChats(true);
    try {
      return getAllChat().then((chats) => {
        setAllChat(chats);
      });
    } catch (error) {
      console.error(error);
    } finally {
      setIsFetchingChats(false);
    }
  }, []);

  const createNewChat = useCallback(() => {
    return createChat().then((chat) => {
      setSelectedChat(chat);
      fetchAllChats();
      return chat;
    });
  }, []);

  const getChatResponse = useCallback((chatId: string, question: string) => {
    return generateChatResponse(chatId, question).then(() => {
      fetchChatMessageHistory(chatId);
    });
  }, []);

  const updateSelectedChat = (chatId: string) => {
    setSelectedChat(allChat.find((chat) => chat.id === chatId));
  };

  return {
    selectedChat,
    updateSelectedChat,

    allChat,
    fetchAllChats,
    isFetchingChats,

    getChatResponse,
    createNewChat,

    chatMessageHistory,
  };
};
