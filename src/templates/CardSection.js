import React from 'react';
import PropTypes from 'prop-types';
import SideBar from 'components/organisms/SideBar/SideBar';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Input from 'components/atoms/Input/Input';
import Heading from '../components/atoms/Heading/Heading';
import styles from './CardSection.module.scss';

const CardSection = ({ children, type }) => (
  <>
    <SideBar type={type} />
    <div className={styles.cardSectionNav}>
      <Input />
      <Heading big name="Notes" />
      <Paragraph additionalInfo name="12 notes" />
    </div>
    <div className={styles.cardSection}>{children}</div>
  </>
);

CardSection.propTypes = {
  children: PropTypes.element.isRequired,
  type: PropTypes.string.isRequired,
};

export default CardSection;
