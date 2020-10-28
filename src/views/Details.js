import React from 'react';
import PropTypes from 'prop-types';
import { routes } from 'routes/routes';
import CardDetails from 'templates/CardDetails';
import SideBar from 'components/organisms/SideBar/SideBar';

const Details = ({ match }) => {
  let type;
  switch (match.path) {
    case routes.twitter:
      type = 'twitter';
      break;
    case routes.article:
      type = 'article';
      break;
    case routes.note:
      type = 'note';
      break;
    default:
      type = 'note';
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
