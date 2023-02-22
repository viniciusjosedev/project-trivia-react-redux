import { useState } from 'react';
import PropTypes from 'prop-types';
import style from '../styles/Configuration.module.css';
import logoTrivia from '../styles/images/logoTrivia.svg';
import Footer from '../components/Footer';
import getToken from '../api/getToken';

function Configuration({ history }) {
  const [state, setState] = useState({
    category: 0,
    difficulty: 'any',
    type: 'any',
  });

  const CATEGORY = {
    'Any Category': 0,
    'General Knowledge': 9,
    'Entertainment: Books': 10,
    'Entertainment: Film': 11,
    'Entertainment: Music': 12,
    'Entertainment: Musicals & Theatres': 13,
    'Entertainment: Television': 14,
    'Entertainment: Video Games': 15,
    'Entertainment: Board Games': 16,
    'Science & Nature': 17,
    'Science: Computers': 18,
    'Science: Mathematics': 19,
    Mythology: 20,
    Sports: 21,
    Geography: 22,
    History: 23,
    Politics: 24,
    Art: 25,
    Celebrities: 26,
    Animals: 27,
    Vehicles: 28,
    'Entertainment: Comics': 29,
    'Science: Gadgets': 30,
    'Entertainment: Japanese Anime & Manga': 31,
    'Entertainment: Cartoon & Animations': 32,
  };

  const funcClick = () => {
    localStorage.setItem('settings', JSON.stringify(state));
    getToken(history);
  };

  const funcValue = ({ target: { value, name } }) => {
    setState({ ...state, [name]: value });
  };

  return (
    <>
      <main className={ style.main }>
        <img src={ logoTrivia } alt="Logo Trivia" className={ style.logoTrivia } />
        <div className={ style.divBranca }>
          <h1
            className={ style.h1Settings }
            data-testid="settings-title"
          >
            Configurações
          </h1>
          <select
            name="category"
            className={ style.selectAll }
            style={ { color: 'black' && state.category > 0 } }
            placeholder="categoria"
            data-testid="category"
            value={ state.category }
            onChange={ funcValue }
          >
            {Object.keys(CATEGORY).map((e) => (
              <option key={ e } value={ CATEGORY[e] } alt={ e }>{e}</option>
            ))}
          </select>
          <select
            name="difficulty"
            className={ style.selectAll }
            data-testid="difficulty"
            style={ { color: 'black' && state.difficulty !== 'any' } }
            value={ state.difficulty }
            onChange={ funcValue }
          >
            <option value="any">Any Difficulty</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
          <select
            name="type"
            data-testid="type"
            style={ { color: 'black' && state.type !== 'any' } }
            value={ state.type }
            className={ style.selectAll }
            onChange={ funcValue }
          >
            <option value="any">Any Type</option>
            <option value="multiple">Multiple Choice</option>
            <option value="boolean">True / False</option>
          </select>
          <button
            onClick={ funcClick }
            className={ style.button }
            type="button"
          >
            JOGAR
          </button>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Configuration;

Configuration.propTypes = {
  history: PropTypes.objectOf(PropTypes.objectOf),
}.isRequired;
