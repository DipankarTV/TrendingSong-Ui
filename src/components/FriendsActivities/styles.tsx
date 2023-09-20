import { styled } from "@mui/material";

export const SideBarLayout = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-start",
  alignItems: "center",
  height: "100%",
  backgroundColor: "#212121",
  padding: "20px",
  boxShadow: "0px 0px 40px 0px rgba(255,255,255,0.45)",
});

export const ActivityContainer = styled("div")({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  height: "4vh",
  width: "94%",
  padding: "10px",
  backgroundColor: "#212121",
});

export const FriendsLIst = styled("div")({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  height: "6vh",
  width: "94%",
  paddingBottom: "32px",
  // gap: 2,
  backgroundColor: "#212121",
  // border: "2px solid white",
});

export const MainPlayer = styled("div")({
  width: "403px",
  height: "210px",
  top: "698px",
  left: "1307px",
  borderRadius: "30px",
  // border: "2px solid",
  position: "absolute",
  backgroundColor: "rgba(112, 33, 74, 0.7)",
  boxShadow:
    "-0.19296523928642273px 0.0011634116526693106px 1.7785155773162842px 0px rgba(216, 216, 216, 0.02)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-evenly",
});

export const ProgressBar = styled("div")({
  width: "90%",
  backgroundColor: "grey",
  height: "5px",
  borderRadius: "10px",
  marginTop: "10px",
  display: "flex",
  gap: 2,
  flexDirection: "column",
  justifyContent: "space-between",
});

export const Progress = styled("div")({
  height: "100%",
  width: "100%",
  borderRadius: "10px",
  backgroundColor: "rgba(255, 255, 255, 0.7)",
});
