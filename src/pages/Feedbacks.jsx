import PropTypes from 'prop-types';
import { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';

class Feedbacks extends Component {
  funcButton = () => {
    const { history } = this.props;
    history.push('/ranking');
  };

  render() {
    const GOOD_RESULT = 'Well Done!';
    const BAD_RESULT = 'Could be better...';
    const MIN_ASSERTIONS = 3;
    const { assertions, score } = this.props;
    return (
      <>
        <Header />
        <h1 data-testid="feedback-total-score">{ score }</h1>
        <h1 data-testid="feedback-total-question">{ assertions }</h1>
        <h1 data-testid="feedback-text">
          {
            assertions < MIN_ASSERTIONS ? BAD_RESULT : GOOD_RESULT
          }
        </h1>
        <h1 data-testid="feedback-text">Feedbacks</h1>
        <button onClick={ this.funcButton } data-testid="btn-ranking">Ranking</button>
      </>
    );
  }
}

Feedbacks.propTypes = {
  assertions: PropTypes.number,
  history: PropTypes.objectOf(PropTypes.objectOf),
  push: PropTypes.func,
}.isRequired;

Feedbacks.defaultProps = {
  history: {},
  push: () => {},
};

const mapStateToProps = (state) => ({
  score: state.player.score,
  assertions: state.player.assertions,
});

export default connect(mapStateToProps)(Feedbacks);
