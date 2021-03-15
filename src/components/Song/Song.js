import React from 'react';
import PropTypes from 'prop-types';
import './Song.scss';
import heartGray from '../../assets/heart-gray.svg';

const Song = ({ song }) => (
  <div className="song-card" data-testid="song-card">
    <img className="song-image" src={song.albumArtUrl} alt="song" />
    <div className="song-container">
      <div>
        <div className="song-name">{song.name}</div>
        <div className="song-artist">{song.artist.name}</div>
      </div>
      <div className="song-image-container">
        <input type="image" className="song-heart-button" src={heartGray} alt="text" />
        <div className="song-likes">
          <span className="song-like-count">0</span>
        </div>
      </div>
    </div>
  </div>
);

Song.propTypes = {
  song: PropTypes.shape({
    id: PropTypes.string.isRequired,
    albumArtUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    artist: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
    genre: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
    publishedAt: PropTypes.string.isRequired,
  }).isRequired,

};

export default Song;
