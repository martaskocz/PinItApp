import React from 'react';
import PropTypes from 'prop-types';
import styles from './AuthCard.module.scss';
import Heading from '../../atoms/Heading/Heading';
import Input from '../../atoms/Input/Input';
import Button from '../../atoms/Button/Button';

const AuthCard = () => (
  <div className={styles.wrapper}>
    <Heading>Sign in</Heading>
    <Input id="login" placeholder="login"/>
    <Input id="password" placeholder="password"/>
    <Button primary upperCase>Register</Button>
    <Button asPlainText upperCase>I want to Log In</Button>
  </div>
);

export default AuthCard;