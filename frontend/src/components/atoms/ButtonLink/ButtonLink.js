import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import styles from './ButtonLink.module.scss';

const ButtonLink = ({ asPlainText, children, exact, to, upperCase }) => {
  const classValue = classNames(styles.button, {
    [styles.asPlainText]: asPlainText,
    [styles.upperCase]: upperCase,
  });

  return (
    <div>
      <Link className={classValue} exact={exact} to={to} type="submit">
        {children}
      </Link>
    </div>
  );
};

ButtonLink.propTypes = {
  asPlainText: PropTypes.bool,
  children: PropTypes.node.isRequired,
  exact: PropTypes.bool,
  to: PropTypes.string.isRequired,
  upperCase: PropTypes.bool,
};

ButtonLink.defaultProps = {
  asPlainText: false,
  upperCase: false,
  exact: false,
};

export default ButtonLink;
