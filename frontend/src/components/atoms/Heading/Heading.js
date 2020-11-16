import React from 'react';
import PropTypes from 'prop-types';
import styles from './Heading.module.scss';

const Heading = ({ title, big }) => {
  const className = big ? styles.headingXL : styles.heading;
  return <h1 className={className}>{title}</h1>;
};

Heading.propTypes = {
  title: PropTypes.string,
  big: PropTypes.bool,
};

Heading.defaultProps = {
  title: 'Heading',
  big: false,
};

export default Heading;
