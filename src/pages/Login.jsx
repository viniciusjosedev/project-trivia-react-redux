import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import getToken from '../api/getToken';
import { submitLogin } from '../redux/actions';

class Login extends Component {
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
    const { history, dispatch } = this.props;
    await getToken(history);
    dispatch(submitLogin({ ...this.state }));
  };

  redirectPage = () => {
    const { history } = this.props;

    history.push('/configuracao');
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
        <button
          type="button"
          data-testid="btn-settings"
          onClick={ this.redirectPage }
        >
          Configurações
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

export default connect()(Login);
