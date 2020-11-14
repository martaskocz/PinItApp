import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import withContext from 'hoc/withContext';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Button from 'components/atoms/Button/Button';
import styles from './CardDetails.module.scss';

const CardDetails = ({ content, dateInfo, title, twitterName, pageContext }) => {
  const history = useHistory();
  const handleGoBack = () => history.replace(history.location.pathname.slice(0, -2));

  return (
    <div className={styles.wrapper}>
      <Heading title={title} big />
      <Paragraph content={dateInfo} date />
      {pageContext === 'twitters' && (
        <img alt="twitter avatar" src={`https://twitter-avatar.now.sh/${twitterName}`} />
      )}
      <Paragraph content={content} />
      {pageContext !== 'notes' && (
        <Button label={`open this ${pageContext.slice(0, -1)}`} asPlainText upperCase />
      )}
      <Button label="CLOSE / SAVE" onClick={handleGoBack} type={pageContext} primary />
      <Button label="remove note" asPlainText />
    </div>
  );
};

CardDetails.propTypes = {
  content: PropTypes.string,
  dateInfo: PropTypes.string,
  title: PropTypes.string,
  twitterName: PropTypes.string,
  pageContext: PropTypes.oneOf(['notes', 'twitters', 'articles']).isRequired,
};

CardDetails.defaultProps = {
  content: 'Content',
  dateInfo: 'DD-MM-YYYY',
  title: 'Title',
  twitterName: null,
};

export default withContext(CardDetails);
