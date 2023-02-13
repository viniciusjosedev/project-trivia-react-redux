import { Component } from 'react';
import { PropTypes } from 'prop-types';
import Header from '../components/Header';
import { clearStore } from '../redux/actions';

class Feedbacks extends Component {
  redirectToInitialPage = () => {
    const { history, dispatch } = this.props;
    dispatch(clearStore());
    history.push('/');
  };

  render() {
    return (
      <>
        <Header />
        <h1 data-testid="feedback-text">Feedbacks</h1>
        <button
          type="button"
          data-testid="btn-play-again"
          onClick={ this.redirectToInitialPage }
        >
          Play Again
        </button>
      </>
    );
  }
}

Feedbacks.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
  dispatch: PropTypes.func,
};

Feedbacks.defaultProps = {
  history: {},
  dispatch: () => { },
};

export default Feedbacks;
