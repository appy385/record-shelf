import React, { useEffect, useState } from 'react';
import { getSongs } from '../../utils/api';
import Song from '../../components/Song/Song';
import iconGenre from '../../assets/icon-genre.svg';
import iconGrid from '../../assets/icon-grid.svg';
import './Music.scss';
import groupByGenre from '../../utils/helper';
import Genre from '../../components/Genre/Genre';

const Music = () => {
  const [songs, setSongs] = useState([]);
  const [genreSongs, setGenreSongs] = useState({});
  const [isGenre, setIsGenre] = useState(false);
  useEffect(async () => {
    const songList = await getSongs();
    const newGenreSongs = groupByGenre(songList.data);
    setGenreSongs(newGenreSongs);
    setSongs(songList.data);
  }, []);
  const toggle = () => {
    setIsGenre(!isGenre);
  };
  return (
    <div className="music">
      {(isGenre) ? (
        <>
          <div className="music-header-container">
            <span className="music-header-message">Genre</span>
            <input type="image" className="music-toggle-button" onClick={toggle} src={iconGrid} alt="text" />
          </div>
          <div className="music-container">
            <Genre genreSongs={genreSongs} />
          </div>
        </>
      )
        : (
          <>
            <div className="music-header-container">
              <span className="music-header-message">All Songs</span>
              <input type="image" className="music-toggle-button" onClick={toggle} src={iconGenre} alt="text" />
            </div>
            <div className="music-container">
              {songs.map((song) => (<Song key={song.id} song={song} />))}
            </div>
          </>
        )}

    </div>
  );
};

export default Music;
