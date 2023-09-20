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
import { SongToPlayer } from "../../recoil/atom";

import { useRecoilState, useRecoilValue } from "recoil";

import holdMeCLose from "../audio/mylist/songs/Hold Me Close.mp3";
import chanKithan from "../audio/mylist/songs/Chan Kithan  Ali Sethi (Official Music Video).mp3";
import chaleHiJanaTha from "../audio/mylist/songs/Baahon Men Chale Aao 4K - Lata Mangeshkar Romantic Song - Sanjeev Kumar, Jaya Bachchan - Anamika.mp3";
import gonegonegone from "../audio/mylist/songs/Phillip Phillips - Gone, Gone, Gone.mp3";
import lavienORse from "../audio/mylist/songs/Emily Watts - La Vie En Rose (Lyrics)  Hold me close and hold me fast.mp3";
import heather from "../audio/mylist/songs/Conan Gray - Heather.mp3";

import holdme from "../audio/mylist/songs/img/holdmeclose.jpg";
import chan from "../audio/mylist/songs/img/chan kitthan.jpg";
import bahon from "../audio/mylist/songs/img/bahon mein chali aa.jpg";
import lavien from "../audio/mylist/songs/img/la-vien.jpg";
import ggg from "../audio/mylist/songs/img/gonegone.jpg";
import heatherImg from "../audio/mylist/songs/img/Heatherposter.jpg";

const songs = [
  {
    title: "Hold Me Close",
    artist: "Madds Buckley",
    artwork: holdme,
    url: holdMeCLose,
    id: "1",
  },
  {
    title: "Chan Kithan",
    artist: "Ali sethi",
    artwork: chan,
    url: chanKithan,
    id: "2",
  },
  {
    title: "Baahon Men Chale Aao",
    artist: "Lata Mangeshkar",
    artwork: bahon,
    url: chaleHiJanaTha,
    id: "3",
  },
  {
    title: "Gone Gone Gone",
    artist: "Phillip Phillips",
    artwork: ggg,
    url: gonegonegone,
    id: "4",
  },
  {
    title: "La Vie En Rose",
    artist: "Emily Watts",
    artwork: lavien,
    url: lavienORse,
    id: "5",
  },
  {
    title: "Heather",
    artist: "Conan Gray",
    artwork: heather,
    url: lavienORse,
    id: "6",
  },
];

const trendingSongs = [...songs.slice(3, 5)];
const Recently = [...songs.slice(0, 3)];

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

import { audio1 } from "../audio/audio2";

const Popular = () => {
  const [video, setPlay] = useState<boolean>(false);
  const [, setPlayThis] = useRecoilState(SongToPlayer);
  const songId = useRecoilValue(SongToPlayer);

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
                fontFamily: "Poppins, sans-serif",
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
                fontFamily: "Poppins, sans-serif",
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
              // border: "1px solid white",
              gap: "2em",
              height: "35vh",
            }}
          >
            {Recently.map((artist) => (
              <MusicCard key={artist.id}>
                <div
                  style={{
                    height: "30vh",
                    // border: "1px solid white",
                  }}
                >
                  <img
                    src={artist.artwork}
                    alt=""
                    style={{
                      height: "286px",
                      borderRadius: "35px",
                      // border: "1px solid white",
                    }}
                    onClick={() => {
                      setPlayThis({ id: artist.id });
                    }}
                  />
                </div>
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
                      fontFamily: "Poppins, sans-serif",
                    }}
                  >
                    {artist.title}
                    <Typography
                      sx={{
                        fontSize: "12pxm",
                        fontFamily: "Poppins, sans-serif",
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
              {trendingSongs.map((audio) => {
                return (
                  <TrendingCard key={audio.id}>
                    <img
                      src={audio.artwork}
                      alt=""
                      style={{
                        width: "100px",
                        height: "100px",
                        top: "-20px",
                        left: "-30px",
                        borderRadius: "50%",
                        position: "absolute",
                      }}
                      onClick={() => {
                        setPlayThis({ id: audio.id });
                      }}
                    />
                    <Typography
                      sx={{
                        fontSize: "20pxm",
                        fontWeight: "bold",
                        marginLeft: "6em",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        fontFamily: "Poppins, sans-serif",
                      }}
                    >
                      {audio.title}
                      <Typography
                        sx={{
                          fontSize: "12px",
                          fontWeight: "bold",
                          display: "flex",
                          width: "100%",
                          justifyContent: "start",
                          fontFamily: "Poppins, sans-serif",
                        }}
                      >
                        {audio.artist}
                      </Typography>
                    </Typography>
                    <img src={wave} alt="" />
                    <div
                      onClick={(e) => {
                        setPlay(!video);
                        setPlayThis({ id: audio.id });
                        e.preventDefault();
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
                        }}
                      />
                    </div>
                  </TrendingCard>
                );
              })}
            </TrendingCardContainer>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default Popular;
