import { atom } from "recoil";

export const SongToPlayer = atom({
  key: "currentSong",
  default: {
    id: "1",
  },
});
