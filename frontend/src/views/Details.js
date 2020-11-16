import React from 'react';
import PropTypes from 'prop-types';
import withContext from 'hoc/withContext';
import CardDetails from 'templates/CardDetails';
import SideBar from 'components/organisms/SideBar/SideBar';

const Details = ({ pageContext, location }) => (
  <>
    <SideBar pageContext={pageContext} />
    <CardDetails location={location} pageContext={pageContext} />
  </>
);

Details.propTypes = {
  pageContext: PropTypes.oneOf(['notes', 'twitters', 'articles']).isRequired,
  location: PropTypes.shape(),
};

Details.defaultProps = {
  location: {},
};

export default withContext(Details);
