import { styled } from "@mui/material";

export const TabContainer = styled("div")({
  display: "flex",
  flexDirection: "row",
  justifyContent: "start",
  gap: 6,
  alignItems: "center",
  width: "100%",
  padding: "10px",
  background: "white",
  borderRadius: "10px",
  paddingTop: "30px",
  position: "relative",
});

export const SelectedTab = styled("div")({
  color: "white",
  fontWeight: "bold",
  position: "absolute",
  top: "12px",
  left: "-33px",
  width: "215px",
  height: "65px",
  display: "flex",
  borderTopRightRadius: "50px",
  borderBottomRightRadius: "50px",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
  transition: "all 0.3s ease-in-out",
  backgroundColor: "rgba(184,81,22,0.7)",
  background:
    "linear-gradient(180deg, rgba(184,81,22,0.7) 7%, rgba(121,9,104,0.6) 50%, rgba(175,21,241,0.7) 100%)",
});
