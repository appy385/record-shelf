import React, { useEffect, useState } from 'react';
import { getSongs, getLikes, updateLike } from '../../utils/api';
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
    const newSongList = await Promise.all(songList.data.map(async (song) => {
      const response = await getLikes(song.id);
      return {
        ...song,
        like: response.data.like,
        count: response.data.count,
      };
    }));
    const newGenreSongs = groupByGenre(newSongList);
    setGenreSongs(newGenreSongs);
    setSongs(newSongList);
  }, []);

  const handleLike = async (id, value) => {
    await updateLike(id, value);
    const newSongs = songs.map((song) => ({
      ...song,
      like: (song.id === id) ? value : song.like,
      count: ((song.id !== id) ? song.count
        : ((song.id === id && value)
          ? song.count + 1 : song.count - 1)),

    }));
    const newGenreSongs = groupByGenre(newSongs);
    setGenreSongs(newGenreSongs);
    setSongs(newSongs);
  };

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
            <Genre genreSongs={genreSongs} handleLike={handleLike} />
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
              {songs.map((song) => (<Song key={song.id} song={song} handleLike={handleLike} />))}
            </div>
          </>
        )}

    </div>
  );
};

export default Music;
