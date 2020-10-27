import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';

const Button = ({ label, secondary, asPlainText, onClick }) => {
  const buttonClass = secondary
    ? styles.secondary
    : asPlainText
    ? styles.asPlainText
    : styles.button;

  return (
    <button onClick={onClick} type="submit" className={buttonClass}>
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string,
  secondary: PropTypes.bool,
  asPlainText: PropTypes.bool,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  label: 'Close',
  secondary: false,
  asPlainText: false,
  onClick: () => {},
};

export default Button;
