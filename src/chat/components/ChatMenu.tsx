import List from "@mui/joy/List";
import Box from "@mui/joy/Box";
import ListItem from "@mui/joy/ListItem";
import ListItemButton from "@mui/joy/ListItemButton";
import ListItemContent from "@mui/joy/ListItemContent";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import CircularProgress from "@mui/joy/CircularProgress";
import QuestionAnswerOutlinedIcon from "@mui/icons-material/QuestionAnswerOutlined";

import NewChatButton from "./NewChatButton";
import { useChatContext } from "../../context/ChatContextProvider";
import { Chat } from "../../context/ChatContextProvider/types";

export default () => {
  const { allChat, isFetchingChats, selectedChat, updateSelectedChat } =
    useChatContext();

  const onChatSelect = (chat_id: string) => {
    updateSelectedChat(chat_id);
  };

  const onNewChat = () => {
    updateSelectedChat("");
  };

  if (isFetchingChats) {
    return <CircularProgress size="lg" />;
  }

  return (
    <Sheet
      sx={{
        borderColor: "divider",
      }}
    >
      <Box
        sx={{
          p: 1,
          display: "flex",
          alignItems: "right",
          justifyContent: "end",
        }}
      >
        <NewChatButton onClick={onNewChat} />
      </Box>

      <List
        sx={{
          py: 0,
          "--ListItem-paddingY": "0.75rem",
          "--ListItem-paddingX": "1rem",
        }}
      >
        {allChat.map((chat) => (
          <ChatListItem
            key={chat.id}
            chat={chat}
            isSelected={selectedChat?.id === chat.id}
            onChatSelect={onChatSelect}
          />
        ))}
      </List>
    </Sheet>
  );
};

const ChatListItem = ({
  chat,
  isSelected,
  onChatSelect,
}: {
  chat: Chat;
  isSelected: boolean;
  onChatSelect: (chat_id: string) => void;
}) => {
  return (
    <ListItem key={chat.id}>
      <ListItemButton
        onClick={() => onChatSelect(chat.id)}
        selected={isSelected}
      >
        <QuestionAnswerOutlinedIcon />
        <ListItemContent>
          <Typography level="title-sm">{chat.name || chat.id}</Typography>
        </ListItemContent>
      </ListItemButton>
    </ListItem>
  );
};
