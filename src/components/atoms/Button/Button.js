import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Button.module.scss';

const Button = ({ asPlainText, onClick, label, primary, secondary, upperCase }) => {
  const classValue = classNames(styles.button, {
    [styles.primary]: primary,
    [styles.secondary]: secondary,
    [styles.asPlainText]: asPlainText,
    [styles.upperCase]: upperCase,
  });

  return (
    <button onClick={onClick} type="submit" className={classValue}>
      {label}
    </button>
  );
};

Button.propTypes = {
  asPlainText: PropTypes.bool,
  onClick: PropTypes.func,
  label: PropTypes.string,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  upperCase: PropTypes.bool,
};

Button.defaultProps = {
  asPlainText: false,
  onClick: () => {},
  label: 'Close',
  primary: false,
  secondary: false,
  upperCase: false,
};

export default Button;
