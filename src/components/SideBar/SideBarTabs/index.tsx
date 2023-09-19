import React from "react";
import { TabContainer } from "./styled";
import HomeIcon from "@mui/icons-material/Home";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import ExploreIcon from "@mui/icons-material/Explore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import QueueMusicIcon from "@mui/icons-material/QueueMusic";
import SettingsIcon from "@mui/icons-material/Settings";

const Tabs = [
  {
    name: "Home",
    path: "/",
    icon: HomeIcon,
  },
  {
    name: "Activity",
    path: "/activity",
    icon: ReceiptLongIcon,
  },
  {
    name: "Discover",
    path: "/discover",
    icon: ExploreIcon,
  },
  {
    name: "Liked songs",
    path: "/liked",
    icon: FavoriteIcon,
  },
  {
    name: "My playlist",
    path: "/recently-played",
    icon: QueueMusicIcon,
  },
  {
    name: "settings",
    path: "/settings",
    icon: SettingsIcon,
  },
];

const SideBarTabs = () => {
  return (
    <>
      <div>
        {Tabs.map((tab) => (
          <TabContainer
            sx={{
              backgroundColor: "transparent",
            }}
            key={tab.name}
          >
            <tab.icon />
            {tab.name}
          </TabContainer>
        ))}
      </div>
    </>
  );
};

export default SideBarTabs;
