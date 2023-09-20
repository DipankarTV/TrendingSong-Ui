import React, { useState, useEffect, useRef } from "react";
import { audio } from "../audio/audioEnglish";
import {
  ActivityContainer,
  FriendsLIst,
  MainPlayer,
  SideBarLayout,
  ProgressBar,
  Progress,
} from "./styles";
import { Box, Typography } from "@mui/material";
import GroupsIcon from "@mui/icons-material/Groups";
import f1 from "../../assets/Ellipse 15.svg";
import f2 from "../../assets/Ellipse 23.svg";
import f3 from "../../assets/Ellipse 24.png";
import music from "../../assets/Music.png";
import player2 from "../../assets/Rectangle 11.svg";
import player from "../../assets/rinki.jpg";
import shuffle from "../../assets/Vector.png";
import left from "../../assets/Vector (1).png";
import right from "../../assets/Vector (2).png";
import circle from "../../assets/Vector (3).png";
import undo from "../../assets/Ellipse 27.svg";
import pause from "../../assets/pause.png";
import play from "../../assets/playy.png";
import { SongToPlayer } from "../../recoil/atom";

import { useRecoilState, useRecoilValue } from "recoil";

// import { songs } from "../audio/mylist/mylistofssomng";

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

interface MusicButton {
  img: string;
  func: (id: String) => void;
}

const FriendsSong = [
  {
    id: 1,
    Name: "Martha",
    artist: "Artist 1",
    album: "Coldbeat",
    url: f1,
  },
  {
    id: 2,
    Name: "Jhon",
    artist: "Artist 2",
    album: "living",
    url: f2,
  },
  {
    id: 3,
    Name: "ALice",
    artist: "Artist 3",
    album: "coldplay",
    url: f3,
  },
];
interface ISongs {
  id: string;
  // Name: string;
  // artist: string;
  // album: string;
  // url: string;
}

