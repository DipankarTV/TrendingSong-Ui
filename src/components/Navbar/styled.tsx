import { styled } from "@mui/material";

export const NavBarContainer = styled("div")({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  // border: "1px solid white",
  width: "94%",
  height: "50px",
  paddingTop: "20px",
  paddingBottom: "20px",
});

export const NavBarElement = styled("div")({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-start",
  alignItems: "center",
  fontFamily: "Poppins, sans-serif",
  //   color: "white",
  // border: "1px solid white",
});

export const SearchBarElement = styled("div")({
  display: "flex",
  width: "16em",
  height: "10px",
  alignItems: "center",
  backgroundColor: "#111111",
  padding: "20px",
  borderRadius: "20px 20px 20px 20px",
  // border: "1px solid white",s
});
