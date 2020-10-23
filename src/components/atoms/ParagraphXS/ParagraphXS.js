import React from 'react';
import PropTypes from 'prop-types';
import styles from './ParagraphXS.module.scss';

const ParagraphXS = ({ link, name, bold }) => {
  const className = bold ? styles.paragraphBold : styles.paragraph;
  const Tag = link ? 'a' : 'p';

  return <Tag className={className}>{name}</Tag>;
};

ParagraphXS.propTypes = {
  name: PropTypes.string,
  bold: PropTypes.bool,
  link: PropTypes.bool,
};

ParagraphXS.defaultProps = {
  name: 'Lorem ipsum',
  bold: false,
  link: false,
};

export default ParagraphXS;
