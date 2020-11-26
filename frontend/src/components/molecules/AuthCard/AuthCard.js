import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom';
import { Formik, Form } from 'formik';
import {authenticate as authAction, registerUser as registerAction } from '../../../actions';
import styles from './AuthCard.module.scss';
import Heading from '../../atoms/Heading/Heading';
import Input from '../../atoms/Input/Input';
import Button from '../../atoms/Button/Button';
import ButtonLink from '../../atoms/ButtonLink/ButtonLink';
import Paragraph from '../../atoms/Paragraph/Paragraph';

const AuthCard = ({ authenticate, registerUser, userAction, userID, error, registerStatus }) => {
  let userActionContent = {};
  if (userAction === 'login') {
    userActionContent = {
      title: 'Sign in',
      button: 'Enter into FavNote',
      buttonLinkTo: '/register',
      buttonSecond: 'I want to register',
    };
  } else if (userAction === 'register') {
    userActionContent = {
      title: 'Create account',
      button: 'Register',
      buttonLinkTo: '/login',
      buttonSecond: 'I want to log in',
    };
  }

  return (
    <div className={styles.wrapper}>
      <Heading>{userActionContent.title}</Heading>
      <Formik
        initialValues={{ username: '', password: '' }}
        onSubmit={({ username, password }) => {
          return userAction === 'login' ? authenticate(username, password) : registerUser(username, password)
        }}
      >
        {({values, handleBlur, handleChange}) => {
          if(userID){
            return <Redirect to="/notes"/>
          }
          return (
            <Form className={styles.form}>
              <Input
                id="username"
                name="username"
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder="login"
                type="text"
                value={values.username}
              />
              <Input
                id="password"
                name="password"
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder="password"
                type="password"
                value={values.password}
              />
              {userAction === 'register' &&
              <Input
                id="confirmPassword"
                placeholder="confirm password"
                type="password"
              />}
              <Button type="submit" primary upperCase>
                {userActionContent.button}
              </Button>
            </Form>
            )
        }}
      </Formik>
      {error && <Paragraph content="Authentication failed" error/>}
      {registerStatus && userAction === 'register' && <Paragraph content="Account has been created" />}
      <ButtonLink to={userActionContent.buttonLinkTo} asPlainText upperCase>
        {userActionContent.buttonSecond}
      </ButtonLink>
    </div>
  );
};

AuthCard.propTypes = {
  authenticate: PropTypes.func.isRequired,
  registerUser: PropTypes.func.isRequired,
  userAction: PropTypes.string.isRequired,
  userID: PropTypes.string,
  error: PropTypes.string
};

AuthCard.defaultProps = {
  userID: '',
  error: ''
};

const mapStateToProps = ({userID=null, error, registerStatus}) => ({userID, error, registerStatus});

const mapDispatchToProps = dispatch => ({
  authenticate: (username, password) => dispatch(authAction(username, password)),
  registerUser: (username, password) => dispatch(registerAction(username, password))
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthCard);
