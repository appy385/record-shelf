import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Sync from '../pages/Sync/Sync';
import './App.scss';

const App = () => (
  <BrowserRouter>
    <div className="app-container">
      <Switch>
        <Route path="/"><Sync /></Route>
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
