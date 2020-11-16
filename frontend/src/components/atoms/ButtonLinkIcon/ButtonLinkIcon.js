import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, Link } from 'react-router-dom';
import styles from './ButtonLinkIcon.module.scss';

const ButtonLinkIcon = ({ icon, to, exact, logout }) => {
  return (
    <div>
      {logout && (
        <Link
          type="button"
          aria-label="Save"
          className={styles.buttonIcon}
          to={to}
          exact={exact}
          style={{ backgroundImage: `url(${icon})` }}
        />
      )}
      {!logout && (
        <NavLink
          type="button"
          aria-label="Save"
          activeClassName={styles.active}
          className={styles.buttonIcon}
          to={to}
          exact={exact}
          style={{ backgroundImage: `url(${icon})` }}
        />
      )}
    </div>
  );
};

ButtonLinkIcon.propTypes = {
  icon: PropTypes.string,
  to: PropTypes.string.isRequired,
  exact: PropTypes.bool,
  logout: PropTypes.bool,
};

ButtonLinkIcon.defaultProps = {
  icon: 'src/assets/icons/article.svg',
  exact: false,
  logout: false,
};

export default ButtonLinkIcon;
