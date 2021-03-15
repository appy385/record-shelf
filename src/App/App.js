import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Sync from '../pages/Sync/Sync';
import Music from '../pages/Music/Music';
import './App.scss';

const App = () => (
  <BrowserRouter>
    <div className="app-container">
      <Switch>
        <Route path="/songs"><Music /></Route>
        <Route path="/"><Sync /></Route>
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
