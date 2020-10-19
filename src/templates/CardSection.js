import React from 'react';
import PropTypes from 'prop-types';
import SideBar from 'components/organisms/SideBar/SideBar';
import styles from './CardSection.module.scss';
import Heading from '../components/atoms/Heading/Heading';

const CardSection = ({ children, type }) => (
  <>
    <SideBar type={type} />
    <Heading big name="Notes" />
    <div className={styles.cardSection}>{children}</div>
  </>
);

CardSection.propTypes = {
  children: PropTypes.element.isRequired,
  type: PropTypes.string.isRequired,
};

export default CardSection;
