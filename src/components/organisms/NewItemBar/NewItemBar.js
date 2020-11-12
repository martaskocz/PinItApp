import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import withContext from 'hoc/withContext';
import { addItem as addAction } from 'actions';
import Heading from '../../atoms/Heading/Heading';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import Input from '../../atoms/Input/Input';
import Button from '../../atoms/Button/Button';
import styles from './NewItemBar.module.scss';

const NewItemBar = ({ showItem, addItem, pageContext }) => {
  const typeSingular = pageContext.slice(0, -1);
  const requiredItems = {
    twitter: ['account name', 'description'],
    note: ['title', 'description'],
    article: ['title', 'description', 'link'],
  };

  const require = `${requiredItems[typeSingular].slice(0, -1).join(', ')} and ${requiredItems[
    typeSingular
  ].slice(-1)}`;

  return (
    <div className={`${styles.newItemBar} ${styles[pageContext]} ${styles[showItem]}`}>
      <Heading big title={`Add a new ${typeSingular}`} />
      <Paragraph newItem content={`A ${typeSingular} requires ${require}`} />
      {typeSingular !== 'twitter' && <Input id="title" placeholder="title" />}
      {typeSingular === 'twitter' && <Input id="account name" placeholder="account name" />}
      {typeSingular === 'article' && <Input id="link" placeholder="link" />}
      <Input id="description" placeholder="description" textArea />
      <Button
        onClick={() => addItem(pageContext, { typeSingular })}
        primary
        type={pageContext}
        upperCase
        label="add note"
      />
    </div>
  );
};

NewItemBar.propTypes = {
  pageContext: PropTypes.oneOf(['notes', 'twitters', 'articles']).isRequired,
  showItem: PropTypes.string.isRequired,
  addItem: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (type, content) => dispatch(addAction(type, content)),
});

export default connect(null, mapDispatchToProps)(withContext(NewItemBar));
