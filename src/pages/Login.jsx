import React, { Component } from 'react';
import PropTypes from 'prop-types';
import getToken from '../api/getToken';

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

  getToken = async () => {
    const { history } = this.props;
    await getToken();
    history.push('/game');
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
          onClick={ this.getToken }
        >
          Play
        </button>
      </>
    );
  }
}

Login.propTypes = {
  history: PropTypes.objectOf(PropTypes.objectOf),
};

Login.defaultProps = {
  history: {},
};
