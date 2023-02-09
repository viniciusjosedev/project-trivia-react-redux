import React, { Component } from 'react';

export default class Login extends Component {
  state = {
    userName: '',
    email: '',
    btnDisabled: true,
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState(
      {
        [name]: value,
      },
      () => {
        const { userName, email } = this.state;
        if (userName.length > 0 && email.length > 0) {
          this.setState({ btnDisabled: false });
        } else {
          this.setState({ btnDisabled: true });
        }
      },
    );
  };

  render() {
    const { userName, email, btnDisabled } = this.state;
    return (
      <>
        <label>
          Nome
          <input
            type="text"
            name="userName"
            value={ userName }
            onChange={ this.handleChange }
            data-testid="input-player-name"
          />
        </label>
        <label>
          e-mail
          <input
            type="text"
            name="email"
            value={ email }
            data-testid="input-gravatar-email"
            onChange={ this.handleChange }
          />
        </label>
        <button
          type="button"
          data-testid="btn-play"
          disabled={ btnDisabled }
        >
          Play
        </button>
      </>
    );
  }
}
