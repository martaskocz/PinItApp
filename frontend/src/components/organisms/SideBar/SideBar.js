import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { Redirect } from 'react-router-dom';
import Cookies from 'js-cookie';
import Button from 'components/atoms/Button/Button';
import ButtonLinkIcon from 'components/atoms/ButtonLinkIcon/ButtonLinkIcon';
import Logo from 'components/atoms/Logo/Logo';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import ArticleIcon from 'assets/icons/article.svg';
import NoteIcon from 'assets/icons/note.svg';
import TwitterIcon from 'assets/icons/twitter.svg';
import LogoutIcon from 'assets/icons/logout.svg';
import styles from './SideBar.module.scss';

class SideBar extends React.Component {

  handlingButtonClick = () => {
    Cookies.remove('userID');
    return <Redirect to="/" />
  };

  render(){
    const { pageContext, username } = this.props;
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
        <ButtonLinkIcon logout icon={LogoutIcon} to="/" />
        <Button onClick={() => this.handlingButtonClick}>Logout</Button>
      </div>
    );
  }
}

SideBar.propTypes = {
  pageContext: PropTypes.oneOf(['twitters', 'articles', 'notes']).isRequired,
  username: PropTypes.string
};

SideBar.defaultProps = {
  username: 'unknown'
};

const mapStateToProps = state => {
  const {username} = state;
  return { username }
};

export default connect(mapStateToProps)(SideBar);
