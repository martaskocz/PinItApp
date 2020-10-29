import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CardSection from 'templates/CardSection';
import Card from 'components/molecules/Card/Card';

const Twitters = ({ twitters }) => (
  <CardSection type="twitter">
    {twitters.map(({ content, created, id, title, twitterName }) => (
      <Card
        id={id}
        type="twitter"
        title={title}
        twitterName={twitterName}
        created={created}
        content={content}
        key={id}
      />
    ))}
  </CardSection>
);

const mapStateToProps = (state) => {
  const { twitters } = state;
  return { twitters };
};

export default connect(mapStateToProps)(Twitters);

Twitters.propTypes = {
  twitters: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};
