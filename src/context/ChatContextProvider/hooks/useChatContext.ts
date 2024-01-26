import { useContext } from "react";

import { ChatContextType } from "../types";
import { ChatContext } from "../ChatContextProvider";

export const useChatContext = (): ChatContextType => {
  const context = useContext(ChatContext);

  if (context === undefined) {
    throw new Error("useChatContext must be used inside ChatContextProvider");
  }

  return context;
};
