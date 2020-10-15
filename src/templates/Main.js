import React from 'react';
import PropTypes from 'prop-types';
import GlobalStyle from 'components/theme/GlobalStyle';

const Main = ({ children }) => (
  <div>
    <GlobalStyle />
    <>{children}</>
  </div>
);

export default Main;

Main.propTypes = {
  children: PropTypes.element.isRequired,
};
