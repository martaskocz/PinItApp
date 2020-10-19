import React from 'react';
import PropTypes from 'prop-types';
import SideBar from 'components/organisms/SideBar/SideBar';

const CardSection = ({ children, type }) => (
  <>
    <SideBar type={type} />
    {children}
  </>
);

CardSection.propTypes = {
  children: PropTypes.element.isRequired,
  type: PropTypes.string.isRequired,
};

export default CardSection;
