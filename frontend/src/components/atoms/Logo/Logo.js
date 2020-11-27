import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Logo.module.scss';

const Logo = ({ big, to }) => {
  const classValue = classNames(styles.logo, { [styles.logoBig]: big });
  return <Link exact aria-label="Save" className={classValue} to={to} type="button" />;
};

Logo.propTypes = {
  big: PropTypes.bool,
  to: PropTypes.string.isRequired,
};

Logo.defaultProps = {
  big: false
};

export default Logo;
