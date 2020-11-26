import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Paragraph.module.scss';

const Paragraph = ({ content, additionalInfo, date, newItem, error, padRight }) => {
  const classValue = classNames(styles.paragraph, {
    [styles.paragraphInfo]: additionalInfo,
    [styles.paragraphDate]: date,
    [styles.paragraphNewItem]: newItem,
    [styles.paragraphError]: error,
    [styles.padRight]: padRight,
  });

  return <p className={classValue}>{content}</p>;
};

Paragraph.propTypes = {
  additionalInfo: PropTypes.bool,
  content: PropTypes.string,
  date: PropTypes.bool,
  error: PropTypes.bool,
  padRight: PropTypes.bool,
  newItem: PropTypes.bool,
};

Paragraph.defaultProps = {
  additionalInfo: false,
  content: 'Lorem ipsum',
  date: false,
  error: false,
  padRight: false,
  newItem: false,
};

export default Paragraph;
