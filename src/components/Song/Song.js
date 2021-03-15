import React from 'react';
import PropTypes from 'prop-types';
import './Song.scss';
import heartGray from '../../assets/heart-gray.svg';
import heartRed from '../../assets/heart-red.svg';

const Song = ({ song, handleLike }) => (
  <div className="song-card" data-testid="song-card">
    <img className="song-image" src={song.albumArtUrl} alt="song" />
    <div className="song-container">
      <div>
        <div className="song-name">{song.name}</div>
        <div className="song-artist">{song.artist.name}</div>
      </div>
      <div className="song-image-container">
        {(song.like) ? <input type="image" className="song-heart-button" src={heartRed} alt="text" onClick={() => handleLike(song.id, !song.like)} />
          : <input type="image" className="song-heart-button" src={heartGray} alt="text" onClick={() => handleLike(song.id, !song.like)} />}
        <div className="song-likes">
          <span className="song-like-count">{song.count}</span>
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
    count: PropTypes.number.isRequired,
    like: PropTypes.bool.isRequired,
  }).isRequired,
  handleLike: PropTypes.func.isRequired,

};

export default Song;
