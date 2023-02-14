import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import getToken from '../api/getToken';
import { submitLogin } from '../redux/actions';
import style from '../styles/Login.module.css';
import logoTrivia from '../styles/images/logoTrivia.svg';
import logoSettings from '../styles/images/logoSettings.svg';
import Footer from '../components/Footer';

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
    const { email, userName } = this.state;
    dispatch(submitLogin({ gravatarEmail: email, name: userName }));
    await getToken(history);
  };

  redirectPage = () => {
    const { history } = this.props;
    history.push('/configuracao');
  };

  render() {
    const { userName, email, btnDisabled } = this.state;
    return (
      <>
        <main className={ style.main }>
          <img src={ logoTrivia } alt="Logo Trivia" className={ style.logoTrivia } />
          <div className={ style.divBranca }>
            <input
              type="text"
              placeholder="Qual é o seu e-mail do gravatar?"
              className={ style.inputName }
              name="userName"
              value={ userName }
              onChange={ this.handleChange }
              data-testid="input-player-name"
            />
            <input
              type="text"
              placeholder="Qual é o seu nome?"
              className={ style.inputEmail }
              name="email"
              value={ email }
              data-testid="input-gravatar-email"
              onChange={ this.handleChange }
            />
            <button
              type="button"
              style={ { backgroundColor: btnDisabled ? 'grey' : null } }
              className={ style.btnPlay }
              data-testid="btn-play"
              disabled={ btnDisabled }
              onClick={ this.getToken }
            >
              Play
            </button>
            <button
              type="button"
              className={ style.btnSettings }
              data-testid="btn-settings"
              onClick={ this.redirectPage }
            >
              <img
                className={ style.logoSettings }
                src={ logoSettings }
                alt="Logo Settings"
              />
              Configurações
            </button>
          </div>
        </main>
        <Footer />
      </>
    );
  }
}

Login.propTypes = {
  history: PropTypes.objectOf(PropTypes.objectOf),
  dispatch: PropTypes.func.isRequired,
};

Login.defaultProps = {
  history: {},
};

export default connect()(Login);
