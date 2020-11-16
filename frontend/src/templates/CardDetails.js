import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import withContext from 'hoc/withContext';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Button from 'components/atoms/Button/Button';
import styles from './CardDetails.module.scss';

const CardDetails = ({ content, dateInfo, title, twitterName, pageContext }) => {
  const history = useHistory();
  const handleGoBack = () =>
    history.replace(history.location.pathname.split('/').slice(0, -1).join('/'));

  return (
    <div className={styles.wrapper}>
      <Heading title={title} big />
      <Paragraph content={dateInfo} date />
      {pageContext === 'twitters' && (
        <img alt="twitter avatar" src={`https://twitter-avatar.now.sh/${twitterName}`} />
      )}
      <Paragraph content={content} />
      {pageContext !== 'notes' && (
        <Button asPlainText upperCase>
          open this {pageContext.slice(0, -1)}
        </Button>
      )}
      <div className={styles.closeButton}>
        <Button activeType={pageContext} onClick={handleGoBack} primary upperCase>
          close / save
        </Button>
      </div>
      <Button asPlainText>remove note</Button>
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

const mapStateToProps = (state, props) => {
  const { pageContext, location } = props;
  const cardItem = state[pageContext].filter((item) => item.id === location.state.id);
  return { ...cardItem[0] };
};

export default connect(mapStateToProps)(withContext(CardDetails));
