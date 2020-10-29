import React from 'react';
import PropTypes from 'prop-types';
import { routes } from 'routes/routes';
import CardDetails from 'templates/CardDetails';
import SideBar from 'components/organisms/SideBar/SideBar';

const Details = ({ match }) => {
  let type;
  switch (match.path) {
    case routes.twitter:
      type = 'twitters';
      break;
    case routes.article:
      type = 'articles';
      break;
    case routes.note:
      type = 'notes';
      break;
    default:
      type = 'notes';
  }
  return (
    <>
      <SideBar type={type} />
      <CardDetails type={type} />
    </>
  );
};

Details.propTypes = {
  match: PropTypes.shape(),
};

Details.defaultProps = {
  match: {},
};

export default Details;
