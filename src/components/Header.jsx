import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import gravatarImg from '../helper/getGravatarImg';

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
      <div>
        <img data-testid="header-profile-picture" src={ gravatar } alt="gravatar" />
        <p data-testid="header-player-name">{ name }</p>
        <p data-testid="header-score">{ score }</p>
      </div>
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
