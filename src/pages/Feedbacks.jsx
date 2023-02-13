import { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';

class Feedbacks extends Component {
  funcButton = () => {
    const { history } = this.props;
    history.push('/ranking');
  };

  render() {
    return (
      <>
        <Header />
        <h1 data-testid="feedback-text">Feedbacks</h1>
        <button onClick={ this.funcButton } data-testid="btn-ranking">Ranking</button>
      </>
    );
  }
}

export default Feedbacks;

Feedbacks.propTypes = {
  history: PropTypes.objectOf(PropTypes.objectOf),
  push: PropTypes.func,
};

Feedbacks.defaultProps = {
  history: {},
  push: () => {},
};
