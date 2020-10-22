import React from 'react';
import PropTypes from 'prop-types';
import { routes } from 'routes/routes';
import CardDetails from 'templates/CardDetails';
import SideBar from 'components/organisms/SideBar/SideBar';

const Details = ({ match }) => {
  const type =
    match.path === routes.twitter
      ? 'twitter'
      : match.path === routes.article
      ? 'article'
      : match.path === routes.note
      ? 'note'
      : null;

  return (
    <>
      <SideBar type={type} />
      <CardDetails />
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
