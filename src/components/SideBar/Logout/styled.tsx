import { styled } from "@mui/material";

export const LogoutButton = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
  width: "94%",
  marginBottom: "8px",
  padding: "3px",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: "rgba(0,0,0,0.05)",
  },
});

export const LogoutText = styled("p")({
  fontSize: "24px",
  fontWeight: "lighter",
  color: "white",
});
