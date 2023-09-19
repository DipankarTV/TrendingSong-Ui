import React, { useState } from "react";
import { Typography } from "@mui/material";
import {
  PopularText,
  ArtistContainer,
  ArtistContainerCircle,
  TextField,
  MusicCard,
  RecentlyPlayedCard,
  AudioCard,
  TrendingCardContainer,
  TrendingCard,
} from "./styled";
import { Button, Grid } from "@mui/material";
import Jasleen from "../../assets/Rectangle 5.png";
import img1 from "../../assets/Rectangle 6.png";
import img2 from "../../assets/Rectangle 7.png";
import img3 from "../../assets/Ellipse 4.png";
import play from "../../assets/playButton.png";
import ar2 from "../../assets/Ellipse 5.png";
import ar3 from "../../assets/Ellipse 6.png";
import ar4 from "../../assets/Ellipse 7.png";
import ar5 from "../../assets/Ellipse 8.png";
import ar6 from "../../assets/Ellipse 9.png";
import heart from "../../assets/heart.svg";
import wave from "../../assets/waves.svg";
import pause from "../../assets/pause.png";
import playy from "../../assets/playy.png";

const PopularArtists = [
  {
    id: 1,
    name: "Arjit Chauhan",
    url: ar2,
  },
  {
    id: 2,
    name: "Sunidhi Sharma",
    url: img3,
  },
  {
    id: 3,
    name: "Enrique Nath",
    url: ar3,
  },
  {
    id: 4,
    name: "Rushidi Goswami",
    url: ar4,
  },
  {
    id: 5,
    name: "Amanda khan",
    url: ar5,
  },
  {
    id: 6,
    name: "Akash Hayden",
    url: ar6,
  },
];

const TrendySongs = [
  {
    id: 1,
    name: "Nit Nit",
    Artist: "Jasleen Royal",
    img: Jasleen,
  },
  {
    id: 2,
    name: "Perfect",
    Artist: "One Direction",
    img: img1,
  },
  {
    id: 3,
    name: "The Book of you",
    Artist: "Alec benjamin",
    img: img2,
  },
];

import { audio } from "../audio/audioEnglish";

// console.log(audio);

