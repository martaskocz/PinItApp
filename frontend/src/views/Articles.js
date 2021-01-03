import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CardSection from 'templates/CardSection';
import Card from 'components/molecules/Card/Card';
import {fetchItems} from '../actions';

class Articles extends React.Component {

  componentDidMount() {
    const {fetchArticles} = this.props;
    fetchArticles()
  }

  render(){
    const {articles} = this.props;
    return (
      <CardSection>
        {articles.reverse().map(({ articleUrl, content, created, _id: id, title }) => (
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
  }
}

const mapStateToProps = (state) => {
  const { articles } = state;
  return { articles };
};

const mapDispatchToProps = (dispatch) => ({
  fetchArticles: () => dispatch(fetchItems('articles'))
});

export default connect(mapStateToProps, mapDispatchToProps)(Articles);

Articles.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      articleUrl: PropTypes.string.isRequired
    }),
  ),
  fetchArticles: PropTypes.func.isRequired
};

Articles.defaultProps = {
  articles: [],
};
