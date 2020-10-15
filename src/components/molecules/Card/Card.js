import React from 'react';
import PropTypes from 'prop-types';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import ParagraphXS from 'components/atoms/ParagraphXS/ParagraphXS';
import Button from 'components/atoms/Button/Button';
import styles from './Card.module.scss';

const Card = ({ type, name }) => {
  const headingType = styles[type];

  return (
    <div className={styles.card}>
      <div className={`${styles.cardHeading} ${headingType}`}>
        <Heading type={type} name={name} />
        <ParagraphXS name="3 days" />
        {type === 'twitter' && (
          <img alt="twitter avatar" src="https://unavatar.now.sh/twitter/hello_roman" />
        )}
        {type === 'article' && (
          <a
            v-text="icon"
            aria-label="article link"
            className={styles.iconLink}
            href="https://google.com"
          />
        )}
      </div>
      <div className={styles.cardBody}>
        <div className={styles.cardBodyPara}>
          <Paragraph />
          <ParagraphXS bold name="READ MORE" />
        </div>
        <Button label="Remove" secondary />
      </div>
    </div>
  );
};

Card.propTypes = {
  type: PropTypes.oneOf(['twitter', 'note', 'article']),
  name: PropTypes.string,
};

Card.defaultProps = {
  type: 'twitter',
  name: 'Heading',
};

export default Card;