const Popular = () => {
  const [video, setPlay] = useState<boolean>(false);

  return (
    <>
      <Grid container direction={"column"} spacing={2} sx={{}}>
        <Grid item xs={4}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <PopularText>Popular artists</PopularText>
            <button
              style={{
                boxShadow: "none",
                border: "none",
                background: "none",
                paddingRight: "60px",
              }}
            >
              View all
            </button>
          </div>
          <ArtistContainer>
            {PopularArtists.map((artist) => (
              <ArtistContainerCircle key={artist.id}>
                <img
                  src={artist.url}
                  alt=""
                  style={{
                    width: "101px",
                    height: "101px",
                    borderRadius: "50%",
                  }}
                />
                <TextField>{artist.name}</TextField>
              </ArtistContainerCircle>
            ))}
          </ArtistContainer>
        </Grid>
        <Grid item xs={5}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <PopularText>Popular artists</PopularText>
            <button
              style={{
                boxShadow: "none",
                border: "none",
                background: "none",
                paddingRight: "60px",
              }}
            >
              View all
            </button>
          </div>
          <div
            style={{
              width: "96%",
              display: "flex",
              justifyContent: "start",
              gap: "2em",
            }}
          >
            {audio.splice(1, 3).map((artist) => (
              <MusicCard key={artist.id}>
                <img
                  src={artist.artwork}
                  alt=""
                  style={{
                    height: "286px",
                    borderRadius: "35px",
                    border: "1px solid white",
                  }}
                  onClick={() => {
                    console.log(artist.artwork);
                  }}
                />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "1em",
                    padding: "10px",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "20pxm",
                    }}
                  >
                    {artist.title}
                    <Typography
                      sx={{
                        fontSize: "12pxm",
                      }}
                    >
                      {artist.artist}
                    </Typography>
                  </Typography>
                  <img
                    src={heart}
                    alt=""
                    style={{
                      width: "40px",
                      height: "40px",
                    }}
                  />
                </div>
              </MusicCard>
            ))}
          </div>
        </Grid>
        <Grid item xs={3}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <PopularText>Recently Played</PopularText>
            <button
              style={{
                boxShadow: "none",
                border: "none",
                background: "none",
                paddingRight: "60px",
              }}
            >
              View all
            </button>
          </div>
          <div
            style={{
              width: "94%",
              display: "flex",
              // flexDirection: "column",
              // border: "1px solid white",
            }}
          >
            <RecentlyPlayedCard>
              <img
                src={Jasleen}
                alt=""
                style={{
                  display: "block",
                  width: "14em",
                  height: "16em",
                  padding: "none",
                  margin: "none",
                }}
              />
              <AudioCard>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    paddingLeft: "10px",

                    // border: "1px solid black",
                  }}
                >
                  <Typography
                    variant="h6"
                    component={"span"}
                    sx={{ width: "3em", fontSize: "14px", display: "flex" }}
                  >
                    Nit-Nit
                  </Typography>
                  <Typography
                    variant="h6"
                    component={"span"}
                    sx={{ width: "8em", fontSize: "10px", display: "flex" }}
                  >
                    Jasleen Royal
                  </Typography>
                </div>
                <img
                  src={play}
                  alt=""
                  style={{
                    height: "5em",
                    marginTop: "10px",
                    // marginLEft: "30px",
                  }}
                />
              </AudioCard>
            </RecentlyPlayedCard>
            <TrendingCardContainer
              style={{
                height: "24vh",
                width: "100%",
                flex: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                alignItems: "center",
                paddingLeft: "2em",
              }}
            >
              <TrendingCard>
                <img
                  src={img2}
                  alt=""
                  style={{
                    width: "130px",
                    height: "120px",
                    top: "-20px",
                    left: "-30px",
                    borderRadius: "50%",
                    position: "absolute",
                  }}
                />
                <Typography
                  sx={{
                    fontSize: "20pxm",
                    fontWeight: "bold",
                    marginLeft: "8em",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  The Book of you
                  <Typography
                    sx={{
                      fontSize: "12px",
                      fontWeight: "bold",
                      display: "flex",
                      width: "100%",
                      justifyContent: "start",
                      // alignItems: "center",
                    }}
                  >
                    Alec benjamin
                  </Typography>
                </Typography>
                <img src={wave} alt="" />
                <div
                  onClick={() => {
                    setPlay(!video);
                  }}
                  style={{
                    borderRadius: "50px",
                    height: "35px",
                    width: "35px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    // backgroundColor: "rgba(229, 252, 150, 0.",
                    backgroundColor: "rgb(184,81,22)",
                    background:
                      "linear-gradient(180deg, rgba(184,81,22,1) 4%, rgba(121,9,104,1) 48%, rgba(175,21,241,1) 100%)",
                  }}
                >
                  <img
                    src={video ? pause : playy}
                    alt="img"
                    style={{
                      height: "12px",
                      width: "12px",
                      // padding: "0.5em",
                    }}
                  />
                </div>
              </TrendingCard>

              <TrendingCard>
                <img
                  src={img1}
                  alt=""
                  style={{
                    width: "130px",
                    height: "120px",
                    top: "-20px",
                    left: "-30px",
                    borderRadius: "50%",
                    position: "absolute",
                  }}
                />
                <Typography
                  sx={{
                    fontSize: "20pxm",
                    fontWeight: "bold",
                    marginLeft: "8em",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  Night Changes
                  <Typography
                    sx={{
                      fontSize: "12px",
                      fontWeight: "bold",
                      display: "flex",
                      width: "100%",
                      justifyContent: "start",
                      // alignItems: "center",
                    }}
                  >
                    One Direction
                  </Typography>
                </Typography>
                <img src={wave} alt="" />
                <div
                  onClick={() => {
                    setPlay(!video);
                  }}
                  style={{
                    borderRadius: "50px",
                    height: "35px",
                    width: "35px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    // backgroundColor: "rgba(229, 252, 150, 0.",
                    backgroundColor: "rgb(184,81,22)",
                    background:
                      "linear-gradient(180deg, rgba(184,81,22,1) 4%, rgba(121,9,104,1) 48%, rgba(175,21,241,1) 100%)",
                  }}
                >
                  <img
                    src={video ? pause : playy}
                    alt="img"
                    style={{
                      height: "12px",
                      width: "12px",
                      // padding: "0.5em",
                    }}
                  />
                </div>
              </TrendingCard>
            </TrendingCardContainer>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default Popular;
