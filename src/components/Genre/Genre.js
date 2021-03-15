import React from 'react';
import PropTypes from 'prop-types';
import './Genre.scss';
import Song from '../Song/Song';
import Bollywood from '../../assets/genre-bollywood.png';
import Country from '../../assets/genre-country.png';
import Pop from '../../assets/genre-pop.png';
import Rock from '../../assets/genre-rock.png';

const Genre = ({ genreSongs, handleLike }) => {
  const renderSwitch = (param) => {
    switch (param) {
      case 'Bollywood': return (
        <div className="genre-image-container">
          <img className="genre-image" src={Bollywood} alt="song" />
          <div className="genre-image-name">{`${param}`}</div>
        </div>
      );
      case 'Country': return (
        <div className="genre-image-container">
          <img className="genre-image" src={Country} alt="song" />
          <div className="genre-image-name">{`${param}`}</div>
        </div>
      );
      case 'Pop': return (
        <div className="genre-image-container">
          <img className="genre-image" src={Pop} alt="song" />
          <div className="genre-image-name">{`${param}`}</div>
        </div>
      );
      case 'Rock': return (
        <div className="genre-image-container">
          <img className="genre-image" src={Rock} alt="song" />
          <div className="genre-image-name">{`${param}`}</div>
        </div>
      );
      default: return (
        <div className="genre-image-container">
          <img className="genre-image" src={Country} alt="song" />
          <div className="genre-image-name">{`${param}`}</div>
        </div>
      );
    }
  };

  return (
    <>
      {Object.keys(genreSongs).map((genre) => (
        <React.Fragment key={genre}>
          <div className="genre-category">
            {renderSwitch(genre)}
            <div className="genre-row" data-testid="genre-row">
              {genreSongs[genre].map((song) => (
                <Song key={song.id} song={song} handleLike={handleLike} />))}
            </div>
          </div>
        </React.Fragment>
      ))}
    </>
  );
};

const songShape = PropTypes.shape({
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
});

Genre.propTypes = {
  genreSongs: PropTypes.objectOf(PropTypes.arrayOf(songShape)).isRequired,
  handleLike: PropTypes.func.isRequired,

};

export default Genre;
