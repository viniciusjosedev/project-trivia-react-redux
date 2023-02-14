import { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';
import { getQuestions } from '../api/getToken';
import funcOrderList from '../helper/funcOrderList';
import OptionButton from '../components/OptionButton';
import { attScore } from '../redux/actions/index';

class Game extends Component {
  state = {
    questions: [],
    timer: 30,
    lista: [],
    isDisabled: true,
    changeButtonBorder: false,
    next: false,
    indice: 0,
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
      this.setState((state) => ({
        questions: valor.results,
        lista: funcOrderList(valor.results[state.indice]),
      }));
    }
  };

  funcTimer = (reset) => {
    const NUMBER_INTERVAL = 1000;
    const NUMBER_TIMEOUT = 30000;
    const interval = setInterval(() => {
      this.setState((atual) => ({
        timer: atual.timer - 1,
        isDisabled: false,
      }));
    }, NUMBER_INTERVAL);
    const timeout = setTimeout(() => {
      clearInterval(interval);
      this.setState({
        isDisabled: true,
      });
    }, NUMBER_TIMEOUT);
    if (reset) {
      clearTimeout(interval);
      clearTimeout(timeout);
    }
  };

  funcClickResponse = (response) => {
    const { timer, questions } = this.state;
    let { assertions } = this.props;
    const VALUE_SOME_DEFAULT = 10;
    const GABARITO = { hard: 3, medium: 2, easy: 1 };
    const { dispatch } = this.props;
    if (response === 'correct-answer') {
      const score = VALUE_SOME_DEFAULT + (timer * GABARITO[questions[0].difficulty]);
      assertions += 1;
      const infoScore = ({ score, assertions });
      dispatch(attScore(infoScore));
      // dispatch(attScore(score));
    }

    this.setState({
      changeButtonBorder: true,
      next: true,
    });
  };

  funcNext = () => {
    const { indice, questions } = this.state;
    const { history } = this.props;
    this.setState({
      indice: indice < questions.length - 1 ? indice + 1 : '/feedbacks',
    }, () => {
      const { state } = this;
      if (typeof state.indice === 'number') {
        this.setState((states) => ({
          lista: funcOrderList(questions[states.indice]),
          changeButtonBorder: false,
        }));
        this.setState({
          timer: 30,
        }, () => this.funcTimer(true));
      } else {
        const { score } = this.props;
        const ranking = JSON.parse(localStorage.getItem('ranking'));
        ranking[ranking.length - 1].score = score;
        const rankingOrder = ranking.sort((a, b) => b.score - a.score);
        localStorage.setItem('ranking', JSON.stringify(rankingOrder));
        history.push('/feedbacks');
      }
    });
  };

  render() {
    const {
      questions,
      timer,
      lista,
      isDisabled,
      changeButtonBorder,
      next,
      indice,
    } = this.state;
    return (
      <>
        <Header />
        {
          questions.length > 0
            ? (
              <div>
                <h1 data-testid="question-category">
                  {typeof indice === 'number'
                    ? questions[indice].category : null}

                </h1>
                <h1 data-testid="question-text">
                  {typeof indice === 'number'
                    ? questions[indice].question : null}

                </h1>
                <h1>{timer}</h1>
                <div data-testid="answer-options">
                  { lista.map((elemento, index) => (
                    <OptionButton
                      key={ index }
                      isDisabled={ isDisabled }
                      element={ elemento }
                      click={ this.funcClickResponse }
                      changeStyle={ changeButtonBorder }
                    />
                  )) }
                </div>
                {
                  next
                    ? (
                      <button
                        type="button"
                        onClick={ this.funcNext }
                        data-testid="btn-next"
                      >
                        Next
                      </button>
                    ) : null
                }
              </div>
            )
            : null
        }
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  assertions: state.player.assertions,
  score: state.player.score,
});

export default connect(mapStateToProps)(Game);

Game.propTypes = {
  assertions: PropTypes.number,
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.objectOf(PropTypes.objectOf()),
  push: PropTypes.func,
  score: PropTypes.number,
}.isRequired;

Game.defaultProps = {
  history: {},
  push: () => {},
};
