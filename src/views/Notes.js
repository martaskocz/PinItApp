import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Card from 'components/molecules/Card/Card';
import CardSection from 'templates/CardSection';

const Notes = ({ notes }) => (
  <CardSection type="notes">
    {notes.map(({ content, created, id, title }) => (
      <Card id={id} type="notes" title={title} content={content} created={created} key={id} />
    ))}
  </CardSection>
);

const mapStateToProps = (state) => {
  const { notes } = state;
  return { notes };
};

export default connect(mapStateToProps)(Notes);

Notes.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      created: PropTypes.string.isRequired,
    }),
  ),
};

Notes.defaultProps = {
  notes: [],
};
