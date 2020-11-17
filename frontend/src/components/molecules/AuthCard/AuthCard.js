import React from 'react';
import PropTypes from 'prop-types';
import styles from './AuthCard.module.scss';
import Heading from '../../atoms/Heading/Heading';
import Input from '../../atoms/Input/Input';
import Button from '../../atoms/Button/Button';
import ButtonLink from '../../atoms/ButtonLink/ButtonLink';

const AuthCard = ({ userAction }) => {
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
      <Input id="login" placeholder="login" />
      <Input id="password" placeholder="password" />
      {userAction === 'register' && <Input id="confirmPassword" placeholder="confirm password" />}
      <Button primary upperCase>
        {userActionContent.button}
      </Button>
      <ButtonLink to={userActionContent.buttonLinkTo} asPlainText upperCase>
        {userActionContent.buttonSecond}
      </ButtonLink>
    </div>
  );
};

AuthCard.propTypes = {
  userAction: PropTypes.string.isRequired,
};

export default AuthCard;
