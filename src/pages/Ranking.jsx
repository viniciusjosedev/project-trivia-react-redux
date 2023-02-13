import React, { Component } from 'react';
import { Redirect } from 'react-router';

class GoHome extends Component {
  constructor(args) {
    super(args);
    this.state = {
      redirect: false,
    };
  }

  chamaLogin = () => {
    this.setState({
      redirect: true,
    });
  };

  render() {
    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to="/" />;
    }

    return (
      <>
        <h1 data-testid="settings-title">Configurações</h1>
        <button
          type="button"
          data-testid="btn-go-home"
          onClick={ () => this.chamaLogin() }
        >
          voltar para Login
        </button>
      </>
    );
  }
}
export default GoHome;
