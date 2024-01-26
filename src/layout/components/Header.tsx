import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";
import ColorSchemeToggle from "./ColorSchemeToggle";
import IconButton from "@mui/joy/IconButton";
import BadgeRoundedIcon from '@mui/icons-material/BadgeRounded';

export default () => {
  return (
    <Box
      component="header"
      sx={{
        py: 3,
        px: 1,
        display: "flex",
        alignItems: "left",
        justifyContent: "space-between",
      }}
    >
      <Box sx={{ gap: 2, display: "flex", alignItems: "center" }}>
        <IconButton variant="soft" color="primary" size="sm">
          <BadgeRoundedIcon />
        </IconButton>
        <Typography level="title-lg">Inquisia</Typography>
      </Box>
      <ColorSchemeToggle />
    </Box>
  );
};
