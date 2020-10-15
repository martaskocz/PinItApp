import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';

const Button = ({ label, secondary }) => {
  const buttonClass = secondary ? styles.secondary : styles.button;

  return (
    <button type="submit" className={buttonClass}>
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string,
  secondary: PropTypes.bool,
};

Button.defaultProps = {
  label: 'Close',
  secondary: false,
};

export default Button;
