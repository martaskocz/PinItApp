import React from 'react';
import PropTypes from 'prop-types';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import ParagraphXS from 'components/atoms/ParagraphXS/ParagraphXS';
import Button from 'components/atoms/Button/Button';
import styles from './Card.module.scss';

const Card = ({ articleUrl, content, created, type, title, twitterName }) => {
  const headingType = styles[type];

  return (
    <div className={styles.card}>
      <div className={`${styles.cardHeading} ${headingType}`}>
        <Heading title={title} />
        <ParagraphXS name={created} />
        {type === 'twitter' && <img alt="twitter avatar" src={twitterName} />}
        {type === 'article' && (
          <a
            v-text="icon"
            aria-label="article link"
            className={styles.iconLink}
            href={articleUrl}
          />
        )}
      </div>
      <div className={styles.cardBody}>
        <div className={styles.cardBodyPara}>
          <Paragraph>{content}</Paragraph>
          <ParagraphXS bold name="READ MORE" />
        </div>
        <Button label="Remove" secondary />
      </div>
    </div>
  );
};

Card.propTypes = {
  type: PropTypes.oneOf(['twitter', 'note', 'article']),
  title: PropTypes.string.isRequired,
  created: PropTypes.string.isRequired,
  twitterName: PropTypes.string,
  articleUrl: PropTypes.string,
  content: PropTypes.string.isRequired,
};

Card.defaultProps = {
  type: 'twitter',
  twitterName: null,
  articleUrl: null,
};

export default Card;
