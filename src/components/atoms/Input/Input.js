import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Input.module.scss';

const Input = ({ id, placeholder, withSearchIcon, textArea }) => {
  const classValue = classNames(styles.input, {
    [styles.withSearchIcon]: withSearchIcon,
    [styles.textArea]: textArea,
  });

  return <input className={classValue} id={id} placeholder={placeholder} />;
};

Input.propTypes = {
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  withSearchIcon: PropTypes.bool,
  textArea: PropTypes.bool,
};

Input.defaultProps = {
  placeholder: 'search',
  withSearchIcon: false,
  textArea: false,
};

export default Input;
