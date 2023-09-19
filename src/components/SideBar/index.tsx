import React from "react";
import { SideBarLayout } from "./styled";
import LogoutContainer from "./Logout";
import LogoDot from "./Logo/index";
import SideBarTabs from "./SideBarTabs";

const SideBar = () => {
  return (
    <>
      <SideBarLayout>
        <LogoDot />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            // border: "2px solid red",
            height: "86%",
          }}
        >
          <SideBarTabs />
          <LogoutContainer />
        </div>
      </SideBarLayout>
    </>
  );
};

export default SideBar;
