import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Button from 'components/atoms/Button/Button';
import styles from './CardDetails.module.scss';

const CardDetails = ({ content, dateInfo, title, twitterName, type }) => {
  const history = useHistory();
  const handleGoBack = () => {
    history.goBack();
  };

  return (
    <div className={styles.wrapper}>
      <Heading big title={title} />
      <Paragraph date content={dateInfo} />
      {type === 'twitters' && (
        <img alt="twitter avatar" src={`https://twitter-avatar.now.sh/${twitterName}`} />
      )}
      <Paragraph content={content} />
      {type !== 'notes' && <Button asPlainText upperCase label={`open this ${type}`} />}
      <Button type={type} primary label="CLOSE / SAVE" onClick={handleGoBack} />
      <Button asPlainText label="remove note" />
    </div>
  );
};

CardDetails.propTypes = {
  content: PropTypes.string,
  dateInfo: PropTypes.string,
  title: PropTypes.string,
  twitterName: PropTypes.string,
  type: PropTypes.string,
};

CardDetails.defaultProps = {
  content: 'Content',
  dateInfo: 'DD-MM-YYYY',
  title: 'Title',
  twitterName: null,
  type: 'notes',
};

export default CardDetails;
