import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'store';
import Main from 'templates/Main';
import { routes } from 'routes/routes';
import Twitters from './Twitters';
import Articles from './Articles';
import Notes from './Notes';
import Details from './Details';

const Root = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Main>
        <Switch>
          <Route exact path={routes.root} render={() => <Redirect to="/notes" />} />
          <Route path={routes.note} component={Details} />
          <Route path={routes.notes} component={Notes} />
          <Route path={routes.twitter} component={Details} />
          <Route path={routes.twitters} component={Twitters} />
          <Route path={routes.article} component={Details} />
          <Route path={routes.articles} component={Articles} />
        </Switch>
      </Main>
    </BrowserRouter>
  </Provider>
);

export default Root;
