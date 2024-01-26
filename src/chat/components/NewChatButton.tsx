import IconButton, { IconButtonProps } from "@mui/joy/IconButton";
import AddIcon from "@mui/icons-material/Add";

export default (props: IconButtonProps) => {
  const { onClick, ...other } = props;

  return (
    <IconButton
      id="new-chat"
      size="sm"
      variant="outlined"
      color="neutral"
      aria-label="create new chat button"
      {...other}
      onClick={onClick}
    >
      <AddIcon />
    </IconButton>
  );
};
