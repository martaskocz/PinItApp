import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Button.module.scss';

const Button = ({ asPlainText, onClick, label, primary, secondary, activeType, upperCase }) => {
  const classValue = classNames(styles.button, styles[`${activeType}`], {
    [styles.primary]: primary,
    [styles.secondary]: secondary,
    [styles.asPlainText]: asPlainText,
    [styles.upperCase]: upperCase,
  });

  return (
    <button className={classValue} onClick={onClick} type="submit">
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
  activeType: PropTypes.string,
  upperCase: PropTypes.bool,
};

Button.defaultProps = {
  activeType: null,
  asPlainText: false,
  onClick: () => {},
  label: 'Close',
  primary: false,
  secondary: false,
  upperCase: false,
};

export default Button;
