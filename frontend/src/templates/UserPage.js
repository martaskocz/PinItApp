import React from 'react';
import PropTypes from 'prop-types';
import Logo from 'components/atoms/Logo/Logo';
import Heading from 'components/atoms/Heading/Heading';
import AuthCard from 'components/molecules/AuthCard/AuthCard';
import styles from './UserPage.module.scss';

const UserPage = ({userAction}) => (
    <div className={styles.wrapper}>
      <Logo big to={`/${userAction}`} />
      <Heading>Your new favourite online notes experience</Heading>
      <AuthCard userAction={userAction} />
    </div>
);

UserPage.propTypes = {
  userAction: PropTypes.string.isRequired,
};

export default UserPage;
