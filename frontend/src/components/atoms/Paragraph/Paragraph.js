import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Paragraph.module.scss';

const Paragraph = ({ content, additionalInfo, date, newItem, error }) => {
  const classValue = classNames(styles.paragraph, {
    [styles.paragraphInfo]: additionalInfo,
    [styles.paragraphDate]: date,
    [styles.paragraphNewItem]: newItem,
    [styles.paragraphError]: error,
  });

  return <p className={classValue}>{content}</p>;
};

Paragraph.propTypes = {
  additionalInfo: PropTypes.bool,
  content: PropTypes.string,
  date: PropTypes.bool,
  newItem: PropTypes.bool,
};

Paragraph.defaultProps = {
  additionalInfo: false,
  content: 'Lorem ipsum',
  date: false,
  newItem: false,
};

export default Paragraph;
