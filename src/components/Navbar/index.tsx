import React from "react";
import { NavBarContainer, NavBarElement, SearchBarElement } from "./styled";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import { TextField } from "@mui/material";
const ele = [
  {
    id: 1,
    name: "Discover",
    path: "/",
  },
  {
    id: 2,
    name: "Latest",
    path: "/latest",
  },
  {
    id: 3,
    name: "Trending",
    path: "/trending",
  },
  {
    id: 4,
    name: "Popular",
    path: "/popular",
  },
];

const NavBar = () => {
  return (
    <NavBarContainer>
      <div
        style={{
          display: "flex",
          width: "30em",
          // border: "1px solid white",
          justifyContent: "start",
          gap: "3em",
        }}
      >
        {ele.map((item) => (
          <NavBarElement key={item.id}>{item.name}</NavBarElement>
        ))}
      </div>

      <SearchBarElement>
        <div
          style={{
            display: "flex",
            gap: "1em",
            position: "relative",
          }}
        >
          <SearchIcon />
          <input
            style={{
              padding: "16px",
              width: "12em",
              position: "absolute",
              top: "-10px",
              left: "50px",
              border: "none",
              color: "white",
              backgroundColor: "transparent",
              outline: "none",
            }}
          />
        </div>
      </SearchBarElement>

      <div
        style={{
          background: "#111111",
          padding: "0.2",
          borderRadius: "5px",
        }}
      >
        <MenuIcon
          sx={{
            fontSize: "30px",
          }}
        />
      </div>
    </NavBarContainer>
  );
};

export default NavBar;