const FriendsActivity = () => {
  const [video, setPlay] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [progress, setProgress] = useState(0);
  const [durationn, setDuration] = useState(0);
  const [currentTimee, setCurrentTime] = useState(
    audioRef.current?.currentTime
  );
  const [, setPlayThis] = useRecoilState(SongToPlayer);
  const songId = useRecoilValue(SongToPlayer);
  console.log(audio, "audio song");
  let data: MusicButton[] = [
    { img: shuffle, func: shuffleSong },
    { img: left, func: nextLeft },
    { img: "fd", func: nextRight },
    { img: right, func: nextRight },
    { img: circle, func: NextUndo },
  ];
  function shuffleSong(id: String) {
    let arr = ["1", "5", "6"];
    function getRandomFromArray(arr: string[]) {
      const randomIndex = Math.floor(Math.random() * arr.length);
      return arr[randomIndex];
    }
    const randomElement = getRandomFromArray(arr);

    if (randomElement === songId.id) {
      setPlayThis({ id: `${randomElement + 1}` });
      setPlay(false);
      setTimeout(() => {
        audioRef.current?.play();
        setPlay(true);
      }, 100);
    }
    setPlayThis({ id: `${randomElement}` });
    setPlay(false);
    setTimeout(() => {
      audioRef.current?.play();
      setPlay(true);
    }, 100);
  }

  function findNextAudioId(id: String) {
    for (let i = 0; i < songs.length; i++) {
      if (songs[i].id === id) {
        let nextIdx = i + 1;
        if (nextIdx >= songs.length) {
          nextIdx = 0;
        }
        return songs[nextIdx].id;
      }
    }
    return null;
  }

  function findPrevAudioId(id: String) {
    for (let i = 0; i < songs.length; i++) {
      if (songs[i].id === id) {
        let nextIdx = i - 1;
        if (nextIdx >= songs.length) {
          nextIdx = 0;
        }
        return songs[nextIdx].id;
      }
    }
    return null;
  }
  function nextRight(id: String) {
    const index = findNextAudioId(id);

    let newIdx = index;

    console.log(typeof newIdx, "new");

    setPlayThis({ id: `${newIdx}` });
    setPlay(false);
    setTimeout(() => {
      audioRef.current?.play();
      setPlay(true);
    }, 100);

    return index;
  }

  function ToMinutes(data: number) {
    const durationInSeconds = (data / 60).toFixed(2);
    return durationInSeconds;
  }
  function handleTimeUpdate() {
    if (audioRef.current) {
      const currentTime = audioRef.current.currentTime;
      const duration = audioRef.current.duration;
      const progressPercentage = (currentTime / duration) * 100;
      console.log(audioRef.current.currentTime, "1data");
      console.log(currentTime, "newTime");
      setProgress(progressPercentage);
      console.log(`${progress}%`, "progressPercentage");
    }
  }

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.addEventListener("timeupdate", handleTimeUpdate);
      let durationInSeconds = ToMinutes(audioRef.current.duration);
      let currentPlayingTIme = ToMinutes(audioRef.current.currentTime);
      setDuration(parseFloat(durationInSeconds));
      setCurrentTime(parseFloat(currentPlayingTIme));
    }

    return () => {
      if (audioRef.current?.currentTime) {
      }
    };
  }, [play, audioRef.current?.currentTime]);

  console.log(songId.id, "id");

  function NextUndo(id: String) {
    const index = songs.map((item) => {
      if (item.id === id) return songs.indexOf(item);
    });

    alert(index);
  }

  function nextLeft(id: String) {
    const index = findPrevAudioId(id);

    let newIdx = index;

    console.log(typeof newIdx, "new");

    setPlayThis({ id: `${newIdx}` });
    setPlay(false);
    setTimeout(() => {
      audioRef.current?.play();
      setPlay(true);
    }, 100);
  }

  const togglePlay = () => {
    if (audioRef.current?.paused) {
      audioRef.current.play();
    } else {
      audioRef.current?.pause();
    }
    setPlay(!video);
  };

  function SetProgressOnClick(event: any) {
    const timeline = event.currentTarget;
    const clickX = event.clientX - timeline.getBoundingClientRect().left;
    const timelineWidth = timeline.offsetWidth;
    const clickPercentage = (clickX / timelineWidth) * 100;

    const newTime = (clickPercentage / 100) * (audioRef.current?.duration || 0);

    if (audioRef.current) {
      // Check if audio is paused before setting new time
      const wasPaused = audioRef.current.paused;
      audioRef.current.currentTime = newTime;

      // Resume playback if it was paused
      if (!wasPaused) {
        audioRef.current.play();
      }
    }
  }

  return (
    <>
      <SideBarLayout>
        <ActivityContainer>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              textAlign: "start",
              fontSize: "24px",
              lineHeight: "39px",
              letterSpacing: "0em",
              // border: "1px solid",
              display: "flex",
              flexDirection: "column",
              fontFamily: "Poppins, sans-serif",
            }}
          >
            Friend's Activity
            <Typography
              variant="h6"
              sx={{ fontSize: "14px", fontFamily: "Poppins, sans-serif" }}
              color={"white"}
              component={"span"}
            >
              150 friends
            </Typography>
          </Typography>
          <GroupsIcon />
        </ActivityContainer>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 600,
            textAlign: "start",
            fontFamily: "Poppins",
            fontSize: "18px",
            lineHeight: "39px",
            letterSpacing: "0em",
            padding: "18px",
            display: "flex",
            flexDirection: "column",
            // width: "23em",
          }}
          color={"white"}
          component={"span"}
          style={{
            fontFamily: "Poppins, sans-serif",
          }}
        >
          See what songs your friends and followers are listening to.
        </Typography>
        <div
          style={{
            width: "100%",
            fontFamily: "Poppins, sans-serif",
            // marginTop: "0.5em",
            // marginBottom: "0.5em",
          }}
        >
          {FriendsSong.map((friend) => {
            return (
              <FriendsLIst key={friend.id}>
                <img
                  src={friend.url}
                  alt="img"
                  style={{
                    width: "78px",
                    height: "78px",
                    top: "316px",
                    left: "1284px",
                  }}
                />
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "22px",
                    fontWeight: "500",
                    lineHeight: "33px",
                    letterSpacing: "0em",
                    textAlign: "left",

                    flex: 1,
                    // border: "1px solid white",
                    padding: "10px",
                    display: "flex",
                    flexDirection: "column",
                  }}
                  color={"white"}
                  component={"span"}
                >
                  {friend.Name}
                  <Typography
                    variant="h6"
                    sx={{ fontSize: "12px", fontFamily: "Poppins, sans-serif" }}
                    color={"white"}
                    component={"span"}
                  >
                    Listening to {friend.album}
                  </Typography>
                </Typography>
                <img src={music} alt="img" style={{ height: "40px" }} />
              </FriendsLIst>
            );
          })}
          <Typography
            sx={{
              display: "flex",
              justifyContent: "end",
              fontFamily: "Poppins, sans-serif",
              // border: "1px solid white",
              width: "100%",
            }}
          >
            {" "}
            See 10 others &#62;
          </Typography>
        </div>
        <div
          style={{
            // border: " 1px solid white",
            width: "100%",
            height: "47vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {songs.map((audio) => {
            if (audio.id === songId.id) {
              console.log(audio.artwork, "art");
              return (
                <img
                  src={audio.artwork}
                  alt="img"
                  style={{
                    height: "407px",
                    width: "460px",
                    padding: "1em",
                    borderRadius: "50px",
                    // border: "1px solid white",
                  }}
                />
              );
            }
          })}

          <MainPlayer>
            <div
              style={{
                // border: " 1px solid red",
                width: "96%",
                height: "6vh",
                display: "flex",
                justifyContent: "center",
              }}
            >
              {songs.map((audio) => {
                if (audio.id === songId.id) {
                  return (
                    <Typography
                      variant="h5"
                      style={{
                        fontFamily: "Poppins, sans-serif",
                      }}
                      component={"span"}
                    >
                      {audio.title}
                      <Typography
                        style={{
                          textAlign: "center",
                          fontFamily: "Poppins, sans-serif",
                        }}
                      >
                        {audio.artist}
                      </Typography>
                    </Typography>
                  );
                }
              })}
            </div>
            <div
              style={{
                // border: " 1px solid white",
                width: "96%",
                height: "5vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                // background: "white",
              }}
            >
              {songs.map((song) => {
                console.log(audio.length, "song");
                if (song.id === songId.id) {
                  console.log(song, "playing");
                  return (
                    <>
                      <audio
                        ref={audioRef}
                        controls
                        src={song.url}
                        style={{
                          width: "10vw",
                          height: "10vh",
                          background: "white",
                          borderRadius: "50px",
                          // position: "absolute",
                          top: "10px",
                          left: "10px",
                          display: "none",
                          color: "white",
                        }}
                      ></audio>
                      <Box
                        onClick={(event: any) => {
                          SetProgressOnClick(event);
                        }}
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                          width: "100%",
                        }}
                      >
                        <ProgressBar id="progess-bar">
                          <Progress
                            id="progress"
                            style={{ width: `${progress}%` }}
                          ></Progress>
                        </ProgressBar>
                        <div
                          style={{
                            width: "90%",
                            display: "flex",
                            height: "30px",
                            fontSize: "14px",
                            justifyContent: "space-between",
                            gap: 2,
                            fontFamily: "Poppins, sans-serif",
                          }}
                        >
                          <span>{currentTimee}</span>
                          {durationn && durationn}
                        </div>
                      </Box>
                    </>
                  );
                }
              })}
              {/* <audio src="" /> */}
            </div>
            <div
              style={{
                // border: " 1px solid red",
                width: "96%",
                height: "5vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "1em",
                cursor: "pointer",
                fontFamily: "Poppins, sans-serif",
              }}
            >
              {data.map((item) => {
                if (data.indexOf(item) === 2) {
                  return (
                    <div
                      onClick={() => {
                        togglePlay();
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
                        src={video ? pause : play}
                        alt="img"
                        style={{
                          height: "12px",
                          width: "12px",
                        }}
                      />
                    </div>
                  );
                }
                return (
                  <img
                    src={item.img}
                    alt="img"
                    style={{
                      width: "30px",
                      height: "30px",
                      top: "316px",
                      left: "1284px",
                    }}
                    onClick={() => item.func(songId.id)}
                  />
                );
              })}
            </div>
          </MainPlayer>
        </div>
      </SideBarLayout>
    </>
  );
};

export default FriendsActivity;
