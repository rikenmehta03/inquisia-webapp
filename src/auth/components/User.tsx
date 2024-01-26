import { useNavigate } from "react-router-dom";

import Avatar from "@mui/joy/Avatar";
import Box from "@mui/joy/Box";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";

import { useUserContext } from "../../context/UserContextProvider/hooks/useUserContext";
import { useAuthSessionContext } from "../../context/AuthSessionProvider";

export default () => {
  const { currentUser } = useUserContext();
  const { clearAuthSession } = useAuthSessionContext();
  const navigate = useNavigate();

  const handleLogout = () => {
    clearAuthSession();
    navigate("/login", { replace: true });
  };

  return (
    <Box sx={{ display: "flex", gap: 1, alignItems: "center", p: 1 }}>
      <Avatar size="sm" variant="solid" />
      <Box sx={{ minWidth: 0, flex: 1 }}>
        <Typography level="title-sm">{currentUser?.name}</Typography>
        <Typography level="body-xs">{currentUser?.email}</Typography>
      </Box>
      <IconButton size="sm" variant="plain" color="neutral">
        <LogoutRoundedIcon onClick={handleLogout} />
      </IconButton>
    </Box>
  );
};
