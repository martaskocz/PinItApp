import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Input.module.scss';

const Input = ({ id, placeholder, withSearchIcon }) => {
  const classValue = classNames(styles.input, {
    [styles.withSearchIcon]: withSearchIcon,
  });

  return <input className={classValue} id={id} placeholder={placeholder} />;
};

Input.propTypes = {
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  withSearchIcon: PropTypes.bool,
};

Input.defaultProps = {
  placeholder: 'search',
  withSearchIcon: false,
};

export default Input;
