import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Game from './pages/Game';
import Configuration from './pages/Configuration';
import Login from './pages/Login';
import Feedback from './pages/Feedback';
import Ranking from './pages/Ranking';

export default function App() {
  return (
    <Switch>
      <Route
        exact
        path="/ranking"
        render={ (props) => <Ranking { ...props } /> }
      />
      <Route
        exact
        path="/feedbacks"
        render={ (props) => <Feedback { ...props } /> }
      />
      <Route
        exact
        path="/game"
        render={ (props) => <Game { ...props } /> }
      />
      <Route
        exact
        path="/configuracao"
        render={ (props) => <Configuration { ...props } /> }
      />
      <Route exact path="/" render={ (props) => <Login { ...props } /> } />
    </Switch>
  );
}
