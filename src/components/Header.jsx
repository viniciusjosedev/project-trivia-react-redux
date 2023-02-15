import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import gravatarImg from '../helper/getGravatarImg';
import style from '../styles/Header.module.css';
import starScore from '../styles/images/starScore.svg';

class Header extends Component {
  state = {
    gravatar: '',
  };

  componentDidMount() {
    const { gravatarEmail } = this.props;
    this.setState({ gravatar: gravatarImg(gravatarEmail) });
  }

  render() {
    const {
      name,
      score,
    } = this.props;

    const { gravatar } = this.state;

    return (
      <header className={ style.header }>
        <div className={ style.divPlayer }>
          <img
            data-testid="header-profile-picture"
            src={ gravatar }
            alt="gravatar"
            className={ style.imgProfile }
          />
          <p className={ style.headerName } data-testid="header-player-name">{ name }</p>
        </div>
        <div className={ style.divScore }>
          <img
            src={ starScore }
            alt="Estrela dos pontos"
            className={ style.imgStarScore }
          />
          <p className={ style.score } data-testid="header-score">
            { score }
          </p>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state.player,
});

export default connect(mapStateToProps)(Header);

Header.propTypes = {
  gravatarEmail: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};
