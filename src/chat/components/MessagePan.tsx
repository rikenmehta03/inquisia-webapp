import { useState } from "react";

import Box from "@mui/joy/Box";
import Sheet from "@mui/joy/Sheet";
import Stack from "@mui/joy/Stack";

import MessageResponse from "./MessageResponse";
import MessageInput from "./MessageInput";

import { useChatContext } from "../../context/ChatContextProvider";
import { ChatMessage } from "../../context/ChatContextProvider/types";

export default function MessagesPane() {
  const { chatMessageHistory, selectedChat, getChatResponse, createNewChat } =
    useChatContext();
  const [textAreaValue, setTextAreaValue] = useState("");

  return (
    <Sheet
      sx={{
        width: "50%",
        minWidth: "600px",
        height: { xs: "calc(100dvh - var(--Header-height))", lg: "100dvh" },
        display: "flex",
        flexDirection: "column",
        backgroundColor: "background.level1",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flex: 1,
          minHeight: 0,
          px: 2,
          py: 3,
          overflowY: "auto",
          flexDirection: "column-reverse",
        }}
      >
        <Stack spacing={2} justifyContent="flex-end">
          {chatMessageHistory.map((chatMessage: ChatMessage) => {
            return <MessageResponse key={chatMessage.id} {...chatMessage} />;
          })}
        </Stack>
      </Box>
      <MessageInput
        textAreaValue={textAreaValue}
        setTextAreaValue={setTextAreaValue}
        onSubmit={() => {
          if (selectedChat === undefined) {
            createNewChat().then((chat) => {
              getChatResponse(chat.id, textAreaValue);
            });
          } else {
            getChatResponse(selectedChat.id, textAreaValue);
          }
        }}
      />
    </Sheet>
  );
}
