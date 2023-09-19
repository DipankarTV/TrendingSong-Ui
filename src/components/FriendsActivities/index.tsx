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
import { Typography } from "@mui/material";
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
interface MusicButton {
  img: string;
  func: (id: String) => void;
}
// let data: MusicButton[] = [
//   { img: shuffle, func: shuffleSong },
//   { img: left, func: nextLeft },
//   { img: "fd", func: nextRight },
//   { img: right, func: nextRight },
//   { img: circle, func: NextUndo },
// ];
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
  const [playing, setPlaying] = useState<string>("6");
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [progress, setProgress] = useState(0);
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

    if (randomElement === playing) {
      setPlaying(`${randomElement + 1}`);
      setPlay(false);
      setTimeout(() => {
        audioRef.current?.play();
        setPlay(true);
      }, 100);
    }
    setPlaying(`${randomElement}`);
    setPlay(false);
    setTimeout(() => {
      audioRef.current?.play();
      setPlay(true);
    }, 100);
  }

  function findNextAudioId(id: String) {
    for (let i = 0; i < audio.length; i++) {
      if (audio[i].id === id) {
        let nextIdx = i + 1;
        if (nextIdx >= audio.length) {
          nextIdx = 0;
        }
        return audio[nextIdx].id;
      }
    }
    return null;
  }

  function findPrevAudioId(id: String) {
    for (let i = 0; i < audio.length; i++) {
      if (audio[i].id === id) {
        let nextIdx = i - 1;
        if (nextIdx >= audio.length) {
          nextIdx = 0;
        }
        return audio[nextIdx].id;
      }
    }
    return null;
  }
  function nextRight(id: String) {
    const index = findNextAudioId(id);

    let newIdx = index;

    console.log(typeof newIdx, "new");

    setPlaying(`${newIdx}`);
    setPlay(false);
    setTimeout(() => {
      audioRef.current?.play();
      setPlay(true);
    }, 100);

    return index;
  }

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const currentTime = audioRef.current.currentTime;
      const duration = audioRef.current.duration;
      const progressPercentage = (currentTime / duration) * 100;
      setProgress(progressPercentage);
    }
  };
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.addEventListener("timeupdate", handleTimeUpdate);
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener("timeupdate", handleTimeUpdate);
      }
    };
  }, [play]);

  function NextUndo(id: String) {
    const index = audio.map((item) => {
      if (item.id === id) return audio.indexOf(item);
    });

    alert(index);
  }

  function nextLeft(id: String) {
    const index = findPrevAudioId(id);

    let newIdx = index;

    console.log(typeof newIdx, "new");

    setPlaying(`${newIdx}`);
    setPlay(false);
    setTimeout(() => {
      audioRef.current?.play();
      setPlay(true);
    }, 100);
  }
  function getSongById(id: string) {
    setPlaying(id);
  }

  const togglePlay = () => {
    if (audioRef.current?.paused) {
      audioRef.current.play();
    } else {
      audioRef.current?.pause();
    }
    setPlay(!video);
  };

  return (
    <>
      <SideBarLayout>
        <ActivityContainer>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              textAlign: "start",
              fontFamily: "Poppins",
              fontSize: "24px",
              lineHeight: "39px",
              letterSpacing: "0em",
              // border: "1px solid",
              display: "flex",
              flexDirection: "column",
            }}
          >
            Friend's Activity
            <Typography
              variant="h6"
              sx={{ fontSize: "10px" }}
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
        >
          See what songs your friends and followers are listening to.
        </Typography>
        <div
          style={{
            width: "100%",
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
                    fontFamily: "Poppins",
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
                    sx={{ fontSize: "12px" }}
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
          {audio.map((audio) => {
            if (audio.id === playing) {
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
              {audio.map((audio) => {
                if (audio.id === playing) {
                  return (
                    <Typography variant="h5" component={"span"}>
                      {audio.title}
                      <Typography
                        style={{
                          textAlign: "center",
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
              {audio.map((song) => {
                console.log(audio.length, "song");
                if (song.id === playing) {
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
                          position: "absolute",
                          top: "10px",
                          left: "10px",
                          display: "none",
                          color: "white",
                        }}
                      ></audio>
                      <ProgressBar>
                        <Progress
                          className="progress"
                          style={{ width: `${progress}%` }}
                        ></Progress>
                      </ProgressBar>
                    </>
                  );
                }
              })}
              <audio src="" />
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
                          // padding: "0.5em",
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
                    onClick={() => item.func(playing)}
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
