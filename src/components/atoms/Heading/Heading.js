import React from 'react';
import PropTypes from 'prop-types';
import styles from './Heading.module.scss';

const Heading = ({ name }) => {
  return <h1 className={styles.heading}>{name}</h1>;
};

Heading.propTypes = {
  name: PropTypes.string,
};

Heading.defaultProps = {
  name: 'Heading',
};

export default Heading;
