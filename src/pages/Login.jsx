import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
    const requisicao = await (await fetch('https://opentdb.com/api_token.php?command=request')).json();
    // const data = await requisicao.json();
    localStorage.setItem('token', requisicao.token);
    history.push('/game');
  };

  render() {
    const { userName, email, btnDisabled } = this.state;
    // console.log(btnDisabled);
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
