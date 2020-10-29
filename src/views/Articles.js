import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CardSection from 'templates/CardSection';
import Card from 'components/molecules/Card/Card';

const Articles = ({ articles }) => (
  <CardSection type="article">
    {articles.map(({ articleUrl, content, created, id, title }) => (
      <Card
        id={id}
        type="article"
        title={title}
        content={content}
        articleUrl={articleUrl}
        created={created}
        key={id}
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
  articles: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};
