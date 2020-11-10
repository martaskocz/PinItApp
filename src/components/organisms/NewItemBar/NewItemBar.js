import React from 'react';
import PropTypes from 'prop-types';
import Heading from '../../atoms/Heading/Heading';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import Input from '../../atoms/Input/Input';
import Button from '../../atoms/Button/Button';
import styles from './NewItemBar.module.scss';

const NewItemBar = ({ type, showItem }) => {
  const typeSingular = type.slice(0, -1);
  const requiredItems = {
    twitter: ['account name', 'description'],
    note: ['title', 'description'],
    article: ['title', 'description', 'link'],
  };

  const require = `${requiredItems[typeSingular].slice(0, -1).join(', ')} and ${requiredItems[
    typeSingular
  ].slice(-1)}`;

  return (
    <div className={`${styles.newItemBar} ${styles[type]} ${styles[showItem]}`}>
      <Heading big title={`Add a new ${typeSingular}`} />
      <Paragraph newItem content={`A ${typeSingular} requires ${require}`} />
      {typeSingular !== 'twitter' && <Input id="title" placeholder="title" />}
      {typeSingular === 'twitter' && <Input id="account name" placeholder="account name" />}
      {typeSingular === 'article' && <Input id="link" placeholder="link" />}
      <Input id="description" placeholder="description" textArea />
      <Button primary type={type} upperCase label="add note" />
    </div>
  );
};

NewItemBar.propTypes = {
  type: PropTypes.oneOf(['notes', 'twitters', 'articles']).isRequired,
  showItem: PropTypes.string.isRequired,
};

export default NewItemBar;
