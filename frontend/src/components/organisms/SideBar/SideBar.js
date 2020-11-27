import React from 'react';
import PropTypes from 'prop-types';
import ButtonLinkIcon from 'components/atoms/ButtonLinkIcon/ButtonLinkIcon';
import Logo from 'components/atoms/Logo/Logo';
import ArticleIcon from 'assets/icons/article.svg';
import NoteIcon from 'assets/icons/note.svg';
import TwitterIcon from 'assets/icons/twitter.svg';
import LogoutIcon from 'assets/icons/logout.svg';
import styles from './SideBar.module.scss';

const SideBar = ({ pageContext }) => {
  const activeType = styles[pageContext];

  return (
    <div className={`${styles.wrapper} ${activeType}`}>
      <Logo to="/" />
      <div className={styles.icons}>
        <ButtonLinkIcon icon={NoteIcon} to="/notes" />
        <ButtonLinkIcon icon={TwitterIcon} to="/twitters" />
        <ButtonLinkIcon icon={ArticleIcon} to="/articles" />
      </div>
      <ButtonLinkIcon logout icon={LogoutIcon} to="/login" />
    </div>
  );
};

SideBar.propTypes = {
  pageContext: PropTypes.oneOf(['twitters', 'articles', 'notes']).isRequired,
};

export default SideBar;
