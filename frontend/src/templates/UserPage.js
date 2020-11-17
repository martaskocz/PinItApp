import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field } from 'formik';
import axios from 'axios';
import Logo from 'components/atoms/Logo/Logo';
import Heading from 'components/atoms/Heading/Heading';
import AuthCard from 'components/molecules/AuthCard/AuthCard';
import styles from './UserPage.module.scss';

const UserPage = ({ userAction }) => {
  return (
    <div className={styles.wrapper}>
      <Logo to={`/${userAction}`} big exact />
      <Heading>Your new favourite online notes experience</Heading>
      <AuthCard userAction={userAction} />
      <Formik
        initialValues={{ username: '', password: '' }}
        onSubmit={({ username, password }) => {
          axios
            .post('http://localhost:9000/api/user/login', {
              username,
              password,
            })
            .then(() => console.log('Login successful'))
            .catch((err) => console.log(err));
        }}
      >
        {() => (
          <Form>
            <Field name="username" type="text" />
            <Field name="password" type="password" />
            <button type="submit">Sign In</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

UserPage.propTypes = {
  userAction: PropTypes.string.isRequired,
};

export default UserPage;
