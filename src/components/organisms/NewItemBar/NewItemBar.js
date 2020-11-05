import React from 'react';
import PropTypes from 'prop-types';
import withContext from 'hoc/withContext';
import Heading from '../../atoms/Heading/Heading';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import Input from '../../atoms/Input/Input';
import Button from '../../atoms/Button/Button';
import styles from './NewItemBar.module.scss';

const NewItemBar = ({ pageContext }) => {
  return (
    <div className={styles.newItemBar}>
      <Heading big title="Add a new note" />
      <Paragraph newItem content="A note requires title and description" />
      <Input id="title" placeholder="title" />
      <Input id="description" placeholder="description" />
      <Button primary type={pageContext} upperCase label="Add note" />
    </div>
  );
};

NewItemBar.propTypes = {
  pageContext: PropTypes.oneOf(['notes', 'twitters', 'articles']).isRequired,
};

export default withContext(NewItemBar);
