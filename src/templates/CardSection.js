import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import withContext from 'hoc/withContext';
import SideBar from 'components/organisms/SideBar/SideBar';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Input from 'components/atoms/Input/Input';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import Heading from 'components/atoms/Heading/Heading';
import NewItemBar from 'components/organisms/NewItemBar/NewItemBar';
import PlusIcon from 'assets/icons/plusIcon.svg';
import CloseIcon from 'assets/icons/close.svg';
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
      <>
        <SideBar pageContext={pageContext} />
        <div className={styles.cardSectionNav}>
          <Input withSearchIcon id="search" placeholder="search" />
          <Heading big title={pageContext} />
          <Paragraph additionalInfo content={numberOfItemsLabel} />
        </div>
        <div className={styles.cardSection}>{children}</div>
        {!showNewItemBar && (
          <ButtonIcon
            onClick={this.toggleAddNewItem.bind(this)}
            type={pageContext}
            to=""
            icon={PlusIcon}
          />
        )}
        <NewItemBar
          handleClose={this.toggleAddNewItem}
          showItem={showNewItemBar ? 'show' : 'hide'}
        />
        {showNewItemBar && (
          <ButtonIcon
            onClick={this.toggleAddNewItem.bind(this)}
            type={pageContext}
            to=""
            icon={CloseIcon}
          />
        )}
      </>
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
  pageContext: PropTypes.oneOf(['notes', 'twitters', 'articles']).isRequired,
  numberOfItems: PropTypes.number.isRequired,
};

const mapStateToProps = (state, props) => ({
  numberOfItems: state[props.pageContext].length,
});

export default withContext(connect(mapStateToProps)(CardSection));
