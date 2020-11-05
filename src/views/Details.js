import React from 'react';
import PropTypes from 'prop-types';
import withContext from 'hoc/withContext';
import CardDetails from 'templates/CardDetails';
import SideBar from 'components/organisms/SideBar/SideBar';

const Details = ({ pageContext }) => (
  <>
    <SideBar pageContext={pageContext} />
    <CardDetails pageContext={pageContext} />
  </>
);

Details.propTypes = {
  pageContext: PropTypes.oneOf(['notes', 'twitters', 'articles']).isRequired,
};

export default withContext(Details);
