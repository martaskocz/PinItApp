import React from 'react';
import PropTypes from 'prop-types';
import styles from './Paragraph.module.scss';

const Paragraph = ({ name }) => {
  return <p className={styles.paragraph}>{name}</p>;
};

Paragraph.propTypes = {
  name: PropTypes.string,
};

Paragraph.defaultProps = {
  name: 'Lorem ipsum',
};

export default Paragraph;
