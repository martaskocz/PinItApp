import React from 'react';
import PageContext from 'context';

const withContext = (Component) => {
  return (props) => (
    <PageContext.Consumer>
      {(context) => <Component {...props} pageContext={context} />}
    </PageContext.Consumer>
  );
};

export default withContext;
