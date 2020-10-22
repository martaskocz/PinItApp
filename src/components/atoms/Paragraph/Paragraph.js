import React from 'react';
import PropTypes from 'prop-types';
import styles from './Paragraph.module.scss';

const Paragraph = ({ content, additionalInfo }) => {
  const className = additionalInfo ? styles.paragraphInfo : styles.paragraph;
  return <p className={className}>{content}</p>;
};

Paragraph.propTypes = {
  additionalInfo: PropTypes.bool,
  content: PropTypes.string,
};

Paragraph.defaultProps = {
  additionalInfo: false,
  content: 'Lorem ipsum',
};

export default Paragraph;
