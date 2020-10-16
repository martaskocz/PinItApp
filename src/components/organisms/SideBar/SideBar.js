import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import ArticleIcon from 'assets/icons/article.svg';
import NoteIcon from 'assets/icons/note.svg';
import TwitterIcon from 'assets/icons/twitter.svg';
import LogoutIcon from 'assets/icons/logout.svg';
import Logo from 'assets/icons/logo.svg';
import styles from './SideBar.module.scss';

const SideBar = ({ type }) => {
  const activeType = styles[type];
  return (
    <div className={`${styles.wrapper} ${activeType}`}>
      <div className={styles.logo}>
        <ButtonIcon icon={Logo} logo />
      </div>
      <div className={styles.icons}>
        <ButtonIcon as={Link} to="/" icon={NoteIcon} />
        <ButtonIcon as={Link} to="/twitters" icon={TwitterIcon} />
        <ButtonIcon as={Link} to="/articles" icon={ArticleIcon} />
      </div>
      <ButtonIcon as={Link} to="/" icon={LogoutIcon} />
    </div>
  );
};

SideBar.propTypes = {
  type: PropTypes.string,
};

SideBar.defaultProps = {
  type: 'twitter',
};

export default SideBar;
