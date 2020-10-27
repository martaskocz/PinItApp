import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import styles from './Article.module.scss';
import Heading from '../../atoms/Heading/Heading';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import Button from '../../atoms/Button/Button';

const Article = ({ content, dateInfo, title }) => {
  const history = useHistory();
  const handleGoBack = () => {
    history.push('/');
  };

  return (
    <div className={styles.wrapper}>
      <Heading big title={title} />
      <Paragraph date content={dateInfo} />
      <Paragraph content={content} />
      <Button primary label="CLOSE / SAVE" onClick={handleGoBack} />
      <Button asPlainText label="remove note" />
    </div>
  );
};

Article.propTypes = {
  content: PropTypes.string,
  dateInfo: PropTypes.string,
  title: PropTypes.string,
};

Article.defaultProps = {
  content: 'Content',
  dateInfo: 'DD-MM-YYYY',
  title: 'Title',
};

export default Article;
