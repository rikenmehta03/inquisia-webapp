import { PropsWithChildren } from "react";

import Box from "@mui/joy/Box";
import Stack from "@mui/joy/Stack";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import { ChatMessage } from "../../context/ChatContextProvider/types";

export default (props: ChatMessage) => {
  const { message, response, id } = props;

  return (
    <>
      <MessageBlock key={id + "-message"} variant="question">
        {message}
      </MessageBlock>
      <MessageBlock key={id + "-response"} variant="response">
        {response}
      </MessageBlock>
    </>
  );
};

const MessageBlock = ({
  variant,
  children,
}: PropsWithChildren & { variant: "question" | "response" }) => {
  return (
    <Stack direction="row" spacing={2} flexDirection="row">
      <Box sx={{ maxWidth: "60%", minWidth: "auto" }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          spacing={2}
          sx={{ mb: 0.25 }}
        >
          <Typography level="body-xs">
            {variant === "question" ? "You" : "Inquisia"}
          </Typography>
        </Stack>
        <Box sx={{ position: "relative" }}>
          <Sheet
            color="neutral"
            variant="solid"
            sx={{
              p: 1.25,
              borderRadius: "lg",
              borderTopLeftRadius: 0,
              backgroundColor:
                variant === "question"
                  ? "var(--joy-palette-primary-solidBg)"
                  : "background.body",
            }}
          >
            <Typography
              level="body-sm"
              sx={{
                color:
                  variant === "question"
                    ? "var(--joy-palette-common-white)"
                    : "var(--joy-palette-text-primary)",
              }}
            >
              {children}
            </Typography>
          </Sheet>
        </Box>
      </Box>
    </Stack>
  );
};
