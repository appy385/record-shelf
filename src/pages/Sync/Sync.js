import React from 'react';
import { Link } from 'react-router-dom';
import './Sync.scss';

const Sync = () => (
  <div className="sync-container">
    <span>:((</span>
    <span>Seems a bit empty in here...</span>
    <Link to="/songs"><button type="button" className="sync-button">Sync</button></Link>
  </div>
);

export default Sync;
