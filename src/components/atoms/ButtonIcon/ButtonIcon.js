import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import withContext from 'hoc/withContext';
import styles from './ButtonIcon.module.scss';

const ButtonIcon = ({ active, onClick, icon, pageContext }) => {
  const classValue = classNames(styles.buttonIcon, styles[`${pageContext}`], {
    [styles.active]: active,
  });

  return (
    <button
      onClick={onClick}
      aria-label="Save"
      type="button"
      className={classValue}
      style={{ backgroundImage: `url(${icon})` }}
    />
  );
};

ButtonIcon.propTypes = {
  active: PropTypes.bool,
  icon: PropTypes.string,
  onClick: PropTypes.func,
  pageContext: PropTypes.oneOf(['notes', 'twitters', 'articles']).isRequired,
};

ButtonIcon.defaultProps = {
  active: false,
  icon: 'src/assets/icons/article.svg',
  onClick: () => {},
};

export default withContext(ButtonIcon);
