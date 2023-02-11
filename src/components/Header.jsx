import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import gravatarImg from '../helper/getGravatarImg';

class Header extends Component {
  state = {
    gravatar: '',
  };

  componentDidMount() {
    const { email } = this.props;
    this.setState({ gravatar: gravatarImg(email) });
  }

  render() {
    const {
      userName,
      score,
    } = this.props;

    const { gravatar } = this.state;

    return (
      <div>
        <img data-testid="header-profile-picture" src={ gravatar } alt="gravatar" />
        <p data-testid="header-player-name">{ userName }</p>
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
  email: PropTypes.string,
  score: PropTypes.number,
  userName: PropTypes.string,
};

Header.defaultProps = {
  email: '',
  score: 0,
  userName: '',
};
