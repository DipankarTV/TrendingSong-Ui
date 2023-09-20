import { styled, Typography } from "@mui/material";

export const PopularText = styled(Typography)({
  fontSize: "22px",
  fontWeight: "bold",
  fontFamily: "Poppins, sans-serif",
});

export const ArtistContainer = styled("div")({
  display: "flex",
  flexDirection: "row",
  justifyContent: "start",
  gap: "3.9em",
  alignItems: "center",
  width: "96%",
  height: "8em",
  // border: "1px solid white",
});

export const ArtistContainerCircle = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "105px",
  height: "105px",
  gap: "3.5px",
  // padding: "5px",
  // border: "1px solid red",
});

export const TextField = styled("span")({
  fontSize: "12px",
  fontWeight: "bolder",
  fontFamily: "Poppins, sans-serif",
});

export const MusicCard = styled("div")({
  // width: "253px",
  height: "286px",
  top: "386px",
  left: "330px",
  borderRadius: "35px",
  boxShadow: "0px 0.5983999967575073px 1.4384000301361084px 0px #77777708",
  marginBottom: "4em",
});

export const RecentlyPlayedCard = styled("div")({
  width: "226px",
  height: "229px",
  top: "851px",
  left: "330px",
  borderRadius: "30px",
  // border: "2px solid red",
  boxShadow: "0px 0.9624999761581421px 1.7921874523162842px 0px #77777709",
});

export const AudioCard = styled("div")({
  width: "167px",
  height: "44px",
  top: "889px",
  left: "324px",
  position: "absolute",
  borderRadius: "30px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  backgroundColor: " rgba(151, 155, 122, 0.8)",
  // border: "1px solid #fff",
  boxShadow: "0px 0.9624999761581421px 1.7921874523162842px 0px #77777709",
});

export const TrendingCardContainer = styled("div")({
  height: "24vh",
  width: "100%",
  flex: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  alignItems: "center",
  paddingLeft: "2em",
});

export const TrendingCard = styled("div")({
  width: "100%",
  height: "30%",
  // border: "1px solid white",
  borderRadius: "50px",
  backgroundColor: "#111111",
  position: "relative",
  display: "flex",
  // flexDirection: "column",
  justifyContent: "space-around",
  alignItems: "center",
});
