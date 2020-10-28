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
      <Heading big title={`${type}s`} />
      <Paragraph additionalInfo content={`12 ${type}s`} />
    </div>
    <div className={styles.cardSection}>{children}</div>
  </>
);

CardSection.propTypes = {
  children: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      content: PropTypes.string,
      created: PropTypes.string,
    }),
  ).isRequired,
  type: PropTypes.oneOf(['note', 'twitter', 'article']).isRequired,
};

export default CardSection;
