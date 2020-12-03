import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { logoutUser as logout } from 'actions';
import { Redirect } from 'react-router-dom';
import ButtonLinkIcon from 'components/atoms/ButtonLinkIcon/ButtonLinkIcon';
import Logo from 'components/atoms/Logo/Logo';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import ArticleIcon from 'assets/icons/article.svg';
import NoteIcon from 'assets/icons/note.svg';
import TwitterIcon from 'assets/icons/twitter.svg';
import LogoutIcon from 'assets/icons/logout.svg';
import styles from './SideBar.module.scss';

const SideBar = ({pageContext, username, logoutUser}) => {

  const handleLogout = () => {
    logoutUser();
    return <Redirect to="/"/>
  };

  const activeType = styles[pageContext];

  return (
    <div className={`${styles.wrapper} ${activeType}`}>
      <Logo to="/" />
      <div>
        <ButtonLinkIcon icon={NoteIcon} to="/notes" />
        <ButtonLinkIcon icon={TwitterIcon} to="/twitters" />
        <ButtonLinkIcon icon={ArticleIcon} to="/articles" />
      </div>
      <div>
        <Paragraph content="You are logged as"/>
        <Paragraph strong content={username}/>
      </div>
      <ButtonLinkIcon logout icon={LogoutIcon} onClick={handleLogout} to="/login" />
    </div>
  );
};

SideBar.propTypes = {
  pageContext: PropTypes.oneOf(['twitters', 'articles', 'notes']).isRequired,
  username: PropTypes.string,
  logoutUser: PropTypes.func.isRequired
};

SideBar.defaultProps = {
  username: 'unknown'
};

const mapStateToProps = state => {
  const {username} = state;
  return { username }
};

const mapDispatchToProps = dispatch => ({
  logoutUser: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
