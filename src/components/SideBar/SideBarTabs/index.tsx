import React, { useState } from "react";
import { SelectedTab, TabContainer } from "./styled";
import HomeIcon from "@mui/icons-material/Home";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import ExploreIcon from "@mui/icons-material/Explore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import QueueMusicIcon from "@mui/icons-material/QueueMusic";
import SettingsIcon from "@mui/icons-material/Settings";

const Tabs = [
  {
    id: "1",
    name: "Home",
    path: "/",
    icon: HomeIcon,
  },
  {
    id: "2",
    name: "Activity",
    path: "/activity",
    icon: ReceiptLongIcon,
  },
  {
    id: "3",
    name: "Discover",
    path: "/discover",
    icon: ExploreIcon,
  },
  {
    id: "4",
    name: "Liked songs",
    path: "/liked",
    icon: FavoriteIcon,
  },
  {
    id: "5",
    name: "My playlist",
    path: "/recently-played",
    icon: QueueMusicIcon,
  },
  {
    id: "6",
    name: "settings",
    path: "/settings",
    icon: SettingsIcon,
  },
];

const SideBarTabs = () => {
  const [selected, setSelected] = useState("1");
  return (
    <>
      <div
        style={{
          position: "relative",
        }}
      >
        {Tabs.map((tab) => (
          <TabContainer
            sx={{
              backgroundColor: "transparent",
              fontFamily: "Poppins, sans-serif",
              fontSize: "24px",
              fontWeight: "500",
              zIndex: 99,
            }}
            onClick={() => setSelected(tab.id)}
            key={tab.id}
          >
            <tab.icon />
            {tab.name}
            {selected === tab.id && <SelectedTab />}
            {/* <SelectedTab /> */}
          </TabContainer>
        ))}
      </div>
    </>
  );
};

export default SideBarTabs;
