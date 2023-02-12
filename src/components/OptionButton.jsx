import PropTypes from 'prop-types';
import React, { Component } from 'react';
import stylesOptionButton from '../styles/optionButton.module.css';

export default class OptionButton extends Component {
  applyStyle = () => {
    const { changeStyle, element } = this.props;

    if (changeStyle && element[1] === 'correct-answer') {
      return stylesOptionButton.greenBorder;
    }

    if (changeStyle) {
      return stylesOptionButton.redBorder;
    }
  };

  render() {
    const { isDisabled, element, click } = this.props;

    return (
      <button
        type="button"
        onClick={ () => click(element[1]) }
        data-testid={ element[1] }
        disabled={ isDisabled }
        className={ this.applyStyle() }
      >
        { element[0] }
      </button>
    );
  }
}

OptionButton.propTypes = {
  isDisabled: PropTypes.bool.isRequired,
  element: PropTypes.arrayOf(PropTypes.string).isRequired,
  click: PropTypes.func.isRequired,
  changeStyle: PropTypes.bool.isRequired,
};
