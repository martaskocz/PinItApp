import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import withContext from 'hoc/withContext';
import { addItem as addAction } from 'actions';
import { Formik, Form } from 'formik';
import Button from '../../atoms/Button/Button';
import Heading from '../../atoms/Heading/Heading';
import Input from '../../atoms/Input/Input';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import styles from './NewItemBar.module.scss';

const NewItemBar = ({ addItem, handleClose, pageContext, showItem }) => {
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
      <Heading big>{`Add a new ${typeSingular}`}</Heading>
      <Paragraph newItem content={`A ${typeSingular} requires ${require}`} />
      <Formik
        initialValues={{ title: '', content: '', articleUrl: '', twitterName: '' }}
        onSubmit={(values) => {
          addItem(pageContext, values);
          handleClose();
        }}
      >
        {({ values, handleBlur, handleChange }) => (
          <Form>
            <Input
              id="title"
              name="title"
              onBlur={handleBlur}
              onChange={handleChange}
              placeholder="title"
              type="text"
              value={values.title}
            />
            {typeSingular === 'twitter' && (
              <Input
                id="account name"
                name="twitterName"
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder="account name"
                type="text"
                value={values.twitterName}
              />
            )}
            {typeSingular === 'article' && (
              <Input
                id="link"
                name="articleUrl"
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder="link"
                type="text"
                value={values.articleUrl}
              />
            )}
            <Input
              textArea
              id="description"
              name="content"
              onBlur={handleBlur}
              onChange={handleChange}
              placeholder="description"
              type="text"
              value={values.content}
            />
            <Button primary upperCase activeType={pageContext} type="submit" >
              add {typeSingular}
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

NewItemBar.propTypes = {
  addItem: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
  pageContext: PropTypes.oneOf(['notes', 'twitters', 'articles']).isRequired,
  showItem: PropTypes.string.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (type, content) => dispatch(addAction(type, content)),
});

export default connect(null, mapDispatchToProps)(withContext(NewItemBar));
