import React, { Component } from 'react';
import GoHome from './Ranking';

class Configuration extends Component {
  render() {
    return (
      <>
        <GoHome />
        <h1 data-testid="settings-title">Configurações</h1>
      </>
    );
  }
}

export default Configuration;
