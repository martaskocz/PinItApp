import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import { removeItem as removeAction } from 'actions';
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
    const { id, articleUrl, content, created, removeItem, type, title, twitterName } = this.props;
    const { showCardDetails } = this.state;
    const headingType = styles[type];

    if (showCardDetails) {
      return <Redirect to={`${type}/${id}`} />;
    }
    return (
      <div className={styles.card}>
        <div className={`${styles.cardHeading} ${headingType}`}>
          <Heading title={title} />
          <ParagraphXS name={created} />
          {type === 'twitters' && (
            <img alt="twitter avatar" src={`https://twitter-avatar.now.sh/${twitterName}`} />
          )}
          {type === 'articles' && (
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
            <Button
              asPlainText
              label="READ MORE"
              onClick={this.handleShowDetails.bind(this)}
              upperCase
            />
          </div>
          <Button onClick={() => removeItem(type, id)} label="Remove" secondary />
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  type: PropTypes.oneOf(['twitters', 'notes', 'articles']),
  title: PropTypes.string.isRequired,
  created: PropTypes.string.isRequired,
  twitterName: PropTypes.string,
  articleUrl: PropTypes.string,
  content: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  removeItem: PropTypes.func.isRequired,
};

Card.defaultProps = {
  type: 'twitters',
  twitterName: null,
  articleUrl: null,
};

const mapDispatchToProps = (dispatch) => ({
  removeItem: (type, id) => dispatch(removeAction(type, id)),
});

export default connect(null, mapDispatchToProps)(Card); // musimy podac mapDispatchToProps jako drugi argument
// dlatego pierwszy jest nullem
