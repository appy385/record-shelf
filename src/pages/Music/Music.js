import React, { useEffect, useState } from 'react';
import getSongs from '../../utils/api';
import './Music.scss';

const Music = () => {
  const [songs, setSongs] = useState([]);
  useEffect(async () => {
    const songList = await getSongs();
    console.log(songList.data);
    setSongs(songList.data);
  }, []);
  return (
    <div className="music-container">
      {songs.map((song) => (song.id))}
    </div>
  );
};

export default Music;
