import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import ParagraphXS from 'components/atoms/ParagraphXS/ParagraphXS';
import Button from 'components/atoms/Button/Button';
import styles from './Card.module.scss';

class Card extends React.Component {
  state = {
    showCardDetails: false,
  };

  handleShowDetails = () => this.setState({ showCardDetails: true });

  render() {
    const { id, articleUrl, content, created, type, title, twitterName } = this.props;
    const { showCardDetails } = this.state;
    const headingType = styles[type];

    if (showCardDetails) {
      return <Redirect to={`${type}s/${id}`} />;
    }
    return (
      <div className={styles.card}>
        <div className={`${styles.cardHeading} ${headingType}`}>
          <Heading title={title} />
          <ParagraphXS name={created} />
          {type === 'twitter' && (
            <img alt="twitter avatar" src={`https://twitter-avatar.now.sh/${twitterName}`} />
          )}
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
            <Paragraph content={content} />
            <Button label="READ MORE" asPlainText onClick={this.handleShowDetails.bind(this)} />
          </div>
          <Button label="Remove" secondary />
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  type: PropTypes.oneOf(['twitter', 'note', 'article']),
  title: PropTypes.string.isRequired,
  created: PropTypes.string.isRequired,
  twitterName: PropTypes.string,
  articleUrl: PropTypes.string,
  content: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

Card.defaultProps = {
  type: 'twitter',
  twitterName: null,
  articleUrl: null,
};

export default Card;
