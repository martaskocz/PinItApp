import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Paragraph.module.scss';

const Paragraph = ({ content, additionalInfo, date }) => {
  const classValue = classNames(styles.paragraph, {
    [styles.paragraphInfo]: additionalInfo,
    [styles.paragraphDate]: date,
  });

  return <p className={classValue}>{content}</p>;
};

Paragraph.propTypes = {
  additionalInfo: PropTypes.bool,
  content: PropTypes.string,
  date: PropTypes.bool,
};

Paragraph.defaultProps = {
  additionalInfo: false,
  content: 'Lorem ipsum',
  date: false,
};

export default Paragraph;
