import React from 'react';
import PropTypes from 'prop-types';
import styles from './ButtonIcon.module.scss';

const ButtonIcon = ({ active, icon }) => {
  const buttonClass = active ? styles.active : styles.buttonIcon;

  return (
    <button
      type="button"
      aria-label="Save"
      className={buttonClass}
      style={{ backgroundImage: `url(${icon})` }}
    />
  );
};

ButtonIcon.propTypes = {
  active: PropTypes.bool,
  icon: PropTypes.string,
};

ButtonIcon.defaultProps = {
  active: false,
  icon: 'src/assets/icons/article.svg',
};

export default ButtonIcon;
