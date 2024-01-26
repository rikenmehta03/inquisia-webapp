import { createContext, PropsWithChildren } from "react";

import { useChatProvider } from "./hooks/useChatProvider";
import { ChatContextType } from "./types";

export const ChatContext = createContext<ChatContextType | undefined>(
  undefined
);

export const ChatContextProvider = ({ children }: PropsWithChildren<{}>) => {
  const chatProviderUtils = useChatProvider();
  
  return (
    <ChatContext.Provider value={chatProviderUtils}>
      {children}
    </ChatContext.Provider>
  );
};
