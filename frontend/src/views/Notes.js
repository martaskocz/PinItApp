import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import withContext from 'hoc/withContext';
import Card from 'components/molecules/Card/Card';
import CardSection from 'templates/CardSection';
import { fetchItems } from '../actions';

class Notes extends React.Component {

  componentDidMount(){
    const {fetchNotes} = this.props;
    fetchNotes()
  };

  render(){
    const {notes} = this.props;
    return (
      <CardSection>
        {notes.reverse().map(({ content, created, _id: id, title }) => (
          <Card content={content} created={created} id={id} key={id} title={title} />
        ))}
      </CardSection>
    )
  }
}

const mapStateToProps = (state) => {
  const { notes } = state;
  return { notes };
};

const mapDispatchToProps = (dispatch) => ({
  fetchNotes: () => dispatch(fetchItems('notes'))
});

export default connect(mapStateToProps, mapDispatchToProps)(withContext(Notes));

Notes.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired
    }),
  ),
  fetchNotes: PropTypes.func.isRequired
};

Notes.defaultProps = {
  notes: [],
};
