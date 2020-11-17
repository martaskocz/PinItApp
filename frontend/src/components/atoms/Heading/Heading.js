import React from 'react';
import PropTypes from 'prop-types';
import styles from './Heading.module.scss';

const Heading = ({ big, children }) => {
  const className = big ? styles.headingXL : styles.heading;
  return <h1 className={className}>{children}</h1>;
};

Heading.propTypes = {
  big: PropTypes.bool,
  children: PropTypes.string
};

Heading.defaultProps = {
  big: false,
  children: 'Heading'
};

export default Heading;
