import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import GlobalStyle from 'components/theme/GlobalStyle';

class Main extends React.Component {
  state = {
    pageType: 'notes',
  };

  componentDidMount() {
    this.setCurrentPage();
  }

  componentDidUpdate(prevProps, prevState) {
    this.setCurrentPage(prevState);
  }

  setCurrentPage = (prevState = '') => {
    const pageTypes = ['twitters', 'articles', 'notes'];
    const { pageType } = this.state;
    const {
      location: { pathname },
    } = this.props;
    const [currentPage] = pageTypes.filter((page) => pathname.includes(page));
    if (prevState.pageType !== currentPage) {
      this.setState({ pageType: currentPage });
    }
    return pageType;
  };

  render() {
    const { children } = this.props;
    return (
      <div>
        <GlobalStyle />
        <>{children}</>
      </div>
    );
  }
}

export default withRouter(Main);

Main.propTypes = {
  children: PropTypes.element.isRequired,
  location: PropTypes.shape().isRequired,
};
