import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Logo.module.scss';

const Logo = ({ big, to, exact }) => {
  const classValue = classNames(styles.logo, { [styles.logoBig]: big });
  return <Link aria-label="Save" className={classValue} exact={exact} to={to} type="button" />;
};

Logo.propTypes = {
  big: PropTypes.bool,
  to: PropTypes.string.isRequired,
  exact: PropTypes.bool,
};

Logo.defaultProps = {
  big: false,
  exact: false,
};

export default Logo;
