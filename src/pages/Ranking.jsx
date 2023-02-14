import React, { Component } from 'react';
import { Redirect } from 'react-router';

class Ranking extends Component {
  constructor(args) {
    super(args);
    this.state = {
      redirect: false,
      ranking: [],
      indice: [],
    };
  }

  componentDidMount() {
    const ranking = JSON.parse(localStorage.getItem('ranking'));
    const indice = [];
    ranking.forEach((e, i) => { indice.push(e ? i : null); });

    // console.log(savedData);
    // const ranking = savedData.sort((a, b) => b.score - a.score);
    this.setState({
      ranking,
      indice,
    });
  }

  chamaLogin = () => {
    this.setState({
      redirect: true,
    });
  };

  render() {
    const { redirect, ranking, indice } = this.state;
    if (redirect) {
      return <Redirect to="/" />;
    }

    return (
      <>
        <h1 data-testid="ranking-title">Ranking</h1>
        {ranking.length > 0 ? ranking.map((elemento, index) => (
          <div key={ indice[index] }>
            <img
              src={ elemento.picture }
              alt={ elemento.name }
            />
            <h1 data-testid={ `player-name-${indice[index]}` }>{elemento.name}</h1>
            <h1 data-testid={ `player-score-${indice[index]}` }>{elemento.score}</h1>
          </div>
        )) : null}
        <div className="ranking-container" />
        <button
          type="button"
          data-testid="btn-go-home"
          onClick={ () => this.chamaLogin() }
        >
          voltar para Login
        </button>
      </>
    );
  }
}

export default Ranking;
