import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CloseIcon from 'assets/icons/close.svg';
import PlusIcon from 'assets/icons/plusIcon.svg';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import Heading from 'components/atoms/Heading/Heading';
import Input from 'components/atoms/Input/Input';
import NewItemBar from 'components/organisms/NewItemBar/NewItemBar';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import SideBar from 'components/organisms/SideBar/SideBar';
import withContext from 'hoc/withContext';
import styles from './CardSection.module.scss';

class CardSection extends React.Component {
  state = {
    showNewItemBar: false,
  };

  toggleAddNewItem = () => {
    this.setState((prevState) => ({
      showNewItemBar: !prevState.showNewItemBar,
    }));
  };

  render() {
    const { children, numberOfItems, pageContext } = this.props;
    const { showNewItemBar } = this.state;
    const numberOfItemsLabel =
      numberOfItems === 1
        ? `${numberOfItems} ${pageContext.slice(0, -1)}`
        : `${numberOfItems} ${pageContext}`;

    return (
      <div className={styles.wrapper}>
        <SideBar pageContext={pageContext} />
        <div className={styles.cardSectionNav}>
          <Input id="search" placeholder="search" withSearchIcon />
          <Heading big>{pageContext}</Heading>
          <Paragraph content={numberOfItemsLabel} additionalInfo />
        </div>
        <div className={styles.cardSection}>{children}</div>
        {!showNewItemBar && (
          <ButtonIcon
            icon={PlusIcon}
            onClick={this.toggleAddNewItem.bind(this)}
            to=""
            type={pageContext}
          />
        )}
        <NewItemBar
          handleClose={this.toggleAddNewItem}
          showItem={showNewItemBar ? 'show' : 'hide'}
        />
        {showNewItemBar && (
          <ButtonIcon
            icon={CloseIcon}
            onClick={this.toggleAddNewItem.bind(this)}
            to=""
            type={pageContext}
          />
        )}
      </div>
    );
  }
}

CardSection.propTypes = {
  children: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      content: PropTypes.string,
      created: PropTypes.string,
    }),
  ).isRequired,
  pageContext: PropTypes.oneOf(['notes', 'twitters', 'articles', 'login']).isRequired,
  numberOfItems: PropTypes.number.isRequired,
};

const mapStateToProps = (state, props) => ({
  numberOfItems: state[props.pageContext].length,
});

export default withContext(connect(mapStateToProps)(CardSection));
