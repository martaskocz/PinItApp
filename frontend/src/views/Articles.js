import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CardSection from 'templates/CardSection';
import Card from 'components/molecules/Card/Card';

const Articles = ({ articles }) => (
  <CardSection>
    {articles.map(({ articleUrl, content, created, _id: id, title }) => (
      <Card
        articleUrl={articleUrl}
        content={content}
        created={created}
        id={id}
        key={id}
        title={title}
      />
    ))}
  </CardSection>
);

const mapStateToProps = (state) => {
  const { articles } = state;
  return { articles };
};

export default connect(mapStateToProps)(Articles);

Articles.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      articleUrl: PropTypes.string.isRequired
    }),
  ),
};

Articles.defaultProps = {
  articles: [],
};
