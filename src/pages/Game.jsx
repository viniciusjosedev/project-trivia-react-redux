import { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import { getQuestions } from '../api/getToken';
import funcOrderList from '../helper/funcOrderList';
import OptionButton from '../components/OptionButton';

export default class Game extends Component {
  state = {
    questions: [],
    timer: 30,
    lista: [],
    isDisabled: true,
    changeButtonBorder: false,
  };

  componentDidMount() {
    this.funcVerification();
    this.funcTimer();
  }

  funcVerification = async () => {
    const NUMBER_FAILLED = 3;
    const { history } = this.props;
    const getToken = localStorage.getItem('token');
    const valor = await getQuestions(getToken);
    if (valor.response_code === NUMBER_FAILLED) {
      history.push('/');
    } else {
      this.setState({
        questions: valor.results,
        lista: funcOrderList(valor.results[0]),
      });
    }
  };

  funcTimer = () => {
    const NUMBER_INTERVAL = 1000;
    const NUMBER_TIMEOUT = 30000;
    const intervalo = setInterval(() => {
      this.setState((atual) => ({
        timer: atual.timer - 1,
        isDisabled: false,
      }));
    }, NUMBER_INTERVAL);
    setTimeout(() => {
      clearInterval(intervalo);
      this.setState({
        isDisabled: true,
      });
    }, NUMBER_TIMEOUT);
  };

  applyStyleChange = () => {
    this.setState({
      changeButtonBorder: true,
    });
  };

  render() {
    const {
      questions,
      timer,
      lista,
      isDisabled,
      changeButtonBorder,
    } = this.state;
    return (
      <>
        <Header />
        {
          questions.length > 0
            && (
              <div>
                <h1 data-testid="question-category">{questions[0].category}</h1>
                <h1 data-testid="question-text">{questions[0].question}</h1>
                <h1>{timer}</h1>
                <div data-testid="answer-options">
                  { lista.map((elemento, index) => (
                    <OptionButton
                      key={ index }
                      isDisabled={ isDisabled }
                      element={ elemento }
                      click={ this.applyStyleChange }
                      changeStyle={ changeButtonBorder }
                    />
                  )) }
                </div>
              </div>
            )
        }
      </>
    );
  }
}

Game.propTypes = {
  history: PropTypes.objectOf(PropTypes.objectOf),
  push: PropTypes.func,
};

Game.defaultProps = {
  history: {},
  push: () => {},
};
