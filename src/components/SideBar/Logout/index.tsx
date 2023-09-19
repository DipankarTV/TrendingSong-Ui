import React from "react";
import Logout from "../../../Icons/Logout";
import { LogoutButton, LogoutText } from "./styled";

const LogoutContainer = () => {
  return (
    <LogoutButton>
      <Logout />
      <LogoutText>Log out</LogoutText>
    </LogoutButton>
  );
};

export default LogoutContainer;
