import { useEffect } from "react";
import Box from "@mui/joy/Box";

import Sidebar from "./Sidebar";
import SidebarToggleHeader from "./SidebarToggleHeader";

import { useAuthSessionContext } from "../../context/AuthSessionProvider";
import { useUserContext } from "../../context/UserContextProvider/hooks/useUserContext";
import { useChatContext } from "../../context/ChatContextProvider";
import { MessagePan } from "../../chat";

export default () => {
  const { authSession } = useAuthSessionContext();
  const { fetchCurrentUser, isFetchingUser } = useUserContext();
  const { fetchAllChats, isFetchingChats, updateSelectedChat } = useChatContext();

  useEffect(() => {
    if (authSession !== undefined) {
      if (!isFetchingUser) void fetchCurrentUser();

      if (!isFetchingChats) {
        updateSelectedChat("");
        void fetchAllChats();
      }
    }
  }, [authSession]);

  return (
    <Box sx={{ display: "flex", minHeight: "100dvh" }}>
      <Sidebar />
      <SidebarToggleHeader />
      <Box className="MainContent" sx={{ flex: 1, justifyContent: "center", display: "flex"}}>
        <MessagePan />
      </Box>
    </Box>
  );
};
