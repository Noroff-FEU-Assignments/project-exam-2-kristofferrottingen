import React from 'react';
import PropTypes from 'prop-types';

function Button({  className, text }) {
  return (
    <button className={className}>{text}</button>
  );
}

Button.propTypes = {
    class: PropTypes.string,
    text: PropTypes.string,
};

export default Button