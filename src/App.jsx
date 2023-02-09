import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Game from './pages/Game';
import './App.css';
import Login from './pages/Login';

export default function App() {
  return (
    <Switch>
      <Route
        exact
        path="/game"
        render={ (props) => <Game { ...props } /> }
      />
      <Route exact path="/" render={ (props) => <Login { ...props } /> } />
    </Switch>
  );
}
