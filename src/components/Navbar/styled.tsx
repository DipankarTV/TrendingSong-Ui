import { styled } from "@mui/material";

export const NavBarContainer = styled("div")({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  //   border: "1px solid white",
  width: "94%",
  height: "50px",
  padding: "20px",
});

export const NavBarElement = styled("div")({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  //   color: "white",
});

export const SearchBarElement = styled("div")({
  display: "flex",
  width: "20em",
  height: "10px",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "5px",
  backgroundColor: "#111111",
  padding: "20px",
  borderRadius: "20px 20px 20px 20px",
});
