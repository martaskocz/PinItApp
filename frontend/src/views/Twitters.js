import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CardSection from 'templates/CardSection';
import Card from 'components/molecules/Card/Card';
import {fetchItems} from 'actions';

class Twitters extends React.Component {

  componentDidMount() {
    const { fetchTwitters } = this.props;
    fetchTwitters()
  }

  render() {
    const {twitters} = this.props;
    return (
      <CardSection>
        {twitters.map(({ content, created, _id: id, title, twitterName }) => (
          <Card
            content={content}
            created={created}
            id={id}
            key={id}
            title={title}
            twitterName={twitterName}
          />
        ))}
      </CardSection>
    )
  }
}

const mapStateToProps = (state) => {
  const { twitters } = state;
  return { twitters };
};

const mapDispatchToProps = (dispatch) => ({
  fetchTwitters: () => dispatch(fetchItems('twitters'))
});

export default connect(mapStateToProps, mapDispatchToProps)(Twitters);

Twitters.propTypes = {
  twitters: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      twitterName: PropTypes.string.isRequired
    }),
  ),
  fetchTwitters: PropTypes.func.isRequired
};

Twitters.defaultProps = {
  twitters: [],
};
