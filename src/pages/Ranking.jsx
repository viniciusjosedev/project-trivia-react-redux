import React, { Component } from 'react';
import { Redirect } from 'react-router';
import style from '../styles/Ranking.module.css';
import logoTrivia from '../styles/images/logoTrivia.svg';
import starScore from '../styles/images/starScore.svg';
import Footer from '../components/Footer';

class Ranking extends Component {
  constructor(args) {
    super(args);
    this.state = {
      redirect: false,
      ranking: [],
    };
  }

  componentDidMount() {
    const ranking = JSON.parse(localStorage.getItem('ranking'));

    this.setState({
      ranking,
    });
  }

  chamaLogin = () => {
    this.setState({
      redirect: true,
    });
  };

  render() {
    const { redirect, ranking } = this.state;
    if (redirect) {
      return <Redirect to="/" />;
    }

    return (
      <>
        <main className={ style.main }>
          <img className={ style.logoTrivia } src={ logoTrivia } alt="" />
          <div className={ style.divBranca }>
            <h1 className={ style.h1Ranking } data-testid="ranking-title">Ranking</h1>
            {ranking.length > 0 ? ranking.map((elemento, index) => (
              <div className={ style.divLista } key={ index }>
                <img
                  src={ elemento.picture }
                  alt={ elemento.name }
                  className={ style.imgRanking }
                />
                <h1
                  className={ style.h1Name }
                  data-testid={ `player-name-${index}` }
                >
                  {elemento.name}
                </h1>
                <div className={ style.divScore }>
                  <img className={ style.starScore } src={ starScore } alt="" />
                  <h1
                    className={ style.score }
                    data-testid={ `player-score-${index}` }
                  >
                    {elemento.score}
                  </h1>
                  <p className={ style.pontos }>pontos</p>
                </div>
              </div>
            )) : null}
            <button
              type="button"
              className={ style.buttonPlayAgain }
              data-testid="btn-go-home"
              onClick={ this.chamaLogin }
            >
              voltar para Login
            </button>
          </div>
        </main>
        <Footer />
      </>
    );
  }
}

export default Ranking;
