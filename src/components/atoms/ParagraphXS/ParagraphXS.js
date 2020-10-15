import React from 'react';
import PropTypes from 'prop-types';
import styles from './ParagraphXS.module.scss';

const ParagraphXS = ({ name, bold }) => {
  const className = bold ? styles.paragraphBold : styles.paragraph;

  return <p className={className}>{name}</p>;
};

ParagraphXS.propTypes = {
  name: PropTypes.string,
  bold: PropTypes.bool,
};

ParagraphXS.defaultProps = {
  name: 'Lorem ipsum',
  bold: false,
};

export default ParagraphXS;
