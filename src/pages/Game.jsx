import { Component } from 'react';
import PropTypes from 'prop-types';
import { getQuestions } from '../api/getToken';
import funcOrderList from '../helper/funcOrderList';

export default class Game extends Component {
  state = {
    questions: [],
  };

  componentDidMount() {
    this.funcVerification();
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
      });
    }
  };

  render() {
    const { questions } = this.state;
    return (
      <>
        <h1>Game</h1>
        {
          questions.length > 0
            && (
              <div>
                <h1 data-testid="question-category">{questions[0].category}</h1>
                <h1 data-testid="question-text">{questions[0].question}</h1>
                <div data-testid="answer-options">
                  { funcOrderList(questions).map((elemento, index) => (
                    <button
                      key={ index }
                      type="button"
                      data-testid={ elemento[1] }
                    >
                      {elemento[0]}
                    </button>
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
