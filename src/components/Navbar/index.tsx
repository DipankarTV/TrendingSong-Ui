import React from "react";
import { NavBarContainer, NavBarElement, SearchBarElement } from "./styled";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
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
          //   border: "1px solid white",
          justifyContent: "space-around",
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
          }}
        >
          <SearchIcon />
          Search
        </div>
        <MenuIcon />
      </SearchBarElement>
    </NavBarContainer>
  );
};

export default NavBar;
