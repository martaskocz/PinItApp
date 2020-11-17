import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './Logo.module.scss';

const Logo = ({ to, exact }) => (
  <Link  aria-label="Save" className={styles.logo} exact={exact} to={to} type="button" />
);

Logo.propTypes = {
  to: PropTypes.string.isRequired,
  exact: PropTypes.bool,
};

Logo.defaultProps = {
  exact: false,
};

export default Logo;
