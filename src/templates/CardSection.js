import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SideBar from 'components/organisms/SideBar/SideBar';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Input from 'components/atoms/Input/Input';
import Heading from '../components/atoms/Heading/Heading';
import styles from './CardSection.module.scss';

const CardSection = ({ children, type, numberOfItems }) => {
  const numberOfItemsLabel =
    numberOfItems === 1 ? `${numberOfItems} ${type.slice(0, -1)}` : `${numberOfItems} ${type}`;

  return (
    <>
      <SideBar type={type} />
      <div className={styles.cardSectionNav}>
        <Input />
        <Heading big title={type} />
        <Paragraph additionalInfo content={numberOfItemsLabel} />
      </div>
      <div className={styles.cardSection}>{children}</div>
    </>
  );
};

CardSection.propTypes = {
  children: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      content: PropTypes.string,
      created: PropTypes.string,
    }),
  ).isRequired,
  type: PropTypes.oneOf(['notes', 'twitters', 'articles']).isRequired,
  numberOfItems: PropTypes.number.isRequired,
};

const mapStateToProps = (state, props) => ({
  numberOfItems: state[props.type].length,
});

export default connect(mapStateToProps)(CardSection);
