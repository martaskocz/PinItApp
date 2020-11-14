import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import withContext from 'hoc/withContext';
import { addItem as addAction } from 'actions';
import { Formik, Form } from 'formik';
import Heading from '../../atoms/Heading/Heading';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import Input from '../../atoms/Input/Input';
import Button from '../../atoms/Button/Button';
import styles from './NewItemBar.module.scss';

const NewItemBar = ({ showItem, addItem, pageContext, handleClose }) => {
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
      <Formik
        initialValues={{ title: '', content: '', articleUrl: '', twitterName: '', created: '' }}
        onSubmit={(values) => {
          addItem(pageContext, values);
          console.log(values);
          handleClose();
        }}
      >
        {({ values, handleChange, handleBlur }) => (
          <Form>
            <Input
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.title}
              name="title"
              type="text"
              id="title"
              placeholder="title"
            />
            {typeSingular === 'twitter' && (
              <Input
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.twitterName}
                id="account name"
                placeholder="account name"
                name="twitterName"
                type="text"
              />
            )}
            {typeSingular === 'article' && (
              <Input
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.articleUrl}
                id="link"
                placeholder="link"
                name="articleUrl"
                type="text"
              />
            )}
            <Input
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.content}
              id="description"
              placeholder="description"
              name="content"
              type="text"
              textArea
            />
            <Button type="submit" primary activeType={pageContext} upperCase label="add note" />
          </Form>
        )}
      </Formik>
    </div>
  );
};

NewItemBar.propTypes = {
  pageContext: PropTypes.oneOf(['notes', 'twitters', 'articles']).isRequired,
  showItem: PropTypes.string.isRequired,
  addItem: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (type, content) => dispatch(addAction(type, content)),
});

export default connect(null, mapDispatchToProps)(withContext(NewItemBar));
