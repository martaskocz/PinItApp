import React from 'react';
import PropTypes from 'prop-types';
import styles from './Paragraph.module.scss';

const Paragraph = ({ name, additionalInfo }) => {
  const className = additionalInfo ? styles.paragraphInfo : styles.paragraph;
  return <p className={className}>{name}</p>;
};

Paragraph.propTypes = {
  additionalInfo: PropTypes.bool,
  name: PropTypes.string,
};

Paragraph.defaultProps = {
  additionalInfo: false,
  name: 'Lorem ipsum',
};

export default Paragraph;
