import { combineReducers } from "redux";

// Songs Reducer
const songsReducer = () => {
  return [
    {
      title: "Instant Crush",
      duration: "4:01",
      link: "https://music.youtube.com/watch?v=khnokW3Mw24&feature=gws_kp_track",
      image:
        "https://upload.wikimedia.org/wikipedia/en/a/a7/Daft_Punk_Instant_Crush.png",
    },
    {
      title: "Cheap Thrills",
      duration: "3:07",
      link: "https://music.youtube.com/watch?v=AUfALRGInd4&feature=gws_kp_track",
      image:
        "https://upload.wikimedia.org/wikipedia/en/f/fc/Sia_Cheap_Thrills.png",
    },
    {
      title: "Blinding Lights",
      duration: "2:11",
      link: "https://music.youtube.com/watch?v=J7p4bzqLvCw&feature=gws_kp_track",
      image:
        "https://upload.wikimedia.org/wikipedia/en/e/e6/The_Weeknd_-_Blinding_Lights.png",
    },
    {
      title: "New Light",
      duration: "4:31",
      link: "https://www.youtube.com/watch?v=OUoaojJSpK0",
      image:
        "https://upload.wikimedia.org/wikipedia/en/d/d1/JohnMayerNewLight.jpg",
    },
    {
      title: "In Your Eyes",
      duration: "3:34",
      link: "https://www.youtube.com/watch?v=E3QiD99jPAg",
      image:
        "https://upload.wikimedia.org/wikipedia/en/0/05/The_Weeknd_-_In_Your_Eyes_%28Kenny_G_Remix%29.png",
    },
  ];
};

// Selected Song Reducer
const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
