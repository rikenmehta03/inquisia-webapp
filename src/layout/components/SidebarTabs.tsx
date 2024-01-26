import * as React from "react";

import Tabs from "@mui/joy/Tabs";
import TabList from "@mui/joy/TabList";
import Tab, { tabClasses } from "@mui/joy/Tab";
import TabPanel from "@mui/joy/TabPanel";
import Divider from "@mui/joy/Divider";
import Box from "@mui/joy/Box";
import Sheet from "@mui/joy/Sheet";

import ChatMenu from "../../chat/components/ChatMenu";

export default () => {
  const [index, setIndex] = React.useState(0);
  return (
    <Tabs
      size="lg"
      aria-label="Bottom Navigation"
      value={index}
      onChange={(event, value) => setIndex(value as number)}
      sx={{
        p: 0,
        [`& .${tabClasses.root}`]: {
          py: 1,
          flex: 1,
          transition: "0.3s",
          fontWeight: "md",
          fontSize: "md",
          [`&:not(.${tabClasses.selected}):not(:hover)`]: {
            opacity: 1,
          },
        },
      }}
    >
      <TabList
        variant="plain"
        size="sm"
        disableUnderline
        sx={{ borderRadius: "lg", p: 1 }}
      >
        <Tab disableIndicator orientation="vertical">
          Chats
        </Tab>
        <Tab disableIndicator orientation="vertical">
          Knowledge Bases
        </Tab>
      </TabList>
      <Divider />
      <Box sx={{ py: 1 }}>
        <TabPanel value={0} sx={{ p: 0 }}>
          <ChatMenu />
        </TabPanel>
        <TabPanel value={1} sx={{ p: 0 }}>
          <Sheet>
            <b>Knowledge base</b> tab panel
          </Sheet>
        </TabPanel>
      </Box>
    </Tabs>
  );
};
