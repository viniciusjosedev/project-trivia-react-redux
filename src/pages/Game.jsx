import { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';
import { getQuestions } from '../api/getToken';
import funcOrderList from '../helper/funcOrderList';
// import OptionButton from '../components/OptionButton';
import { attScore } from '../redux/actions/index';
import style from '../styles/Game.module.css';
import logoTrivia from '../styles/images/logoTrivia.svg';
import iconTimer from '../styles/images/iconTimer.svg';
import elipseA from '../styles/images/EllipseA.svg';
import elipseB from '../styles/images/EllipseB.svg';
import elipseC from '../styles/images/EllipseC.svg';
import elipseD from '../styles/images/EllipseD.svg';
import Footer from '../components/Footer';

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

  // funcClickResponse = (response) => {
  //   const { timer, questions } = this.state;
  //   const VALUE_SOME_DEFAULT = 10;
  //   const GABARITO = { hard: 3, medium: 2, easy: 1 };
  //   const { dispatch } = this.props;
  //   if (response === 'correct-answer') {
  //     dispatch(attScore(VALUE_SOME_DEFAULT
  //       + (timer * GABARITO[questions[0].difficulty])));
  //   }

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
      } else history.push('/feedbacks');
    });
  };

  applyStyle = (changeStyle, element) => {
    if (changeStyle && element[1] === 'correct-answer') {
      return style.greenBorder;
    }

    if (changeStyle) {
      return style.redBorder;
    }
  };

  render() {
    const {
      questions,
      timer,
      lista,
      isDisabled,
      next,
      indice,
      changeButtonBorder,
    } = this.state;
    const ELIPSES = [elipseA, elipseB, elipseC, elipseD];
    return (
      <>
        <Header />
        <img
          className={ style.logoTrivia }
          src={ logoTrivia }
          alt="Logo Trivia"
        />
        <main className={ style.main }>
          {
            questions.length > 0
              ? (
                <>
                  <div className={ style.divPergunta }>
                    <h1 className={ style.h1Category } data-testid="question-category">
                      {typeof indice === 'number'
                        ? questions[indice].category : null}
                    </h1>
                    <h1 className={ style.h1Question } data-testid="question-text">
                      {typeof indice === 'number'
                        ? questions[indice].question : null}
                    </h1>
                    <h1 className={ style.h1Timer }>
                      <img
                        className={ style.iconTimer }
                        src={ iconTimer }
                        alt="Icone do Timer"
                      />
                      {' '}
                      Tempo:
                      {' '}
                      {timer}
                      s
                    </h1>
                  </div>
                  <div className={ style.divRespostas } data-testid="answer-options">
                    { lista.map((elemento, index) => (
                      // <OptionButton
                      //   key={ index }
                      //   isDisabled={ isDisabled }
                      //   element={ elemento }
                      //   click={ this.funcClickResponse }
                      //   changeStyle={ changeButtonBorder }
                      // />

                      <button
                        key={ index }
                        type="button"
                        onClick={ () => this.funcClickResponse(elemento[1]) }
                        data-testid={ elemento[1] }
                        disabled={ isDisabled }
                        className={ `${this.applyStyle(changeButtonBorder, elemento)} 
                          ${style.buttonResposta}` }
                      >
                        <img
                          className={ style.elipseImage }
                          src={ ELIPSES[index] }
                          alt=""
                        />
                        {' '}
                        { elemento[0] }
                      </button>
                    ))}
                  </div>
                </>)
              : null
          }
        </main>
        <div className={ style.divFooter }>
          <button
            type="button"
            className={ style.buttonNext }
            onClick={ this.funcNext }
            data-testid={ next ? 'btn-next' : null }
          >
            PRÓXIMA
          </button>
        </div>
        <Footer />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  assertions: state.player.assertions,
});

export default connect(mapStateToProps)(Game);

Game.propTypes = {
  assertions: PropTypes.number,
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.objectOf(PropTypes.objectOf()),
  push: PropTypes.func,
}.isRequired;

Game.defaultProps = {
  history: {},
  push: () => {},
};
