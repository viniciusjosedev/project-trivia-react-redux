import PropTypes from 'prop-types';
import { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';

class Feedbacks extends Component {
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
      </>
    );
  }
}

Feedbacks.propTypes = {
  assertions: PropTypes.number,
}.isRequired;

const mapStateToProps = (state) => ({
  score: state.player.score,
  assertions: state.player.assertions,
});

export default connect(mapStateToProps)(Feedbacks);
