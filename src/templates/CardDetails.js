import React from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

const CardDetails = () => (
  <div>
    <h1>Note</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua.
    </p>
    <Link to="/">Go back</Link>
  </div>
);

export default CardDetails;
