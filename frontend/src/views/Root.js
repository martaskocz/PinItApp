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
import Login from './Login';
import Register from './Register';

const Root = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Main>
        <Switch>
          <Route component={Login} path={routes.login} exact />
          <Route component={Register} path={routes.register} exact />
          <Route path={routes.root} render={() => <Redirect to="/notes" />} exact />
          <Route
            component={Details}
            path={routes.note}
            render={(props) => <Details {...props} />}
          />
          <Route component={Notes} path={routes.notes} />
          <Route component={Details} path={routes.twitter} />
          <Route component={Twitters} path={routes.twitters} />
          <Route component={Details} path={routes.article} />
          <Route component={Articles} path={routes.articles} />
        </Switch>
      </Main>
    </BrowserRouter>
  </Provider>
);

export default Root;
