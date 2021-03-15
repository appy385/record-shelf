import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Sync from '../pages/Sync/Sync';
import Music from '../pages/Music/Music';
import Header from '../components/Header/Header';
import './App.scss';

const App = () => (
  <BrowserRouter>
    <div className="app-container">
      <Header />
      <Switch>
        <Route path="/songs"><Music /></Route>
        <Route path="/"><Sync /></Route>
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
