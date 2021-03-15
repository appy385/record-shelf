import React, { useEffect, useState } from 'react';
import { getSongs } from '../../utils/api';
import Song from '../../components/Song/Song';
import './Music.scss';

const Music = () => {
  const [songs, setSongs] = useState([]);
  useEffect(async () => {
    const songList = await getSongs();
    setSongs(songList.data);
  }, []);
  return (
    <div className="music">
      <span className="music-allsongs">All Songs</span>
      <div className="music-container">
        {songs.map((song) => (<Song key={song.id} song={song} />))}
      </div>
    </div>
  );
};

export default Music;
