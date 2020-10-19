import React from 'react';
import PropTypes from 'prop-types';
import styles from './Heading.module.scss';

const Heading = ({ name, big }) => {
  const className = big ? styles.headingXL : styles.heading;
  return <h1 className={className}>{name}</h1>;
};

Heading.propTypes = {
  name: PropTypes.string,
  big: PropTypes.bool,
};

Heading.defaultProps = {
  name: 'Heading',
  big: false,
};

export default Heading;
