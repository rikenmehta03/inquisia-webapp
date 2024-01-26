import { useChatProvider } from "./hooks/useChatProvider";

export type Chat = {
    id: string;
    user: string;
    name?: string;
    knowledge_bases: string[];
    created_at: string;
}

export type ChatMessage = {
    id: string;
    chat_id: string;
    user: string;
    message: string;
    response: string;
    created_at: string;
    updated_at: string;
  };

export type ChatContextType  = ReturnType<typeof useChatProvider>;