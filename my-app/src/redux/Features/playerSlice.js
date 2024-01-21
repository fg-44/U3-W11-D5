import { createSlice } from "@reduxjs/toolkit";

const initialstate = {
  currentSongs: [],
  currentIndex: 0,
  isActive: false,
  isPlaying: false,
  activeSong: {},
  genreListId: "",
};

const playerslice = createSlice({
  name: "player",
  initialstate,
  reducers: {
    setActiveSong: (state, action) => {
      state.activesong = action.payload.song;

      if (action.payload?.data?.tracks?.hits) {
        state.currentSongs = action.payload.data.tracks.hits;
      } else if (action.payload?.data?.properties) {
        state.currentSongs = action.payload?.data?.tracks;
      } else {
        state.currentSongs = action.payload.data;
      }
      state.currentIndex = action.payload.i;
      state.isActive = true;
    },

    prevSong: (state, action) => {
      if (state.currentSongs[action.payload]?.track) {
        state.activesong = state.currentSongs[action.payload]?.track;
      } else {
        state.activesong = state.currentSongs[action.payload];
      }
      state.currentIndex = action.payload;
      state.isActive = true;
    },
    playPause: (state, action) => {
      state.isPlaying = action.payload;
    },
    selectGenreListId: (state, action) => {
      state.genreListId = action.payload;
    },
  },
});

export const {
  setActivesong,
  nextsong,
  prevsong,
  playPause,
  selectGenreListId,
} = playerslice.actions;

export default playerslice.reducer;
