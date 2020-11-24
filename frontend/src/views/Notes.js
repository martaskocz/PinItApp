import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Card from 'components/molecules/Card/Card';
import CardSection from 'templates/CardSection';
import withContext from 'hoc/withContext';

const Notes = ({ notes }) => (
  <CardSection>
    {notes.map(({ content, created, _id: id, title }) => (
      <Card content={content} created={created} id={id} key={id} title={title} />
    ))}
  </CardSection>
);

const mapStateToProps = (state) => {
  const { notes } = state;
  return { notes };
};

export default connect(mapStateToProps)(withContext(Notes));

Notes.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired
    }),
  ),
};

Notes.defaultProps = {
  notes: [],
};
