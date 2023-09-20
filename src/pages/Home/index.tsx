import { Container } from "@mui/material";
import React from "react";
import { LayoutStyled } from "../../components/Layout/index";
import LogoutContainer from "../../components/SideBar/Logout";
import SideBar from "../../components/SideBar";
import { Grid } from "@mui/material";
import NavBar from "../../components/Navbar/index";
import Popular from "../../components/Home-Page/index";
import FriendsActivity from "../../components/FriendsActivities";

const Home = () => {
  return (
    <LayoutStyled>
      <Grid container spacing={2} sx={{ width: "100vw" }}>
        <Grid item xs={2}>
          <SideBar />
        </Grid>
        <Grid item sx={{}} xs={6.8}>
          <NavBar />
          <Popular />
        </Grid>
        <Grid item xs={3.2}>
          <FriendsActivity />
        </Grid>
      </Grid>
    </LayoutStyled>
  );
};

export default Home;
