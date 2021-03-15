import React from 'react';

const groupByGenre = (songs) => songs.reduce((acc, song) => {
  const newSong = {
    ...song,
  };
  const { genre } = newSong;
  if (!acc[genre.name]) {
    acc[genre.name] = [];
  }
  acc[genre.name].push(newSong);
  return acc;
}, {});

export default groupByGenre;
