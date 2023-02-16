import PropTypes from 'prop-types';
import { Component } from 'react';
import { connect } from 'react-redux';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { clearStore } from '../redux/actions';
import styles from '../styles/Feedbacks.module.css';
import logoTrivia from '../styles/images/logoTrivia.svg';
import gravatarImg from '../helper/getGravatarImg';

const MIN_ASSERTIONS = 3;

class Feedbacks extends Component {
  state = {
    gravatar: '',
    borderColor: '',
    fontColor: '',
  };

  componentDidMount() {
    const { gravatarEmail, assertions } = this.props;
    console.log(gravatarEmail);
    this.setState({ gravatar: gravatarImg(gravatarEmail) });

    if (assertions < MIN_ASSERTIONS) {
      this.setState({
        fontColor: styles.redFont,
        borderColor: styles.redBorder,
      });
    } else {
      this.setState({
        borderColor: styles.greenBorder,
        fontColor: styles.greenFont,
      });
    }
  }

  funcButton = () => {
    const { history, dispatch } = this.props;
    dispatch(clearStore());
    history.push('/ranking');
  };

  redirectToInitialPage = () => {
    const { history, dispatch } = this.props;
    dispatch(clearStore());
    history.push('/');
  };

  render() {
    const GOOD_RESULT = 'Well Done!';
    const BAD_RESULT = 'Could be better...';
    const { assertions, score } = this.props;
    const { gravatar, borderColor, fontColor } = this.state;
    return (
      <>
        <Header />

        <img src={ logoTrivia } alt="logo trivia" className={ styles.logoTrivia } />

        <main className={ styles.feedback__container }>
          <img
            src={ gravatar }
            alt="avatar"
            className={ `${styles.gravatar} ${borderColor}` }
          />
          <div className={ styles.feedback__info }>
            <h1
              data-testid="feedback-text"
              className={ `${fontColor} ${styles.feedbackTitle}` }
            >
              {assertions < MIN_ASSERTIONS ? BAD_RESULT : GOOD_RESULT}
            </h1>
            <h3 className={ styles.grayTitle }>
              Você acertou
              {' '}
              <span data-testid="feedback-total-question">{assertions}</span>
              {' '}
              perguntas
            </h3>
            <h3 className={ styles.grayTitle }>
              Um total de
              {' '}
              <span data-testid="feedback-total-score">{score}</span>
              {' '}
              pontos
            </h3>
          </div>
        </main>

        <div className={ styles.buttonsContainer }>
          <button
            onClick={ this.funcButton }
            data-testid="btn-ranking"
            className={ styles.rankingButton }
          >
            Ver ranking
          </button>
          <button
            type="button"
            data-testid="btn-play-again"
            onClick={ this.redirectToInitialPage }
            className={ styles.playAgainButton }
          >
            Jogar novamente
          </button>
        </div>
        <Footer />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  score: state.player.score,
  gravatarEmail: state.player.gravatarEmail,
  assertions: state.player.assertions,
});

export default connect(mapStateToProps)(Feedbacks);

Feedbacks.propTypes = {
  assertions: PropTypes.number,
  history: PropTypes.objectOf(PropTypes.objectOf),
  push: PropTypes.func,
}.isRequired;

Feedbacks.defaultProps = {
  history: {},
  push: () => {},
};
