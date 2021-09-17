import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ song }) => {
  if (!song) {
    return <div>Select a song 🎶</div>;
  }
  return (
    <div>
      <h3>Details for:</h3>
      <p>
        Title: {song.title}
        <br />
        Duration: {song.duration}
      </p>
      <br />
      <img
        style={{ cursor: "pointer" }}
        src={song.image}
        alt={song.title}
        onClick={() => window.open(song.link)}
      />
    </div>
  );
};

const mapStateToProps = ({ selectedSong }) => {
  return {
    song: selectedSong,
  };
};

export default connect(mapStateToProps)(SongDetail);
